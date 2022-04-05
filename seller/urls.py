from django.urls import path
from . import views

urlpatterns = [
    path('',views.seller,name='seller'),
    path('products',views.products,name='products'),
    path('addproduct',views.addproduct,name='addproduct'),
]