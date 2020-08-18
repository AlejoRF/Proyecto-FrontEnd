import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UsuarioListComponent} from './component/usuario-list/usuario-list.component';
import {UsuarioFormComponent} from './component/usuario-form/usuario-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/usuario',
    pathMatch:'full'
  },
  {
    path: 'usuario',
    component: UsuarioListComponent
  },
  {
  path:'usuario/add',
  component: UsuarioFormComponent
  },
  {
    path:'usuario/edit/:id',
    component: UsuarioFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
