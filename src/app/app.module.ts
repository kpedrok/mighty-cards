import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsHorizontalComponent } from './pages/cards-horizontal/cards-horizontal.component';
import { CardsVerticalComponent } from './pages/cards-vertical/cards-vertical.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsVerticalComponent,
    CardsHorizontalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
