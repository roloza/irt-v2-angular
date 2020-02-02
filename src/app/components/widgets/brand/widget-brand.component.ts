import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ApiService } from 'src/app/services/api.service';
import { TimerService } from 'src/app/services/timer.service';
import { Color } from 'src/app/customLibs/color';
import { Brand } from 'src/app/models/brand';
import { Count } from 'src/app/models/count';



@Component({
  selector: 'app-widget-brand',
  templateUrl: './widget-brand.component.html',
  styleUrls: ['./widget-brand.component.scss']
})
export class WidgetBrandComponent implements OnInit {

  public brand: Brand;
  public counts: Array<Count> = [];

  public time: number = 0;

  constructor(
    private apiService: ApiService,
    private timerService: TimerService,
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit() {
    this.timerService.timer.subscribe(time => {
      this.time = time;
      this.timerService.activeTime(true);
      this.initCounts();
      
    });

    this.route.params.subscribe(
      params => {
        this.apiService.getBrand(params.slug).subscribe(
          data => {
            this.brand = {
              'id': data.data.id,
              'title': data.data.title,
              'slug': data.data.slug,
              'color': data.data.color,
              'colorType': new Color(data.data.color, 200).getName(),
              'content': data.data.content,
              'url': data.data.url,
              'image': data.data.image,
              'position': data.data.position,
              'status': data.data.status,
              'type': data.data.type
            };
            this.counts = [];
            data.data.counts.forEach( (count: Count) => {
              this.counts.push({
                'id': count.id,
                'title': count.title,
                'slug': count.slug,
                'value': 0,
                'is_primary': count.is_primary,
                'position': count.position,
                'status': count.status,
                'increment': count.value,
              })
            });
          }
        );
      }
    );
  }

  ngAfterViewChecked() {
    this.setBrandIconColor();
  }

  setBrandIconColor() {
    if (this.brand) {
      let svgElement = document.getElementById('img-brand-' + this.brand.id).querySelector('svg');
      svgElement.style.fill = this.brand.color;
    }
  }

  initCounts() {
    this.counts.forEach( (count, index) => {
      this.counts[index].value = Math.round(count.increment * this.time);
    });
  }
}
