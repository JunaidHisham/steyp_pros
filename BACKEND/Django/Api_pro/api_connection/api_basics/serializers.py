from dataclasses import field
from rest_framework import serializers
from api_basics.models import Bike


class BikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bike
        fields = ['id', 'name', 'mileage', 'price']