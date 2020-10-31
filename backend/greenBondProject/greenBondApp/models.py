from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator, RegexValidator


class SDG(models.Model):
    name = models.CharField(max_length=1000)
    official_description = models.CharField(max_length=10000)
    original_description = models.CharField(max_length=10000)


class Project(models.Model):
    name = models.CharField(max_length=1000)
    project_number = models.CharField(max_length=100)
    description = models.CharField(max_length=10000)
    sdgs = models.ManyToManyField(SDG)
    prior_spends = models.IntegerField(default=0, validators=[MinValueValidator(0)])

    def __str__(self):
        return self.name


class Bond(models.Model):
    ENTERPRISE_TYPES = [
        ('Water', 'Water'),
        ('Power', 'Power'),
        ('Waste Water', 'Waste Water'),
    ]
    # TODO: VERIFY
    BOND_TYPES = [
        ('Revenue', 'Revenue'),
        ('Refunding', 'Refunding'),
    ]
    ALPHA_REGEX = RegexValidator(r'^[A-Z]$')

    name = models.CharField(max_length=200)
    enterprise = models.CharField(max_length=100, choices=ENTERPRISE_TYPES)
    issue_year = models.IntegerField(validators=[MinValueValidator(1000), MaxValueValidator(3000)])
    # TODO: verify
    series = models.CharField(max_length=1, validators=[ALPHA_REGEX])
    bond_type = models.CharField(max_length=100, choices=BOND_TYPES)
    CUSIP = models.CharField(max_length=100)
    avg_mature_rate = models.DecimalField(max_digits=5, decimal_places=4)
    projects = models.ManyToManyField(Project, through='UseOfProceeds')

    def ___str__(self):
        return self.name


class UseOfProceeds(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    bond = models.ForeignKey(Bond, on_delete=models.CASCADE)
    use_of_proceeds = models.DecimalField(max_digits=20, decimal_places=2, default=0, null=True)

    class Meta:
        db_table = 'greenBondApp_bond_projects'
