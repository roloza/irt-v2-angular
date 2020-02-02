import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuElts: Array<Menu> = [];
  public icon = 'menu_open';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMenu().subscribe(
      data => {
        this.menuElts = data.data;

      }
    )
  }
  
  toggleMenu(event: Event) {
    document.getElementById('navbar-right').classList.toggle('hidden');
    this.icon = this.icon == 'menu_open' ? 'menu' : 'menu_open';
  }

}
