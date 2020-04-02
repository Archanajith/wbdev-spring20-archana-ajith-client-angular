import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {

  constructor(private service: CourseServiceClient) { }

  courseTitle = '';
  courses = [
    {_id: '123', title: 'Course A'},
    {_id: '123', title: 'Course B'},
    {_id: '123', title: 'Course C'}
  ];
  addCourse = (title) =>
    this.courses.push({_id: '234', title})
  deleteCourse = (deletedCourse) =>
    this.courses = this.courses.filter(course => course !== deletedCourse)
  ngOnInit(): void {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }
}
