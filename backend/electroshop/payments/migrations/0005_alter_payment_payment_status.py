# Generated by Django 5.0.3 on 2024-10-10 19:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payments', '0004_alter_payment_amount'),
    ]

    operations = [
        migrations.AlterField(
            model_name='payment',
            name='payment_status',
            field=models.CharField(choices=[('chapa', 'Chapa'), ('paypal', 'Paypal')], max_length=20),
        ),
    ]
