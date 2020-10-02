from rest_framework import serializers
from django.db.models import Sum

from greenBondApp.models import SDG, Project, Bond

class SDGSerializer(serializers.ModelSerializer):
    class Meta:
        model = SDG
        fields = ('id', 'name', 'official_description', 'original_description')


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'name', 'project_number', 'description', 'sdg', 'use_of_proceeds', 'prior_spends')


class BondSerializerForList(serializers.ModelSerializer):
    def get_project_counts(self, obj):
        return obj.projects.count()
    
    def get_use_of_proceeds(self, obj):
        return obj.projects.aggregate(Sum('use_of_proceeds'))['use_of_proceeds__sum']
    
    project_counts = serializers.SerializerMethodField()
    use_of_proceeds = serializers.SerializerMethodField()
    
    class Meta:
        model = Bond
        fields = ('id', 'name', 'enterprise', 'issue_year', 'series',
         'bond_type', 'CUSIP', 'avg_mature_rate', 'project_counts', 'use_of_proceeds',)


class BondSerializerForDetail(serializers.ModelSerializer):
    class Meta:
        model = Bond
        fields = ('id', 'name', 'enterprise', 'issue_year', 'series', 'bond_type', 'CUSIP',
         'avg_mature_rate', 'projects')
        depth = 1
