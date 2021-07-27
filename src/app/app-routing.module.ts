import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { ClientComponent } from './components/public/admin/client/client.component';
import { AddComponent } from './components/public/category/add/add.component';
import { CategoryListComponent } from './components/public/category/category-list/category-list.component';
import { CategoryUpdateComponent } from './components/public/category/category-update/category-update.component';
import { ExamenAddComponent } from './components/public/examen/examen-add/examen-add.component';
import { ExamenListComponent } from './components/public/examen/examen-list/examen-list.component';
import { ExamenUpdateComponent } from './components/public/examen/examen-update/examen-update.component';
import { RegisterComponent } from './components/register/register.component';
import { DashbordComponent } from './components/shared/dashbord/dashbord.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
 
  {
    path: "dashbord",
    component:DashbordComponent
  },
  {
    path:"admin",
    children:[
    {
      path:"clientlist",
      component:ClientComponent
    }
    ]
  },
  
  {
    path:"category",
    children:[
{
  path:"categoryList",
 component:CategoryListComponent
},
{
  path:"categoryAdd",
  component:AddComponent
},
{
  path:"update/:id",
  component:CategoryUpdateComponent
}
    ]
  },
  {
    path:"examen",
    children:[
{
  path:"examenList",
 component:ExamenListComponent
},
{
  path:"examenAdd",
  component:ExamenAddComponent
}, 
{

  path:"update/:id",
  component:ExamenUpdateComponent
}
    ]
  },
    {
      path:"**",
      component:Page404Component
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
