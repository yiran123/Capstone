from rest_framework import serializers
from django.db.models import Sum
from decimal import Decimal

from greenBondApp.models import SDG, Project, Bond


class SDGSerializer(serializers.ModelSerializer):
    class Meta:
        model = SDG
        fields = ('id', 'name', 'official_description', 'original_description')


class ProjectSerializerForDetail(serializers.ModelSerializer):
    def get_associated_bonds(self, obj):
        """Get info of bonds associated to this project.
        """
        return [BondSerializerForList(bond).data for bond in obj.bond_set.all()]
        
    associated_bonds = serializers.SerializerMethodField()
    class Meta:
        model = Project
        fields = ('id', 'name', 'project_number', 'description', 'sdgs', 'associated_bonds')


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'name', 'project_number', 'description', 'sdgs', 'prior_spends')


class ProjectSerializerForCreation(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('name', 'project_number', 'description', 'prior_spends')
    
    def create(self, validated_data):
        return Project.objects.create(
            name=validated_data['name'],
            project_number=validated_data['project_number'],
            description=validated_data['description'],
            contractor=validated_data['contractor'],
            prior_spends=Decimal(0)
        )


class BondSerializerForList(serializers.ModelSerializer):
    def get_project_counts(self, obj):
        return obj.projects.count()
    
    def get_use_of_proceeds(self, obj):
        return obj.useofproceeds_set.aggregate(use_of_proceeds=Sum('use_of_proceeds'))['use_of_proceeds']
    
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
    def get_projects(self, obj):
        """Serialize project.
        """
        # Use of proceeds.
        # Dict: {id, serialization of the project}
        #       key:    project.id
        #       value:  dict(serialization of the project)
        uop = dict()

        # Get use of proceeds for the project and bond.
        for project in obj.projects.values('id', 'useofproceeds__use_of_proceeds'):
            uop[project['id']] = {
                'id': project['id'],
                'use_of_proceeds': project['useofproceeds__use_of_proceeds']
            }

        # Get the rest of the projects' fields;
        # And update the dictionary.
        for project in obj.projects.all():
            uop[project.id].update(dict(ProjectSerializer(project).data))

        # Return a list of the serializations.
        return uop.values()

    def get_constractors(self, obj):
        """Get the contractors related to this bond, and the "Use of Proceeds" related to the contractor.
        """
        
        contractors = dict()
        for project in obj.projects.values('id', 'contractor__name', 'useofproceeds__use_of_proceeds'):
            contractor_name = project['contractor__name']
            contractors[contractor_name] = contractors.get(contractor_name, Decimal(0.0)) \
                + project['useofproceeds__use_of_proceeds']

        return {k: v for k, v in sorted(contractors.items(), key=lambda item: -item[1])}


    projects = serializers.SerializerMethodField()
    constractors = serializers.SerializerMethodField()

    class Meta:
        model = Bond
        fields = ('id', 'name', 'enterprise', 'issue_year', 'series', 'bond_type', 'CUSIP', 
        'avg_mature_rate', 'projects', 'constractors')
        #depth = 1
