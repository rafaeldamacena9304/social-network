from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Post

class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ["id", "email", "username", "first_name", "last_name", "profile_picture", "bio", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        email = validated_data["email"]
        username = validated_data["username"]
        first_name = validated_data["first_name"]
        last_name = validated_data["last_name"]
        profile_picture = validated_data["profile_picture"]
        bio = validated_data["bio"]
        password = validated_data["password"]

        user = get_user_model()
        new_user = user.objects.create(
            email=email,
            username=username,
            first_name=first_name,
            last_name=last_name,
            profile_picture=profile_picture,
            bio=bio,
        )
        new_user.set_password(password)
        new_user.save()
        return new_user


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ["id", "username", "first_name", "last_name", "profile_picture", "bio"]

        def get_profile_picture(self, obj):
            request = self.context.get('request')
            if obj.profile_picture:
                return request.build_absolute_uri(obj.profile_picture.url)
            return None


class PostSerializer(serializers.ModelSerializer):
    author = UserProfileSerializer(read_only=True)

    class Meta:
        model = Post
        fields = ["id", "title", "content", "author", "created_at"]

    def get_author(self, obj):
        return UserProfileSerializer(obj.author, context=self.context).data