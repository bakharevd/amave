from rest_framework import serializers
from django.contrib.auth import get_user_model
from .validators import validate_password_strength
from django.core.exceptions import ValidationError

User = get_user_model()

class CustomRegisterSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')

    def validate(self, data):
        # Проверяем совпадение паролей
        if data['password1'] != data['password2']:
            raise ValidationError({'password2': ['Пароли не совпадают.']})
        # Валидация силы пароля
        validate_password_strength(data['password1'])
        return data

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password1']  # Используйте password1 для создания пользователя
        )
        return user