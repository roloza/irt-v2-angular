import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-horloge',
  templateUrl: './horloge.component.html',
  styleUrls: ['./horloge.component.scss']
})
export class HorlogeComponent implements OnInit {

  public ticks: number = 0;

  s0: string = '0';
  s1: string = '0';
  m0: string = '0';
  m1: string = '0';
  h0: string = '0';
  h1: string = '0';
  d0: string = '0';
  d1: string = '0';

  constructor(
    private timerService: TimerService
  ) { }

  ngOnInit() {
    this.timerService.timer.subscribe(time => {
      this.ticks = time;
      this.horloge();
    });
  }

  horloge() {
    let secondsDisplay = this.getSeconds();
    let minutesDisplay = this.getMinutes();
    let hoursDisplay = this.getHours();
    let daysDisplay = this.getDays();
    
    this.s0 = secondsDisplay.toString().charAt(0);
    this.s1 = secondsDisplay.toString().charAt(1);
    this.m0 = minutesDisplay.toString().charAt(0);
    this.m1 = minutesDisplay.toString().charAt(1);
    this.h0 = hoursDisplay.toString().charAt(0);
    this.h1 = hoursDisplay.toString().charAt(1);
    this.d0 = daysDisplay.toString().charAt(0);
    this.d1 = daysDisplay.toString().charAt(1);
  }

  private getSeconds() {
    return this.pad(this.ticks % 60);
  }

  private getMinutes() {
      return this.pad((Math.floor(this.ticks / 60)) % 60);
  }

  private getHours() {
      return this.pad(Math.floor((this.ticks / 60) / 60) % 24);
  }

  private getDays() {
    return this.pad(Math.floor((this.ticks / 60) / 60 / 24 )  % 99);
}

  private pad(digit: any) { 
      return digit < 10 ? '0' + digit : digit;
  }

}
