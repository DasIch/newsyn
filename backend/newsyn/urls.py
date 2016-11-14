"""
    newsyn.urls
    ~~~~~~~~~~~

    :copyright: 2016 by Daniel Neuhäuser
"""
from django.conf.urls import url, include
from django.contrib import admin

from .views import api_root


urlpatterns = [
    url(r'^api/$', api_root),
    url(r'^api/auth/', include('newsyn.auth.urls')),
    url(r'^api/feeds/', include('newsyn.feeds.urls')),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^admin/', admin.site.urls),
]
