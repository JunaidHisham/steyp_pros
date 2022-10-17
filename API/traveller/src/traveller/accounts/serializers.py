from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.serializers import ModelSerializer

from accounts.models import UserProfile


class UserProfileSerializer(ModelSerializer):
    user = serializers.SerializerMethodField()
    class Meta:
        model = UserProfile
        fields = ("id","user", "username", "first_name", "last_name", "email", "profile_image")

    def get_user(self, instance):
        return instance.user.username