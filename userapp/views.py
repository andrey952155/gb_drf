from rest_framework.viewsets import ModelViewSet
from .models import CustomUser
from .serialisers import UserModelSerializer


class UserModelViewSet(ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserModelSerializer
