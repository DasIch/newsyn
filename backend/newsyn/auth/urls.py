"""
    newsyn.auth.urls
    ~~~~~~~~~~~~~~~~

    :copyright: 2016 by Daniel Neuhäuser
"""
from django.conf.urls import url

from .views import auth_root, LoginView, logout


urlpatterns = [
    url('^$', auth_root, name='auth'),
    url('^login/$', LoginView.as_view(), name='login'),
    url('^logout/$', logout, name='logout')
]
