import { Component, OnInit } from '@angular/core';
import { GetIdService } from '../auth/get-id.service';
import { GetUserNotesService } from '../services/get-user-notes.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  userId!: number;
  notes: any;

  constructor(
    private getUsersNote: GetUserNotesService,
    private getid: GetIdService
  ) {}

  ngOnInit(): void {
    this.getid.getID().subscribe({
      next: (decoded: any) => {
        console.log(decoded.decoded.id);
        this.userId = decoded.decoded.id;

        // get the users notes
        this.getUsersNote.getUserNotes(this.userId).subscribe({
          next: (res: any) => {
            this.notes = res;
            console.log(this.notes);
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
      error: (error: any) => {
        console.log(error.error);
      },
    });
  }

  delete(num: any){
    console.log(num);
    console.log(this.notes[num])
  }

  edit(num: any){
    console.log(num);
    console.log(this.notes[num])
  }

  note: any = ['1', 2, 3, 4, 4, 5];
  res =
    '<p><b>hey ubiauhf qioaf jawoufe  uasiludfh aufh aliuhfea uuoasf hof </b> iusadfgya <i>sidufh oas.dhf i;osadf</i></p>';
}
