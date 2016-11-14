"""
    newsyn.feeds.models
    ~~~~~~~~~~~~~~~~~~~

    :copyright: 2016 by Daniel Neuhäuser
"""
from django.db import models



class Feed(models.Model):
    url = models.URLField()
    title = models.CharField(max_length=100, null=True)
    website = models.URLField(null=True)
    last_requested = models.DateTimeField(null=True)
