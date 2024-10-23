# Generated by Django 5.0.3 on 2024-10-18 14:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0008_order_payment_gateway_order_payment_method'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='payment_gateway',
        ),
        migrations.RemoveField(
            model_name='order',
            name='payment_method',
        ),
        migrations.AlterField(
            model_name='order',
            name='status',
            field=models.CharField(choices=[('pending', 'Pending'), ('payment_processing', 'Payment Processing'), ('payment_failed', 'Payment Failed'), ('processing', 'Processing'), ('shipped', 'Shipped'), ('delivered', 'Delivered'), ('completed', 'Completed'), ('canceled', 'Canceled'), ('returned', 'Returned'), ('refunded', 'Refunded')], default='pending', max_length=50),
        ),
    ]