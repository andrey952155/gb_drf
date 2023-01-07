from django.contrib import admin
from userapp import models as mainapp_models


@admin.register(mainapp_models.CustomUser)
class NewsAdmin(admin.ModelAdmin):
    pass

