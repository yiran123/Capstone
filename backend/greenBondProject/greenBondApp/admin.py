from django.contrib import admin

from .models import Project, SDG, Bond

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    filter_horizontal = ('sdg',)

@admin.register(Bond)
class BondAdmin(admin.ModelAdmin):
    filter_horizontal = ('projects',)

admin.site.register(SDG)