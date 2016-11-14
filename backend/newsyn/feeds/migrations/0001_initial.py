# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-11-14 14:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Feed',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.URLField()),
                ('title', models.CharField(max_length=100, null=True)),
                ('website', models.URLField(null=True)),
                ('last_requested', models.DateTimeField(null=True)),
            ],
        ),
    ]
