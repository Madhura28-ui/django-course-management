from django.shortcuts import render, redirect, get_object_or_404

from .models import Course, Question, Choice, Submission


def submit(request, course_id):
    course = get_object_or_404(Course, id=course_id)

    if request.method == 'POST':
        submission = Submission.objects.create(
            enrollment_id=request.POST.get('enrollment_id'),
            total_score=0
        )

        total_score = 0

        for question in Question.objects.filter(course=course):
            selected_ids = request.POST.getlist(
                str(question.id)
            )

            total_score += question.is_get_score(selected_ids)

            for choice_id in selected_ids:
                choice = get_object_or_404(
                    Choice,
                    id=choice_id,
                    question=question
                )
                submission.choices.add(choice)

        submission.total_score = total_score
        submission.save()

        return redirect(
            'onlinecourse:show_exam_result',
            course_id=course.id,
            submission_id=submission.id
        )

    return redirect('onlinecourse:course_details', course_id=course.id)


def show_exam_result(request, course_id, submission_id):
    course = get_object_or_404(Course, id=course_id)

    submission = get_object_or_404(
        Submission,
        id=submission_id,
        enrollment__course=course
    )

    return render(
        request,
        'onlinecourse/exam_result_bootstrap.html',
        {
            'course': course,
            'submission': submission,
            'total_score': submission.total_score
        }
    )
