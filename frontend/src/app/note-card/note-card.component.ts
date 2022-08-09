import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  note: any = ['1',2,3,4,4,5,44]
}
