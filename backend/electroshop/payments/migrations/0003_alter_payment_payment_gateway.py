# Generated by Django 5.0.3 on 2024-11-05 07:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payments', '0002_alter_payment_order'),
    ]

    operations = [
        migrations.AlterField(
            model_name='payment',
            name='payment_gateway',
            field=models.CharField(default='CBE', max_length=100),
        ),
    ]
