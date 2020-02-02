import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandComponent } from 'src/app/components/pages/brand/brand.component';
import { HomeComponent } from 'src/app/components/pages/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'marque/:slug', component: BrandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
