import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { LikeDirective } from './directive/like.directive';
import { GeolocationService } from './geolocation.service';
import { ClientListComponent } from './client/client-list.components';
import { ClientService } from './client/client.service';
import { DataService } from './data.service';
import {Routes, RouterModule} from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatGridListModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
  MatToolbarModule, MatCardModule, MatSlideToggleModule } from '@angular/material';

import 'hammerjs';

const routes = [
  { path: '', component: ClientListComponent },
  { path: 'client', component: ClientComponent },
  { path: 'client/:id', component: ClientComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule, MatGridListModule, MatButtonModule,
    MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
    MatToolbarModule, MatCardModule, MatSlideToggleModule
  ],
  providers: [
   ClientService,
   GeolocationService,
   DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
