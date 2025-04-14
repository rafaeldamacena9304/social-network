from django.urls import path
from . import views

urlpatterns = [
    path('register_user/', views.register_user, name="register_user"),
    path('create_post/', views.create_post, name="create_post"),
    path('home/', views.home, name="home"),
    path('profile_detail/<str:username>/', views.profile_detail, name="profile_detail"),
    path('follow/<str:username>/', views.follow_user, name="follow_user"),
    path('unfollow/<str:username>/', views.unfollow_user, name="unfollow_user"),
    path('is_following_user/<str:username>/', views.is_following_user, name="is_following_user"),
]