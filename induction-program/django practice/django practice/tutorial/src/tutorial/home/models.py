from django.db import models


CLASS_CHOISES = (
	('I', "I"),
	('II', "II"),
	('III', "III"),
	('IV', "IV"),
	('V', "V"),
	('VI', "VI"),
	('VII', "VII"),
	('VIII', "VIII"),
	('IX', "IX"),
	('X', "X"),
    ("+1","+1"),
    ("+2","+2"),
)

class Students(models.Model):
    name = models.CharField(max_length=128)
    student_class = models.CharField(choices=CLASS_CHOISES, max_length=5, default="VI")
    phone_number = models.CharField(max_length=10)
    division = models.CharField(max_length=1, default="A")
    father_name = models.CharField(max_length=128)
    mother_name = models.CharField(max_length=128)

    class Meta:
        db_table = 'students_list'	
        verbose_name = ('Student')
        verbose_name_plural = ('Students')
        ordering = ('name',)

    def __str__(self):
        return self.name
