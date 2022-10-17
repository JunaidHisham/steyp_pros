# Generated by Django 4.0.3 on 2022-03-25 11:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0007_contact'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='country',
            field=models.CharField(choices=[('us', 'UNITED STATES'), ('albania', 'Albania'), ('afghanistan', 'Afghanistan'), ('algeria', 'Algeria'), ('american_samoa', 'American Samoa')], max_length=128),
        ),
    ]