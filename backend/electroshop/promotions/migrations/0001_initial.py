# Generated by Django 5.0.3 on 2024-10-25 11:03

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('products', '0013_remove_product_status_category_num_of_products_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Promotion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True)),
                ('discount_percentage', models.DecimalField(decimal_places=2, max_digits=5)),
                ('start_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('end_date', models.DateTimeField()),
                ('active', models.BooleanField(default=True)),
                ('products', models.ManyToManyField(blank=True, related_name='promotions', to='products.product')),
            ],
            options={
                'verbose_name_plural': 'Promotions',
            },
        ),
    ]