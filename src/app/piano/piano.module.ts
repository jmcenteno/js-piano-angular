import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NotesService } from './services/notes/notes.service';

import { PianoComponent } from './components/piano/piano.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { WaveformSelectComponent } from './components/waveform-select/waveform-select.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [PianoComponent, KeyboardComponent, WaveformSelectComponent],
  exports: [PianoComponent],
  providers: [NotesService]
})
export class PianoModule { }
