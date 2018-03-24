import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './common/header/header.component';
import { NavebarComponent } from './common/navebar/navebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { ToasterComponent } from './common/toaster/toaster.component';
import { SpinnerComponent } from './common/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    NavebarComponent,
    FooterComponent,
    ToasterComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class AppModule { }
