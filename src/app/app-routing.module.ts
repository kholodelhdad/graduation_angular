import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorypageComponent } from './categorypage/categorypage.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: '', component: HomeHeaderComponent},
  { path: 'home', component: HomeHeaderComponent},
  { path: 'categorypage', component: CategorypageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'track-order', component: TrackOrderComponent },
{ path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
