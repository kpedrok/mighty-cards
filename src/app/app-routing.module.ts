import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsHorizontalComponent } from './pages/cards-horizontal/cards-horizontal.component';
import { CardsVerticalComponent } from './pages/cards-vertical/cards-vertical.component';

const routes: Routes = [
  {
    path: '',
    component: CardsVerticalComponent,
  },
  {
    path: 'horizontal',
    component: CardsHorizontalComponent,
  },
  {
    path: 'vertical',
    component: CardsVerticalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
