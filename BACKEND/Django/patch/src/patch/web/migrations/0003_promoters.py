# Generated by Django 4.0.3 on 2022-03-21 09:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0002_alter_testimonial_designation'),
    ]

    operations = [
        migrations.CreateModel(
            name='Promoters',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to='promoters/')),
            ],
        ),
    ]
