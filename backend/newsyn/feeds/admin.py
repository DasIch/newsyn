"""
    newsyn.feeds.admin
    ~~~~~~~~~~~~~~~~~~

    :copyright: 2016 by Daniel Neuhäuser
"""
from django.contrib import admin

from .models import Feed


@admin.register(Feed)
class FeedAdmin(admin.ModelAdmin):
    fields = ('url', )
    read_only_fields = ('title', 'website', 'last_requested')
    list_display = ('title', 'url', 'website', 'last_requested')
    empty_value_display = 'None'
    list_filter = ('last_requested', )
    search_fields = ('title', 'url', 'website')
