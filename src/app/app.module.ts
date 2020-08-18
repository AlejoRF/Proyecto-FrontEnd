import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { UsuarioFormComponent } from './component/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './component/usuario-list/usuario-list.component';

import { UsuarioService} from './services/usuario.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsuarioFormComponent,
    UsuarioListComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
