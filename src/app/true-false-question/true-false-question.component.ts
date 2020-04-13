import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {
  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''}
  grading = false


  grade(): void {
    this.grading = true;
  }

  select(answer): void {
    this.question.answer = answer;
  }

  buttonClick(): boolean {
    return this.grading;
  }

  isCorrect(option): boolean {
    return option === this.question.correct;
  }

  isFalse(option): boolean {
    return option !== this.question.correct;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
