import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  public stopLabel: string = "Arrêter";
  public currentTime: number = 0;
  
  constructor(
    private timerService: TimerService,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (!this.timerService.isActiveTimer()) {
          this.toggleTimer();
        }
      }
    })
  }

  pause() {
    this.stopLabel = "Reprendre"
    this.timerService.activeTime(false);
  }

  start() {
    this.stopLabel = "Arrêter"
    this.timerService.activeTime(true);
  }

  toggleTimer() {
    this.stopLabel = this.stopLabel == "Arrêter" ? "Reprendre" : "Arrêter";
    this.timerService.toggleActive();
  }

  timeTo(time: number) {
    this.timerService.updateTime(time);
    this.start();
  }

}