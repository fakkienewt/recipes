import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Main } from './main/main';
import { RestaurantPage } from './restaurant.page/restaurant-page/restaurant-page';
import { MenuPage } from './menu-page/menu-page';
import { SearchResults } from './header/search-results/search-results';

const routes: Routes = [
  { path: '', component: Main },
  { path: 'recipe/:id', component: RestaurantPage },

  { path: 'recipe/:id/:menuId', component: MenuPage },

  { path: 'search/:query', component: SearchResults },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
