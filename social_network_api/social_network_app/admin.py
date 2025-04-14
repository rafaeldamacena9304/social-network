from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Post
# Register your models here.
class CustomUserAdmin(UserAdmin):
    list_display = ("username", "email", "first_name", "last_name")

class PostAdmin(admin.ModelAdmin):
    list_display = ("title", "author", "created_at")

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Post, PostAdmin)