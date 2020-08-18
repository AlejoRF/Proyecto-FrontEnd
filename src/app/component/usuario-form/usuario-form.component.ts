import { Component, OnInit, HostBinding } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { ActivatedRoute, Router } from '@angular/router';

import {UsuarioService} from '../../services/usuario.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

   usuario: Usuario = {
    id:0,
    nombre:'',
    apellido:'',
    login:'',
    clave:'',
    estado:'',
    fcreacion: '',
    fupdate: ''
    };

    edit: Boolean = false;

  constructor(private usuarioService: UsuarioService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params= this.activeRoute.snapshot.params;
    if(params.id){
    this.usuarioService.getUsuario(params.id).
    subscribe(
      res =>{
       this.usuario = res,
        console.log(this.usuario);   
    
      }
    ),
    err => console.error(err);    
  } 
    
    
  }
  agregarNuevoUsuario(){
    delete this.usuario.id;
    delete this.usuario.fcreacion;
    delete this.usuario.fupdate;

    this.usuarioService.saveUsuario(this.usuario)
    .subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/usuario']);
      },
      err => console.error(err)
      )

      console.log(this.usuario.nombre);
  }
  updateUsuario(){
    delete this.usuario.id;
    delete this.usuario.fcreacion;
    delete this.usuario.fupdate;
    this.usuarioService.updateUsuario(this.usuario.id, this.usuario)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/usuario']);
      },
      err => console.log(err)
    )    
  }
}
