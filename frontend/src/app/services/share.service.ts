import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  constructor() {}

  term = '';
  holdNotes = new Array();
  notes = new Array();
  have = false;

  search(value: string): void {
    this.notes = this.notes.filter((val: any) =>
      val.note.toLowerCase().includes(value)
    );
    console.log(this.notes);

    if(this.term == ''){
      this.notes = this.holdNotes;
    }
  }
  
  
}
