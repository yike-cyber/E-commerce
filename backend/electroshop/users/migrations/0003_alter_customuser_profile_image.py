# Generated by Django 5.0.3 on 2024-09-20 10:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_rename_acount_status_customuser_account_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='profile_image',
            field=models.ImageField(blank=True, default='default_profile/img.png', null=True, upload_to='profile_images/'),
        ),
    ]