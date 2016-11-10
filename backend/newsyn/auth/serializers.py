"""
    newsyn.auth.serializers
    ~~~~~~~~~~~~~~~~~~~~~~~

    :copyright: 2016 by Daniel Neuhäuser
"""
from django.contrib.auth import authenticate

from rest_framework import serializers

from .models import User


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField(required=True)
    password = serializers.CharField(required=True, write_only=True)

    def validate(self, data):
        email = data['email']
        password = data['password']
        self.user = authenticate(email=email, password=password)
        if self.user is None:
            raise serializers.ValidationError('wrong email or password')
        return data
