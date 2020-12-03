import { Environment } from '@angular/compiler-cli/src/ngtsc/typecheck/src/environment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent implements OnInit {
  @Input() text = '';
  enteredText = '';

  checkInput(value: string){
    this.enteredText = value;
  }

  compareLetter(letter: string, enteredLetter: string){
    if(!enteredLetter){
      return 'pending';
    }
    return enteredLetter === letter ? 'correct': 'wrong';   
  }

  constructor() { }

  ngOnInit(): void {
  }

}
