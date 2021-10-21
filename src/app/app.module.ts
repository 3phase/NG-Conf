import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxComboModule, IgxGridModule, IgxActionStripModule, IgxInputGroupModule, IgxNavbarModule, IgxToggleModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ChartComponent } from './chart/chart.component';
import { GridComponent } from './grid/grid.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ChartComponent,
    GridComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxCardModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxIconModule,
    FormsModule,
    IgxComboModule,
    IgxGridModule,
    IgxActionStripModule,
    IgxInputGroupModule,
    IgxNavbarModule,
    IgxToggleModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
