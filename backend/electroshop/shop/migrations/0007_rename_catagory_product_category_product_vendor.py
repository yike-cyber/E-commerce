# Generated by Django 5.0.3 on 2024-06-19 17:46

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0006_user_alter_address_user_alter_cartorder_user_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='Catagory',
            new_name='category',
        ),
        migrations.AddField(
            model_name='product',
            name='vendor',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='shop.vendor'),
        ),
    ]
