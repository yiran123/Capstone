from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
import json

from greenBondApp.models import Project, Bond, Contractor, SDG
from .serializers import ProjectSerializerForDetail, ProjectSerializerForList, BondSerializerForList, \
     BondSerializerForDetail, ProjectSerializerForCreation, BondSerializerForCreation, \
     FinancialInfoSerializerForCreation, ContractorSerializerForCreation


class ProjectListView(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializerForList


class ProjectDetailView(RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializerForDetail


class BondListView(ListAPIView):
    queryset = Bond.objects.all()
    serializer_class = BondSerializerForList


class BondDetailView(RetrieveAPIView):
    queryset = Bond.objects.all()
    serializer_class = BondSerializerForDetail


def create_contractors(contractors, errors):
    for contractor in contractors:
        contractor_serializer = ContractorSerializerForCreation(data=contractor)
        if contractor_serializer.is_valid():
            contractor_serializer.save()
        else:
            errors.append(json.dumps(contractor_serializer.errors))
            return


def create_projects(projects, errors):
    for project in projects:
        contractor_name = project['Contractor']

        sdg1 = project['sdg1']
        sdg2 = project['sdg2']

        contractor_query = Contractor.objects.filter(name=contractor_name)
        sdg_query = SDG.objects.filter(name__in=[sdg1, sdg2])
        
        if not contractor_query:
            errors.append('no such contractor named \'' + contractor_name)
            return

        if not sdg_query:
            errors.append('no such sdg tag named \'' + sdg1 + ' or \'' + sdg2)
            return

        contractor = contractor_query[0]
        project_serializer = ProjectSerializerForCreation(data=project)
        if project_serializer.is_valid():
            # save project.
            project_serializer.save(contractor=contractor, sdgs=sdg_query)
        else:
            errors.append(json.dumps(project_serializer.errors))
            return


def create_bonds(bonds, errors):
    for bond in bonds:
        bond_serializer = BondSerializerForCreation(data=bond)
        if bond_serializer.is_valid():
            bond_serializer.save()
        else:
            print(bond_serializer.errors)
            errors.append(json.dumps(bond_serializer.errors))
            return


def create_financial_info(financial_info, errors):
    for financial_data in financial_info:
        # TODO: if bond and projects does not exist in json.
        bond_name = financial_data['bond']
        projects = financial_data['projects']

        bond_query = Bond.objects.filter(name=bond_name)
        if not bond_query:
            errors.append('no such bond named ' + bond_name)
            return

        bond = bond_query[0]
        for project_info in projects:
            # TODO: check if project property exists in json.
            project_name = project_info['project']

            project_query = Project.objects.filter(name=project_name)
            if not project_query:
                errors.append('no such project named ' + project_name)
                return

            project = project_query[0]
            financial_info_serializer = FinancialInfoSerializerForCreation(data=project_info)
            if financial_info_serializer.is_valid():
                financial_info_serializer.save(bond=bond, project=project)
            else:
                errors.append(json.dumps(financial_info_serializer.errors))
                return


@api_view(['POST'])
def create_data(request):
    if request.method == 'POST':
        print('json array: -------7')
        print(request.data)
        print('json array: -------7')

        contractors     = request.data['contractors']
        projects        = request.data['projects']
        bonds           = request.data['bonds']
        financial_info  = request.data['financialInfo']

        errors = []
        
        create_contractors(contractors, errors)
        create_projects(projects, errors)
        create_bonds(bonds, errors)
        create_financial_info(financial_info, errors)

    if errors:
        return Response({'errors': errors}, status=status.HTTP_400_BAD_REQUEST)
        #return JsonResponse({'errorMessages': errors}, status=400)

    #return JsonResponse({'errorMessages': 'no error'}, status=200)
    return Response(status=status.HTTP_200_OK)
