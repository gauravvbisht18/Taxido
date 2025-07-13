from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile, Scooter, Rental

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = UserProfile
        fields = '__all__'

class ScooterSerializer(serializers.ModelSerializer):
    owner_name = serializers.CharField(source='owner.username', read_only=True)

    class Meta:
        model = Scooter
        fields = '__all__'

class RentalSerializer(serializers.ModelSerializer):
    scooter_model = serializers.CharField(source='scooter.model', read_only=True)
    renter_name = serializers.CharField(source='renter.username', read_only=True)

    class Meta:
        model = Rental
        fields = '__all__'
