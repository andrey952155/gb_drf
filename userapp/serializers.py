from rest_framework.serializers import HyperlinkedModelSerializer
from .models import CustomUser


class CustomUserSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password']
