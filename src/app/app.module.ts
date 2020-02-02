import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';

/* Pipes */
import { SafePipe } from './pipes/safe.pipe';
import { HighNumberPipe } from './pipes/high-number.pipe';

/* Material */
import {MatIconModule} from '@angular/material/icon';
import { CountUpModule } from 'ngx-countup';
import {MatButtonModule} from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrandComponent } from './components/pages/brand/brand.component';
import { WidgetBrandComponent } from 'src/app/components/widgets/brand/widget-brand.component';
import { HorlogeComponent } from './components/widgets/horloge/horloge.component';
import { PlayerComponent } from './components/widgets/player/player.component';
import { BrandsComponent } from './components/widgets/brands/brands.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SafePipe,
    HighNumberPipe,
    BrandComponent,
    WidgetBrandComponent,
    HorlogeComponent,
    PlayerComponent,
    BrandsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CountUpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
