import json

from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate,APIClient, APISimpleTestCase, APITestCase
# from mixer.backend.django import mixer
from userapp.models import CustomUser
from .views import ProjectViewSet, TodoViewSet
from .models import Project, Todo


class TestTodoViewSet(TestCase):

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/todo/')
        view = TodoViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_detail(self):
        project_id = Project.objects.create(name_project='test project', repo_link='link')
        user_id = CustomUser.objects.create(username='test', email='email@email.ru')
        todo = Todo.objects.create(todo='Test todo', user_id=user_id.id, project_id=project_id.id)
        client = APIClient()
        response = client.get(f'/api/todo/{todo.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestBookViewSet(APITestCase):

    def test_get_list(self):
        response = self.client.get('/api/todo/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_edit_admin(self):
        project_id = Project.objects.create(name_project='test project', repo_link='link')
        user_id = CustomUser.objects.create_superuser(username='admin', email='email@email.ru', password='admin123')
        todo = Todo.objects.create(todo='Test todo', user_id=user_id.id, project_id=project_id.id)
        self.client.login(username='admin', password='admin123')
        response = self.client.put(f'/api/todo/{todo.id}/', {'todo': 'New test todo', 'user': user_id.id, 'project': project_id.id})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        todo = Todo.objects.get(id=todo.id)
        self.assertEqual(todo.todo, 'Test todo')




