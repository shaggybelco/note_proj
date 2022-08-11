import { Component, OnInit } from '@angular/core';
import { GetIdService } from '../auth/get-id.service';
import { NoteCardComponent } from '../note-card/note-card.component';
import { DeleteService } from '../services/delete.service';
import { GetUserNotesService } from '../services/get-user-notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  constructor(private getid: GetIdService, public deleting: DeleteService, public notes: GetUserNotesService) {}
  userid!: number;
  note: any;
  name!: string;

  ngOnInit(): void {
    this.getid.getID().subscribe({
      next: (decoded: any) => {
        console.log(decoded.decoded);
        this.name = decoded.decoded.name;
        this.userid = decoded.decoded.id;

        this.notes.getUserNotes(this.userid).subscribe(
          {
            next: (res: any)=>{
              this.note = res;
            },error(err){
              console.log(err)
            }
          }
        )
      },
      error: (error: any) => {
        console.log(error);
      },
    });

    
  }

}
