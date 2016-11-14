"""
    newsyn.feeds.urls
    ~~~~~~~~~~~~~~~~~

    :copyright: 2016 by Daniel Neuhäuser
"""
from rest_framework.routers import DefaultRouter

from .views import FeedViewSet


router = DefaultRouter()
router.register(r'', FeedViewSet)
urlpatterns = router.urls
