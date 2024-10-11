# Generated by Django 5.0.3 on 2024-10-10 17:54

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0006_alter_order_payment'),
        ('payments', '0002_payment_payment_gateway'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='payment',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='order_payment', to='payments.payment'),
        ),
    ]
