import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Main } from './main/main';
import { RestaurantPage } from './restaurant.page/restaurant-page/restaurant-page';
import { MenuPage } from './menu-page/menu-page';

const routes: Routes = [
  { path: '', component: Main },
  { path: 'recipe/:id', component: RestaurantPage },

  { path: 'recipe/:id/:menuId', component: MenuPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
