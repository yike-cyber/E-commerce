# Generated by Django 5.0.3 on 2024-10-18 15:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payments', '0008_payment_amount_payment_payment_gateway_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='payment',
            name='currency',
            field=models.CharField(choices=[('birr', 'Birr'), ('usd', 'USD')], default='birr', max_length=15),
        ),
    ]
