from rest_framework.pagination import LimitOffsetPagination
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import ModelViewSet

from todoapp.filters import TodoFilter, ProjectFilter
from todoapp.models import Project, Todo
from todoapp.serializers import ProjectSerializer, TodoSerializer


class ProjectPagination(LimitOffsetPagination):
    default_limit = 2


class ProjectViewSet(ModelViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    queryset = Project.objects.filter(is_delete=False)
    serializer_class = ProjectSerializer
    filterset_class = ProjectFilter
    pagination_class = ProjectPagination


class TodoPagination(LimitOffsetPagination):
    default_limit = 1


class TodoViewSet(ModelViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    queryset = Todo.objects.filter(is_delete=False)
    serializer_class = TodoSerializer
    filterset_class = TodoFilter
    pagination_class = TodoPagination


