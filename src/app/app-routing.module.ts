import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LlavesComponent } from './pages/llaves/llaves.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
const app_routes: Routes=[
  {  path:'',component: PortafolioComponent },
  {  path:'home',component: PortafolioComponent},
  {  path:'servicios',component: LlavesComponent },
  {  path:'contacto',component: ContactoComponent },
  {  path:'**',pathMatch:'full',redirectTo:'' }



  ];

@NgModule({
  imports:[
    RouterModule.forRoot(app_routes,{ useHash:true})
  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutingModule { }
