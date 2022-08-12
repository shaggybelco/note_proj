import { Injectable } from '@angular/core';
import { GetUserNotesService } from './get-user-notes.service';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  constructor() {}

  term = '';
}
