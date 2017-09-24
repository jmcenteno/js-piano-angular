import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NotesService } from '../../services/notes/notes.service';
import { Note } from '../../services/notes/note';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Input() notes: Note[];
  @Output() onClick: EventEmitter<any>;

  constructor() {

    this.notes = [];
    this.onClick = new EventEmitter<any>();

  }

  ngOnInit() {

    window.addEventListener('keydown', this.play.bind(this));
    window.addEventListener('keyup', this.stop.bind(this));

  }

  play(e: Event) {

    e.preventDefault();

    const keyCode: number = e['keyCode'];
    const note: Note = this.getNoteByKeyCode(e['keyCode']);

    if (!note) {
      return;
    }

    note.sound.play();

    document.querySelector(`li[data-key="${keyCode}"]`).classList.add('playing');

  }

  stop(e: Event) {

    const keyCode: number = e['keyCode'];
    const note: Note = this.getNoteByKeyCode(e['keyCode']);

    if (!note) {
      return;
    }

    note.sound.stop();

    document.querySelector(`li[data-key="${keyCode}"]`).classList.remove('playing');

  }

  private getNoteByKeyCode(keyCode: number): Note {

    if (keyCode === 186) {
      keyCode = 59;
    }

    return this.notes.find((item: Note) => item.keyCode === keyCode);

  }

}
