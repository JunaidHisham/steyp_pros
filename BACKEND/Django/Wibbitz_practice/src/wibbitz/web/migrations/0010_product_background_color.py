# Generated by Django 4.0.3 on 2022-04-04 05:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0009_product_hero_image_product_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='background_color',
            field=models.CharField(default='color', max_length=128),
            preserve_default=False,
        ),
    ]
