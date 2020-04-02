import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {
    path: '', component : HomeComponent
  },
  {
    path: 'courses' , component : CourseListComponent
  },
  {
    path: 'viewer/:courseId' , component : CourseViewerComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
