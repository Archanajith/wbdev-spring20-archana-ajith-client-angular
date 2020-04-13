import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {
  @Input()
  question = {_id: '', title: '', question: '', choices: [], correct: '', answer: '' }
  grading = false;



  grade(): void {
    this.grading = true;
  }

  select(answer): void {
    this.question.answer = answer;
  }

  buttonClick(): boolean {
    return this.grading;
  }
  isCorrect(choice): boolean {
    return choice === this.question.correct;
  }

  isFalse(choice): boolean {
    return choice !== this.question.correct && this.question.answer === choice;
  }
  getSuccessorDangerClass(choice): string {
    if (choice === this.question.correct) {
      return 'bg-success';
    } else if (choice !== this.question.correct) {
      if (choice === this.question.answer) {
        return 'bg-danger';
      }
    }
  }

  ngOnInit(): void {
  }


}
