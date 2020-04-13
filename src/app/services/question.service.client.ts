import {Injectable} from '@angular/core';
@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`https://boiling-chamber-08402.herokuapp.com/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
