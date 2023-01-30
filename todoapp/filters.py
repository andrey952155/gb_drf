from django_filters import rest_framework as filters
from .models import Todo, Project


class TodoFilter(filters.FilterSet):
    project__name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Todo
        fields = ['project']


class ProjectFilter(filters.FilterSet):
    name_project = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name_project']
