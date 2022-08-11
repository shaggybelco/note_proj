import { Component, OnInit } from '@angular/core';
import { NoteCardComponent } from '../note-card/note-card.component';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  show: boolean = false;

  constructor(public share: ShareService) { }

  ngOnInit(): void {
  }

  change(){
    if(this.show === false){
      this.show = true;
    }else{
      this.show = false;
    }
  }

}
