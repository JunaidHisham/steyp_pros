# Generated by Django 4.0.3 on 2022-03-25 06:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0005_alter_blog_content_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='bg_color',
        ),
        migrations.RemoveField(
            model_name='product',
            name='button_bg',
        ),
    ]
