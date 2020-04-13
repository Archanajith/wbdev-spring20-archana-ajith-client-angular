import {Injectable} from '@angular/core';
@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch('https://boiling-chamber-08402.herokuapp.com/api/quizzes')
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`https://boiling-chamber-08402.herokuapp.com/api/quizzes/${qid}`)
      .then(response => response.json())
}
