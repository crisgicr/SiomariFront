import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from './var.const';
import { Unidad } from '../_model/unidad';

@Injectable()
export class UnidadService {

  constructor(
    private http: HttpClient
  ) { }

  registrar(unidad: Unidad) {
    return this.http.post<Unidad>(`${url}/unidad`, unidad);
  }

  listarTodos() {
    return this.http.get<Unidad[]>(`${url}/unidad`);
  }

  /**
   * Se verificara si existe una unidad por su nombre
   * @param nombre 
   * @returns true si existe, false si no existe
   */
  existePorNombre(nombre: string) {
    // se deben reemplazar los espacion es blanco con '+'
    return this.http.get<any>(`${url}unidad/existe/nombre/${nombre.replace(' ', '+')}`);
  }

}
