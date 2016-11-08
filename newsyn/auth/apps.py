"""
    newsyn.auth.apps
    ~~~~~~~~~~~~~~~~

    :copyright: 2016 by Daniel Neuhäuser
"""
from django.apps import AppConfig


class NewsynAuthConfig(AppConfig):
    name = 'newsyn.auth'
    label = 'newsyn_auth'
    verbose_name = 'Newsyn Auth'
