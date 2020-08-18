import { Component, OnInit, HostBinding } from '@angular/core';

import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  @HostBinding('class') classes ='row';
  usuarios: any = [];
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuarioService.getUsuarios()
      .subscribe(
        res => {
          this.usuarios =res;
        },
        err => console.error(err)
      );
  }

}
