# Generated by Django 3.1.4 on 2021-02-08 15:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('settings_content', '0002_auto_20210205_2238'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='siteconfigurations',
            name='phone',
        ),
    ]
