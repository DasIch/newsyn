"""
    newsyn.auth.forms
    ~~~~~~~~~~~~~~~~~

    :copyright: 2016 by Daniel Neuhäuser
"""
from django.contrib.auth.forms import (
    UserCreationForm as BaseUserCreationForm,
    UserChangeForm as BaseUserChangeForm
)

from .models import User


class UserCreationForm(BaseUserCreationForm):
    class Meta:
        model = User
        fields = ('email', )


class UserChangeForm(BaseUserChangeForm):
    class Meta:
        model = User
        fields = '__all__'
