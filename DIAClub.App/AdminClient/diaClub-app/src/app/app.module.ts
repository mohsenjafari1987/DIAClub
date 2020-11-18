import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { AddEventComponent } from './add-event/add-event.component';
import { HttpClientModule } from '@angular/common/http';
import { ManageEventComponent } from './manage-event/manage-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';

const declarations= [
  AppComponent,
  AddEventComponent,
  ManageEventComponent
] 

@NgModule({
  declarations: declarations,
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue : '/Admin/Index' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
