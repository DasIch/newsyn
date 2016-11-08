"""
    newsyn.auth.admin
    ~~~~~~~~~~~~~~~~~

    :copyright: 2016 by Daniel Neuhäuser
"""
from django.contrib import admin
from django.contrib.auth.admin import (
    UserAdmin as BaseUserAdmin, GroupAdmin as BaseGroupAdmin
)
from django.contrib.auth.models import Group

from .models import User
from .forms import UserChangeForm, UserCreationForm


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {
            'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')
        })
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide', ),
            'fields': ('email', 'password1', 'password2')
        }),
    )
    list_display = ('email', 'is_staff')
    search_fields = ('email', )
    ordering = ('email', )
