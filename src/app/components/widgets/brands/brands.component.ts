import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ApiService } from 'src/app/services/api.service';
import { TimerService } from 'src/app/services/timer.service';
import { Color } from 'src/app/customLibs/color';
import { Brand } from 'src/app/models/brand';
import { Count } from 'src/app/models/count';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  public brands: Array<Brand> = [];
  public counts: Array<Count> = [];

  public time: number = 0;

  constructor(
    private apiService: ApiService,
    private timerService: TimerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.timerService.timer.subscribe(time => {
      this.time = time;
      this.initCounts();
    });

    this.apiService.getBrands().subscribe(
      data => {
        data.data.forEach( brand => {
          let counts: Array<Count> = [];
          let cpt = 0;
          brand.counts.forEach( count => {
            // On ne garde que un compteur de type primaire
            if (!count.is_primary || cpt > 0) {
              return;
            }
            counts.push({
              'id': count.id,
              'title': count.title,
              'value': 0,
              'increment': count.value,
              'is_primary': count.is_primary,
              'position': count.position,
              'slug': count.slug,
              'status': count.status,
            });
            cpt++;
          });
          this.brands.push({
            'id': brand.id,
            'title': brand.title,
            'slug': brand.slug,
            'color': brand.color,
            'colorType': new Color(brand.color, 200).getName(),
            'content': brand.content,
            'url': brand.url,
            'image': brand.image,
            'position': brand.position,
            'status': brand.status,
            'type': brand.type,
            'counts': counts,
          })
        });

      }
    )
  }

  initCounts() {
    this.brands.forEach( (brand, index) => {
      brand.counts.forEach( count => {
        count.value = Math.round(count.increment * this.time);
      });
    });
  }

}
