from rest_framework import serializers

from userapp.serializers import UserModelSerializer
from .models import Project, Todo


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class TodoSerializer(serializers.HyperlinkedModelSerializer):
    user = UserModelSerializer()

    class Meta:
        model = Todo
        fields = '__all__'
