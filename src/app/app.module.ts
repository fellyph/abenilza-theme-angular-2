import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClientItemComponent } from './client/client-item.component';
import { LikeDirective } from './directive/like.directive';
import { GeolocationService } from './geolocation.service';
import { ClientItemListComponent } from './client/client-item-list.components';
import { ClientItemService } from './client/client-item.service';
import { DataService } from './data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
  MatToolbarModule, MatCardModule, MatSlideToggleModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    ClientItemComponent,
    ClientItemListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule, MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
    MatToolbarModule, MatCardModule, MatSlideToggleModule
  ],
  providers: [
   ClientItemService,
   GeolocationService,
   DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
