# Generated by Django 5.0.3 on 2024-10-08 09:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_address'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='address',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='billing_address',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='is_email_verified',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='is_phone_verified',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='payment_method',
        ),
    ]