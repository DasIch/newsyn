"""
    newsyn.auth.tests
    ~~~~~~~~~~~~~~~~~

    :copyright: 2016 by Daniel Neuhäuser
"""
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from .models import User


USER_EMAIL = 'test@example.com'
USER_PASSWORD = 'password'


def create_user():
    return User.objects.create_user(
        email=USER_EMAIL,
        password=USER_PASSWORD
    )


class TestLoginView(APITestCase):
    def test_login(self):
        user = create_user()
        data = {
            'email': USER_EMAIL,
            'password': USER_PASSWORD
        }
        response = self.client.post(reverse('login'), data, format='json')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

        # Logout only works, if the user is actually logged in. So we logout
        # to make sure that not only the view returns the status code we expect
        # but actually does what we expect.
        response = self.client.post(reverse('logout'))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_wrong_email(self):
        user = create_user()
        data = {
            'email': 'does-not-exist@example.com',
            'password': USER_EMAIL
        }
        response = self.client.post(reverse('login'), data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_wrong_password(self):
        user = create_user()
        data = {
            'email': USER_EMAIL,
            'password': 'wrong-password'
        }
        response = self.client.post(reverse('login'), data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)


class TestLogoutView(APITestCase):
    def test_logout(self):
        user = create_user()
        self.client.login(email=USER_EMAIL, password=USER_PASSWORD)
        response = self.client.post(reverse('logout'))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_anonymous_user(self):
        response = self.client.post(reverse('logout'))
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
