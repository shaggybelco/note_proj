import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// importing the stuff needed for text editor
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { GetIdService } from '../auth/get-id.service';
import { EditService } from '../services/edit.service';
import { GetOneNoteService } from '../services/get-one-note.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  title: string = '';
  userId!: number;
  success: string = '';
  note: any;

  constructor(private getid: GetIdService, private edit: EditService, private getOneUserNote: GetOneNoteService) {}

  ngOnInit(): void {
    this.getid.getID().subscribe({
      next: (decoded: any) => {
        console.log(decoded.decoded.id);
        this.userId = decoded.decoded.id;
      },
      error: (error: any) => {
        console.log(error.error);
      },
    });

    this.getOneUserNote.getOneNote(localStorage.getItem('id')).subscribe(
      {
        next: (res: any)=>{
          console.log(res);
          this.note = res[0];
          this.htmlContent = this.note.note;
          this.title = this.note.title;
        },error: (err)=>{
          console.log(err)
        }
      }
    )
  }
  change(){
    console.log(this.title);
    console.log(this.htmlContent)
  }

  save() {
    const id = localStorage.getItem('id');
    let editNote = {
      id: id,
      user_id: this.userId,
      title: this.title,
      note: this.htmlContent,
      private: false,
    };

    console.log(editNote);
    this.edit.edit(editNote).subscribe({
      next: (res: any) => {
        console.log(res.success);
        this.success = res.success;
        setTimeout(() => {
          this.success = '';
        }, 2000);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
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
    placeholder: 'Start writing your note....',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons:[
      [
        'insertImage',
        'insertVideo'
      ]
    ],
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
