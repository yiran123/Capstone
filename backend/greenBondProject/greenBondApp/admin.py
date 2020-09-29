from django.contrib import admin
from django.contrib.admin.views.main import ChangeList

from .models import Project, SDG
from .forms import ProjectChangeListForm

# class ProjectChangeList(ChangeList):
#     def __init__(self, request, model, list_display, list_display_links, list_filter, date_hierarchy, search_fields, list_select_related, list_per_page, list_max_show_all, list_editable, model_admin):   
#         super(ProjectChangeListForm, self).__init__(request, model, list_display, list_display_links, list_filter, date_hierarchy, search_fields, list_select_related, list_per_page, list_max_show_all, list_editable, model_admin)
#         # these need to be defined here, and not in MovieAdmin
#         self.list_display = ['action_checkbox', 'name', 'genre']
#         self.list_display_links = ['name']
#         self.list_editable = ['genre']

# class ProjectAdmin(admin.ModelAdmin):
#     def get_changelist(self, request, **kwargs):
#         return ProjectChangeList
    
#     def get_changelist_form(self, request, **kwargs):
#         return ProjectChangeListForm

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    filter_horizontal = ('sdg',)


#admin.site.register(Project, ProjectAdmin)
admin.site.register(SDG)