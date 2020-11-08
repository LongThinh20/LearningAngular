

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { TrangChuModule } from './trang-chu/trang-chu.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TrangChuModule,
    AppRoutingModule,
    CarouselModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}