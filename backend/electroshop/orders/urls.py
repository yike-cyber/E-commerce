from django.urls import path

from .views import OrderListView, OrderDetailView,OrderUpdateView,OrderCancelView,CheckoutView
urlpatterns = [
    path('',OrderListView.as_view(),name='orders'),
    path('checkout/',CheckoutView.as_view(),name='checkout'),
    path('<int:order_id>/', OrderDetailView.as_view(), name='order-detail'),
    path('update/<int:order_id>/', OrderUpdateView.as_view(), name='order-update'),
    path('cancel/<int:order_id>/', OrderCancelView.as_view(), name='order-cancel'),
]