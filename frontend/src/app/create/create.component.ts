import { Component, OnInit } from '@angular/core';
// importing the stuff needed for text editor
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.config)
  }

  name = 'Angular 6';
  htmlContent = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    translate: 'yes',
    width: '100%',
    height: '40rem',
    outline: true,
    minHeight: '20rem',
    placeholder: 'Enter text in this rich text editor....',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    customClasses: [
      {
        name: 'Quote',
        class: 'quoteClass',
      },
      {
        name: 'Title Heading',
        class: 'titleHead',
        tag: 'h1',
      },
    ],
  };

  
}
