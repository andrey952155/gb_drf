from rest_framework.viewsets import ModelViewSet

from userapp.models import CustomUser
from userapp.serializers import UserModelSerializer


class UserModelViewSet(ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserModelSerializer
