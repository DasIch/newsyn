"""
    newsyn.feeds.tests
    ~~~~~~~~~~~~~~~~~~

    :copyright: 2016 by Daniel Neuhäuser
"""
from django.urls import reverse
from django.utils import timezone
from rest_framework import status
from rest_framework.test import APITestCase

from ..auth.models import User
from .models import Feed


USER_EMAIL = 'test@example.com'
USER_PASSWORD = 'password'


def create_user():
    return User.objects.create_user(
        email=USER_EMAIL,
        password=USER_PASSWORD
    )


def create_feed():
    return Feed.objects.create(
        url='http://example.com/feed.xml',
        title='Test Feed',
        website='http://example.com/',
        last_requested=timezone.now()
    )


class TestFeedViewSet(APITestCase):
    def setUp(self):
        self.user = create_user()
        self.client.login(email=USER_EMAIL, password=USER_PASSWORD)

    def tearDown(self):
        self.client.logout()

    def test_list_requires_login(self):
        self.client.logout()
        response = self.client.get(reverse('feed-list'))
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_list_excludes_unrequested(self):
        feed = Feed.objects.create(url='http://example.com/feed.xml')

        response = self.client.get(reverse('feed-list'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), [])

    def test_list(self):
        feed = create_feed()

        response = self.client.get(reverse('feed-list'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), [
            {
                'id': feed.id,
                'url': feed.url,
                'title': feed.title,
                'website': feed.website,
                'last_requested': feed.last_requested.isoformat()[:-6] + 'Z'
            }
        ])

    def test_detail_requires_login(self):
        self.client.logout()
        feed = create_feed()

        response = self.client.get(reverse('feed-detail', kwargs={'pk': feed.id}))
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_detail(self):
        feed = create_feed()

        response = self.client.get(reverse('feed-detail', kwargs={'pk': feed.id}))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), {
            'id': feed.id,
            'url': feed.url,
            'title': feed.title,
            'website': feed.website,
            'last_requested': feed.last_requested.isoformat()[:-6] + 'Z'
        })
