import { Injectable, Renderer2, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarscriptsService {

  constructor() { }
  cargarScript(scriptName: string) {
    let scriptElement = document.createElement('script');
    scriptElement.src = '../../../assets/js/${scriptName}.js';
    scriptElement.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(scriptElement);
  }
}
