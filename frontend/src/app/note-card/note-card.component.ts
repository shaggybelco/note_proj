import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetIdService } from '../auth/get-id.service';
import { DeleteService } from '../services/delete.service';
import { GetUserNotesService } from '../services/get-user-notes.service';
import { ShareService } from '../services/share.service';


@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  userId: any;
  public notes: any;
  success: string = '';

  constructor(
    public getUsersNote: GetUserNotesService,
    private getid: GetIdService,
    public deleting: DeleteService,
    private router: Router,
    private route: ActivatedRoute,
    public share: ShareService
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
  post: object = {};

  postValue!: number;
  holdTitle!: string;
  send(num: any) {
    console.log(num);
    this.postValue = num;
    this.holdTitle = this.notes[num].title;
  }

  deleteOne() {
    console.log(this.postValue);

    console.log(this.holdTitle);
    this.delete(this.postValue);
  }
  delete(num: any) {
    const id = this.notes[num].id;
    const user_id = this.userId;

    this.deleting.delete(id, user_id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.deleting.success = res.success;
        this.success = res.success;
        setTimeout(() => {
          this.success = '';
          this.deleting.success = '';
        }, 2000);
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/note'], { relativeTo: this.route });
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

 edit(num: any){
    console.log(num);
    console.log(this.notes[num]);
    const id = this.notes[num].id;
    const user_id = this.userId;

    console.log(`id ${id}, user_id: ${user_id}`);
    localStorage.setItem('id', id)


  }

  note: any = ['1', 2, 3, 4, 4, 5];
  res =
    '<p><b>hey ubiauhf qioaf jawoufe  uasiludfh aufh aliuhfea uuoasf hof </b> iusadfgya <i>sidufh oas.dhf i;osadf</i></p>';
}
