from django.db import models

# Keep your existing Course, Lesson, Learner, and Enrollment models.


class Question(models.Model):
    course = models.ForeignKey(
        'Course',
        on_delete=models.CASCADE
    )
    content = models.CharField(max_length=200)
    grade = models.IntegerField(default=0)

    def is_get_score(self, selected_ids):
        correct_choices = self.choice_set.filter(is_correct=True)
        selected_choices = self.choice_set.filter(
            id__in=selected_ids
        )

        if (
            correct_choices.count() == selected_choices.count()
            and not selected_choices.exclude(
                is_correct=True
            ).exists()
            and correct_choices.filter(
                id__in=selected_ids
            ).count() == correct_choices.count()
        ):
            return self.grade

        return 0

    def __str__(self):
        return self.content


class Choice(models.Model):
    question = models.ForeignKey(
        Question,
        on_delete=models.CASCADE
    )
    content = models.CharField(max_length=200)
    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return self.content


class Submission(models.Model):
    enrollment = models.ForeignKey(
        'Enrollment',
        on_delete=models.CASCADE
    )
    choices = models.ManyToManyField(Choice)
    total_score = models.IntegerField(default=0)

    def __str__(self):
        return str(self.id)
