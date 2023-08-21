import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BibliotecaNacionalComponent } from './biblioteca-nacional/biblioteca-nacional.component';
import { LibroComponent } from './libro/libro.component';

@NgModule({
  declarations: [
    AppComponent,
    BibliotecaNacionalComponent,
    LibroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
