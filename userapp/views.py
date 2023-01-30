from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework import viewsets, mixins

from userapp.models import CustomUser
from userapp.serializers import CustomUserSerializer


class CustomUserListAPIView(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                            mixins.UpdateModelMixin):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
