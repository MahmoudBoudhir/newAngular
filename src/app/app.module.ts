import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavabarComponent } from './components/shared/navabar/navabar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { DashbordComponent } from './components/shared/dashbord/dashbord.component';
import { HomeComponent } from './components/home/home.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';

import { Page404Component } from './components/page404/page404.component';
import { ClientComponent } from './components/public/admin/client/client.component';
import { AddComponent } from './components/public/category/add/add.component';
import { ListComponent } from './components/public/mointeur/list/list.component';
import { UpdateComponent } from './components/public/mointeur/update/update.component';
import { DetailsComponent } from './components/public/mointeur/details/details.component';
import { CategoryListComponent } from './components/public/category/category-list/category-list.component';
import { CategoryUpdateComponent } from './components/public/category/category-update/category-update.component';
import { ExamenListComponent } from './components/public/examen/examen-list/examen-list.component';
import { ExamenAddComponent } from './components/public/examen/examen-add/examen-add.component';
import { ExamenUpdateComponent } from './components/public/examen/examen-update/examen-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavabarComponent,
    FooterComponent,
    SidebarComponent,
    DashbordComponent,
    HomeComponent,
    Page404Component,
    ClientComponent,
    AddComponent,
    ListComponent,
    UpdateComponent,
    DetailsComponent,
    CategoryListComponent,
    CategoryUpdateComponent,
   
    ExamenListComponent,
    ExamenAddComponent,
    ExamenUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
