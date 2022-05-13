import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarRatingModule } from './StarRating/star-rating.module';



@NgModule({
  imports:[ 
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    StarRatingModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
