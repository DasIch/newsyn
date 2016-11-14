"""
    newsyn.feeds.serializers
    ~~~~~~~~~~~~~~~~~~~~~~~~

    :copyright: 2016 by Daniel Neuhäuser
"""
from rest_framework import serializers

from .models import Feed

class FeedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feed
        fields = '__all__'
