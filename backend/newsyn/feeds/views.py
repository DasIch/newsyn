"""
    newsyn.feeds.views
    ~~~~~~~~~~~~~~~~~~

    :copyright: 2016 by Daniel Neuhäuser
"""
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Feed
from .serializers import FeedSerializer


class FeedViewSet(viewsets.ReadOnlyModelViewSet):
    model = Feed
    queryset = Feed.objects.filter(last_requested__isnull=False)
    serializer_class = FeedSerializer
    permission_classes = [IsAuthenticated]
