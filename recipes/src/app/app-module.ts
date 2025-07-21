import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';
import { Service } from './main/service';
import { RestaurantPage } from './restaurant.page/restaurant-page/restaurant-page';
import { MenuPage } from './menu-page/menu-page';
import { SearchResults } from './header/search-results/search-results';

@NgModule({
  declarations: [
    App,
    Header,
    Main,
    Footer,
    RestaurantPage,
    MenuPage,
    SearchResults
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    Service,
  ],
  bootstrap: [App]
})
export class AppModule { }
