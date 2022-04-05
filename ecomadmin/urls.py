from django.urls import path
from . import views

urlpatterns = [
    path('addseller',views.addseller,name='addseller'),
]