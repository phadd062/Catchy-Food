from rest_framework import serializers

from api.models.users import User
from api.utils.functions.validation import password_is_strong


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def validate(self, data):
        errors = {}
        if not data["email"].endswith(".ca"):
            errors["email"] = "Email has to end in .ca"
        if not password_is_strong(data["password"]):
            errors["password"] = "Weak password, enter a stronger password."
        if errors:
            raise serializers.ValidationError(errors)
        return data