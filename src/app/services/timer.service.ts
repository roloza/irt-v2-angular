import { Injectable, EventEmitter, Output } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  @Output() timer = new EventEmitter<any>();
  isActive: Boolean = true;
  time: number = 0;

  constructor() { 
    this.setInterval();
  }

  updateTime(time: number) {
      this.time = time;
  }

  activeTime(isActive: Boolean) {
    this.isActive = isActive;
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }

  setInterval () {
    interval(100).subscribe(x => {
      if (!this.isActive) {
        return;
      }
      this.timer.emit(this.time += 0.1);
    });
  }

  isActiveTimer() {
    return this.isActive;
  }
}
