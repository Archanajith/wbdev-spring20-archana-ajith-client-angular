import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private service: CourseServiceClient ) { }

  courses = [
  /*  {_id: '123', title: 'Course A'},
    {_id: '345', title: 'Course B'},
    {_id: '456', title: 'Course C'}*/
  ]

  newCourseTitle = '';
  createNewCourse = (newCourseTitle) =>
    this.courses.push({_id: '787', title : newCourseTitle})

  deleteCourse = (deleteCourse) =>
    this.courses = this.courses.filter(course => course !== deleteCourse)

  ngOnInit(): void {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
