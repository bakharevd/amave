from rest_framework import serializers
from django.contrib.auth import get_user_model
from .validators import validate_password_strength

User = get_user_model()


class CustomRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')

    def validate_password(self, value):
        validate_password_strength(value)
        return value

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user