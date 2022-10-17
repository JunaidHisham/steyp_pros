# Generated by Django 4.0.3 on 2022-03-25 05:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0004_alter_blog_content_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='content_type',
            field=models.CharField(choices=[('Blog Post', 'Blog Post'), ('webinar', 'Webinar'), ('report', 'Report')], max_length=128),
        ),
    ]
