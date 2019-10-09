import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';
import { test } from '../test';
import { TestsService } from '../tests.service';

@Component({
  selector: '[app-stat]',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  public BHstat = [];
  public BSMstat = [];
  public Races = [];
  public Harch = [];
  public SMarch = [];
  public infamy=19;
  public rolled=false;
  public statsDC=[];
  public statsSM=[];


  constructor(private _statsService : StatsService, private _test : TestsService) { }


  roll(){
    if (!this.rolled){
      this.infamy=19;
 this.infamy=this.infamy + Math.floor(Math.random() * Math.floor(5)+1);
 this.rolled=true;
      } else {
        //...
      }
  }
 
  ngOnInit() {
    

    this.BHstat = this._statsService.getBaseStatHuman();
    this.BSMstat = this._statsService.getBaseStatSM();
    this.Races = this._statsService.getRace();
    this.Harch=this._statsService.getArchetypeHuman();
    this.SMarch=this._statsService.getArchetypeSM();

// test de httprequest

this._test.getDCstat()
    .subscribe((statsDC: test[]) =>{
      this.statsDC = statsDC;
      console.log(this.statsDC)
    })
    this._test.getSMstat()
    .subscribe((statsSM: test[]) =>{
      this.statsSM = statsSM;
      console.log(this.statsSM)
    })

 }

}
