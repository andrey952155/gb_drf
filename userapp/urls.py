from django.urls import path
from .views import CustomUserListAPIViewV1

app_name = 'userapp'
urlpatterns = [
    path('', CustomUserListAPIViewV1.as_view({'get': 'list'})),
    ]
