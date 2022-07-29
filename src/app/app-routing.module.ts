import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorypageComponent } from './categorypage/categorypage.component';
import { AddproductComponent } from './dashboard/addproduct/addproduct.component';
import { AllproductsComponent } from './dashboard/allproducts/allproducts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditproductComponent } from './dashboard/editproduct/editproduct.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AccountdetailsComponent } from './userprofile/accountdetails/accountdetails.component';
import { ChpasswordComponent } from './userprofile/chpassword/chpassword.component';
import { MyordersComponent } from './userprofile/myorders/myorders.component';
import { AllcatogeryComponent } from './dashboard/allcatogery/allcatogery.component';
import { AddcatogeryComponent } from './dashboard/addcatogery/addcatogery.component';
import { EditcatogeryComponent } from './dashboard/editcatogery/editcatogery.component';

const routes: Routes = [
  { path: '', component: HomeHeaderComponent,
  children: [
    { path: '', component: HomeComponent},
  { path: 'categorypage', component: CategorypageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'track-order', component: TrackOrderComponent },
  { path: 'userprofile', component: UserprofileComponent,
  children: [
    {path: 'accountdetails',component:AccountdetailsComponent},
    {path: 'chpassword',component:ChpasswordComponent},
    {path: 'myorders',component:MyordersComponent},
  ], }
  ]},
  { path: 'dashboard', component: DashboardComponent,
  children: [
    {
      path: 'allproduct',
      component:AllproductsComponent,
    },
    {path:'allproduct/addproduct',component:AddproductComponent},
    {path:'allproduct/edit/:id',component:EditproductComponent},
    {path:'allcatogery',component:AllcatogeryComponent},
    {path:'allcatogery/edit/:id',component:EditcatogeryComponent},
    {path:'allcatogery/addcatogery',component:AddcatogeryComponent}
  ], },
  
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
