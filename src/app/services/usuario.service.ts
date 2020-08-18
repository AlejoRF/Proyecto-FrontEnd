import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../models/Usuario';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API_URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get(`${this.API_URL}/usuario`);
  }
  getUsuario(id: string | number){
    return this.http.get(`${this.API_URL}/usuario/${id}`);
  }
  saveUsuario(usuario : Usuario){
    console.log(usuario.nombre);
    return this.http.post(`${this.API_URL}/usuario`, usuario);    
  }
  updateUsuario(id: string | number, updateUsuario: Usuario){
    return this.http.put(`${this.API_URL}/usuario/${id}`,updateUsuario);
  }
}
