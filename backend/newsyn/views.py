"""
    newsyn.views
    ~~~~~~~~~~~~

    :copyright: 2016 by Daniel Neuhäuser
"""
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'auth': reverse('auth', request=request, format=format),
        'feeds': reverse('feed-list', request=request, format=format)
    })
