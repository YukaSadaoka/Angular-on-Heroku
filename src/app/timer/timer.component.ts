import { Component, OnInit, Input } from '@angular/core';
import {  DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  init:number = 0;
  counter: number = 0;
  
  constructor() { }

  ngOnInit(): void {
    this.startCountup()
  }

  startCountup(){
    console.log('counting started! ');
    this.counter = this.init;
    this.doCountdown()
  }

  doCountdown(){
    setTimeout(()=>{
      this.counter = this.counter + 0.01;
      this.processCountup();
    },100);
  }

  processCountup(){
    console.log('Count is' + this.counter);
    if(this.counter > 14.99){
      console.log("Count is done");
    }else{
      this.doCountdown();
    }
  }

}
