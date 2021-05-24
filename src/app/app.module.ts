import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { interceptorProvider } from './components/interceptors/prod-interceptor.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/auth/login.component';
import { RegistroComponent } from './components/auth/registro.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AlojamientosComponent } from './components/alojamientos/alojamientos.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { LocalizacionesComponent } from './components/localizaciones/localizaciones.component';
import { NoImagePipePipe } from './pipes/no-image-pipe.pipe';
import { PerfilComponent } from './perfil/perfil.component';
import { TemaComponent } from './components/tema/tema.component';
import { NuevoTemaComponent } from './components/nuevo-tema/nuevo-tema.component';
import { ForoComponent } from './components/foro/foro.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    MenuComponent,
    FooterComponent,
    AlojamientosComponent,
    RutasComponent,
    LocalizacionesComponent,
    NoImagePipePipe,
    PerfilComponent,
    TemaComponent,
    NuevoTemaComponent,
    ForoComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
