import { Component } from '@angular/core';

import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {
  inputTypes = ['text', 'radio', 'checkbox'];
  type = 'text';
  title: string;
  options = '';

  constructor(private questionService: QuestionService) { }

  onSubmit() {
    if (this.type === 'text') {
      this.options = '';
    }
    this.questionService.createQuestion(this.title, this.type, this.options);
  }
}
