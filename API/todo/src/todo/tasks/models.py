from django.db import models


class Task(models.Model):
    title = models.CharField(max_length=255)
    is_completed = models.BooleanField(default=False) 
    is_deleted = models.BooleanField(default=False) 
    detetime = models.DateTimeField(auto_now_add= True)

    class Meta:
        db_table = "tasks_tasks"
        verbose_name = "task"
        verbose_name_plural = "tasks"

    def __str__(self):
        return self.title