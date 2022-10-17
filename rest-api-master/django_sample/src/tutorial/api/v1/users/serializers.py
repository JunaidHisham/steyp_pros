from rest_framework import serializers

from users.models import Profile

class ProfilesSerializer(serializers.ModelSerializer):
    class Meta:
        model= Profile
        fields= "__all__"