import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { FooterComponent } from './footer/footer.component';
import { HomeHeaderComponent } from './home-header/home-header.component';

import { CategoryNavbarComponent } from './category-navbar/category-navbar.component';

import { CategorypageComponent } from './categorypage/categorypage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    SigninComponent,
    FooterComponent,
    HomeHeaderComponent,
    CategoryNavbarComponent,
    CategorypageComponent,
    NotFoundComponent,
    TrackOrderComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
