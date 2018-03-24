import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from "./app.routing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './common/header/header.component';
import { NavebarComponent } from './common/navebar/navebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { ToasterComponent } from './common/toaster/toaster.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { FooditemsComponent } from './fooditems/fooditems.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    NavebarComponent,
    FooterComponent,
    ToasterComponent,
    SpinnerComponent,
    FooditemsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
