from django.shortcuts import render
from .serializers import UserProfileSerializer, UserRegistrationSerializer, PostSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import Post
from django.contrib.auth import get_user_model
# Create your views here.

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def home(request):
    user = request.user
    following_only = request.GET.get("following") == "true"  # Verifica se o filtro foi ativado

    if following_only:
        following_users = user.following.all()  # Obtém a lista de usuários que o usuário autenticado segue
        posts = Post.objects.filter(author__in=following_users)
    else:
        posts = Post.objects.all()
    
    posts = posts.order_by("-created_at")
    
    serializer = PostSerializer(posts, many=True, context={'request': request})
    
    return Response(serializer.data)
    
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def profile_detail(request, username):
    User = get_user_model()
    user_profile = User.objects.get(username=username)
    serializer = UserProfileSerializer(user_profile, context={'request': request})
    return Response(serializer.data)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def is_following_user(request, username):
    User = get_user_model()
    try:
        user_to_check = User.objects.get(username=username)
    except User.DoesNotExist:
        return Response({"error": "User does not exists."}, status=404)
    is_following = request.user.following.filter(id=user_to_check.id).exists()
    return Response({ "is_following": is_following })


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def follow_user(request, username):
    User = get_user_model()
    user_to_follow = User.objects.get(username=username)
    user = request.user

    if user == user_to_follow:
        return Response({"error": "You cannot follow yourself."}, status=status.HTTP_400_BAD_REQUEST)
    
    user.following.add(user_to_follow)
    return Response({"message": "You are now following this user."})

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def unfollow_user(request, username):
    User = get_user_model()
    user_to_unfollow = User.objects.get(username=username)
    user = request.user
    user.following.remove(user_to_unfollow)
    return Response({"message": "You have unfollowed this user."})


@api_view(["POST"])
def register_user(request):
    serializer = UserRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_post(request):
    user = request.user
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(author=user)
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)