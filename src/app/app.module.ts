import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClientItemComponent } from './client/client-item.component';
import { LikeDirective } from './directive/like.directive';
import { ClientItemService } from './client/client-item.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
   ClientItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
