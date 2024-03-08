import { Injectable } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faEdit,
  faTrashAlt,
  faList,
  faListCheck,
  faSquarePlus,
  faPlus,

} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})

export class FontAwesomeService {

  constructor(library:FaIconLibrary) {
    // add icons in library for use it
    library.addIcons(
      faEdit,
      faTrashAlt,
      faList,
      faListCheck,
      faPlus,
      faSquarePlus,


    );
  }
}