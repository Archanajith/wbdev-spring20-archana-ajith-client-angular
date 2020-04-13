import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponent} from './course-table/course-table.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {HomeComponent} from './home/home.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizComponent} from './quiz/quiz.component';

const routes: Routes = [
  {path: 'courses/:courseId/quizzes', component: QuizzesComponent},
  { path: 'courses/:courseId/quizzes/:quizId',
    component: QuizComponent },
  {path: 'table/courses' , component: CourseTableComponent},
  {path: '', component: HomeComponent},
  {path: 'layout/courses/:courseId', component: CourseViewerComponent},
  {path: 'layout/courses/:courseId/modules/:moduleId', component: CourseViewerComponent},
  {path: 'layout/courses/:courseId/modules/:moduleId/lessons/:lessonId', component: CourseViewerComponent},
  {path: 'layout/courses/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId', component: CourseViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
