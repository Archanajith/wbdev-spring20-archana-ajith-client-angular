import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponent} from './course-table/course-table.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
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
