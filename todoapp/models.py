from django.db import models
from userapp.models import CustomUser


class Project(models.Model):
    name_project = models.CharField(max_length=256)
    repo_link = models.CharField(max_length=256)
    user = models.ManyToManyField(CustomUser)
    is_delete = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name_project}"


class Todo(models.Model):
    todo = models.CharField(max_length=1000)
    create = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    is_delete = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.todo}"
