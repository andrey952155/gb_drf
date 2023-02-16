from rest_framework import serializers

from .models import Project, Todo


class ProjectSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Project
        fields = '__all__'


class TodoSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Todo
        fields = '__all__'
