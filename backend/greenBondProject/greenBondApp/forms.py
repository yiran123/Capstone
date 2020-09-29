from django import forms

from .models import SDG, Project


class ProjectChangeListForm(forms.ModelForm):
    sdg = forms.ModelMultipleChoiceField(queryset=SDG.objects.all(), required=True)
    class Meta:
        model = Project
        fields = '__all__'
        