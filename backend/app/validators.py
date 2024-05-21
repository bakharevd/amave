from django.core.exceptions import ValidationError

def validate_password_strength(value):
    if len(value) < 8:
        raise ValidationError('Пароль слишком короткий. Он должен содержать как минимум 8 символов.')