# Generated by Django 4.0.3 on 2022-04-04 05:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0011_product_button_bg_alter_product_background_color'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='background_color',
            field=models.CharField(default='#', max_length=128),
        ),
        migrations.AlterField(
            model_name='product',
            name='button_bg',
            field=models.CharField(default='#', max_length=128),
        ),
    ]