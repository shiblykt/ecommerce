from django.urls import path
from . import views

urlpatterns = [
    path('',views.reseller,name='reseller'),
    path('home',views.home,name='home'),
    path('products',views.products,name='products'),
    path('addproduct',views.addproduct,name='addproduct'),
]