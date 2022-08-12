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
  error: string = '';

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
        this.userId = decoded.decoded.id;

        // get the users notes
        this.getUsersNote.getUserNotes(this.userId).subscribe({
          next: (res: any) => {
            this.notes = res;
          },
          error: (err) => {
            this.error = err.error;
            setTimeout(() => {
              this.error = '';
            }, 2000);
          },
        });
      },
      error: (error: any) => {
        this.error = error.error;
        setTimeout(() => {
          this.error = '';
        }, 2000);
      },
    });
  }
  post: object = {};

  postValue!: number;
  holdTitle!: string;
  send(num: any) {
    this.postValue = num;
    this.holdTitle = this.notes[num].title;
  }

  deleteOne() {
    this.delete(this.postValue);
  }
  delete(num: any) {
    const id = this.notes[num].id;
    const user_id = this.userId;

    this.deleting.delete(id, user_id).subscribe({
      next: (res: any) => {
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
        this.error = err.error;
        setTimeout(() => {
          this.error = '';
        }, 2000);
      },
    });
  }

  edit(num: any) {
    const id = this.notes[num].id;
    const user_id = this.userId;

    console.log(`id ${id}, user_id: ${user_id}`);
    localStorage.setItem('id', id);
  }
}
