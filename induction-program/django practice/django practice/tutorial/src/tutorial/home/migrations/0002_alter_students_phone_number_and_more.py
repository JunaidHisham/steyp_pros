# Generated by Django 4.0.6 on 2022-07-15 05:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='students',
            name='phone_number',
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name='students',
            name='student_class',
            field=models.CharField(choices=[('I', 'I'), ('II', 'II'), ('III', 'III'), ('IV', 'IV'), ('V', 'V'), ('VI', 'VI'), ('VII', 'VII'), ('VIII', 'VIII'), ('IX', 'IX'), ('X', 'X')], default='VI', max_length=5),
        ),
    ]
