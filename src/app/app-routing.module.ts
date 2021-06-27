import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { OrderComponent } from './order/order.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserordersComponent } from './userorder/userorders.component'


// create routes
const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component:HomeComponent},
  { path: 'allproducts', component:AllproductsComponent},
  { path: 'aboutus', component:AboutusComponent},
  { path: 'login', component:LoginComponent},
  { path: 'users', component:UsersComponent},
  { path: 'admin', component:AdminComponent},
  { path: 'create', component:CreateComponent},
  { path: 'updateproduct/:id', component:EditComponent},
  { path:'products/details/:id' , component:DetailsComponent },
  { path: 'delete', component:DeleteComponent},
  { path: 'userlogin', component:UserloginComponent},
  { path: 'order/:uname', component:OrderComponent},
  { path: 'checkout', component:CheckoutComponent},
  { path: 'userorders', component:UserordersComponent},
  { path: '**', component:NotfoundComponent},
];

// register routes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
