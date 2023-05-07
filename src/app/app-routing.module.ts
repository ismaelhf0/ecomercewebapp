import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { AtractionPageComponent } from './pages/atraction-page/atraction-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'app-atraction-page',
    component: AtractionPageComponent
  },

  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '', redirectTo: 'app-atraction-page', pathMatch: 'full' //if you enter to the empty string its gonna rout you to home directly
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
