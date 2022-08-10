import { Component, OnInit } from '@angular/core';
import { GetIdService } from '../auth/get-id.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(private getid: GetIdService) { }

  ngOnInit(): void {
    this.getid.getID().subscribe(
      {
        next: (decoded: any)=>{
         console.log(decoded)
        },
        error: (error: any)=>{
         console.log(error)
        }
      }
    )
  }



}
