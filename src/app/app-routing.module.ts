import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { CardComponent } from './card/card.component';
import { ChartComponent } from './chart/chart.component';
import { GridComponent } from './grid/grid.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'card', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'card', component: CardComponent, data: { text: 'Card' } },
  { path: 'chart', component: ChartComponent, data: { text: 'Chart' } },
  { path: 'grid', component: GridComponent, data: { text: 'Grid' } },
  { path: 'login', component: LoginComponent, data: { text: 'Login' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
