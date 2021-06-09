import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { DeleteComponent } from './delete/delete.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsersComponent,
    FooterComponent,
    NavbarComponent,
    NotfoundComponent,
    AboutusComponent,
    AllproductsComponent,
    LoginComponent,
    AdminComponent,
    CreateComponent,
    EditComponent,
    DetailsComponent,
    DeleteComponent,
    UserloginComponent,
    OrderComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
