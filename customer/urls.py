from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('login',views.login,name='login'),
    path('signup',views.signup,name='signup'),
    path('forgotpassword',views.forgotpassword,name='forgotpassword'),
    path('changepassword',views.changepassword,name='changepassword'),
    path('profile',views.customerprofile,name='customerprofile'),
    path('store',views.store,name='store'),
    path('productview',views.productview,name='productview'),

]