import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-infamy]',
  templateUrl: './infamy.component.html',
  styleUrls: ['./infamy.component.css']
})
export class InfamyComponent implements OnInit {
 public infamy=19;
 public rolled=false;
  constructor() { }


  roll(){
    if (!this.rolled){
      this.infamy=19;
 this.infamy=this.infamy + Math.floor(Math.random() * Math.floor(10)+1);
 this.rolled=true;
      }
  }
  ngOnInit() {
  }

}
