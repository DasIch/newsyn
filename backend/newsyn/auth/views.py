"""
    newsyn.auth.views
    ~~~~~~~~~~~~~~~~~

    :copyright: 2016 by Daniel Neuhäuser
"""
from django.contrib import auth

from rest_framework import status, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.permissions import IsAuthenticated

from .serializers import LoginSerializer


@api_view(['GET'])
def auth_root(request, format=None):
    return Response({
        'login': reverse('login', request=request, format=format),
        'logout': reverse('logout', request=request, format=format),
        'user': reverse('user', request=request, format=format)
    })


class LoginView(generics.GenericAPIView):
    """
    Logs a user in.
    """
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        auth.login(request, serializer.user)
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def logout(request, format=None):
    """
    Logs a user out.
    """
    if request.user.is_authenticated:
        auth.logout(request)
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user(request, format=None):
    """
    Provides information about the currently logged in user.

    * email
    """
    return Response(
        data={'email': request.user.email},
        status=status.HTTP_200_OK
    )
