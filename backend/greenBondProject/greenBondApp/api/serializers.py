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
        fields = ('id', 'name', 'project_number', 'description', 'sdgs', 'use_of_proceeds', 'prior_spends')


class BondSerializerForList(serializers.ModelSerializer):
    def get_project_counts(self, obj):
        return obj.projects.count()
    
    def get_use_of_proceeds(self, obj):
        return obj.projects.aggregate(Sum('use_of_proceeds'))['use_of_proceeds__sum']
    
    def get_sdgs(self, obj):
        # Get SDG frequencies.
        sdg_freq = {}
        for project in obj.projects.all():
            for sdg in project.sdgs.all():
                sdg_freq[sdg.id] = sdg_freq.get(sdg.id, 0) + 1

        sdg_freq_list = [(k, v) for k, v in sdg_freq.items()]
        sdg_freq_list.sort(key=lambda tup: tup[1], reverse=True)

        # Return top 3 sdg.
        return [sdg for sdg, _ in sdg_freq_list[:min(3, len(sdg_freq_list))]]

    project_counts = serializers.SerializerMethodField()
    use_of_proceeds = serializers.SerializerMethodField()
    sdgs = serializers.SerializerMethodField()

    class Meta:
        model = Bond
        fields = ('id', 'name', 'enterprise', 'issue_year', 'series',
         'bond_type', 'CUSIP', 'avg_mature_rate', 'project_counts', 'use_of_proceeds', 'sdgs')


class BondSerializerForDetail(serializers.ModelSerializer):
    class Meta:
        model = Bond
        fields = ('id', 'name', 'enterprise', 'issue_year', 'series', 'bond_type', 'CUSIP',
         'avg_mature_rate', 'projects')
        depth = 1
