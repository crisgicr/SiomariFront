import { Injectable } from '@angular/core';
import { url } from './var.const';
import { HttpClient } from '@angular/common/http';
import { ProgramacionSemanal } from '../_model/programacion-semanal';

@Injectable()
export class ProgramacionSemanalService {

  private url: string;

  constructor(
    private http: HttpClient
  ) { 
    this.url = `${url}programacionSemanal/`;
  }

  /**
   * se guardara el modelo
   * @param programacionSemanal modelo a guardar
   */
  guardar(programacionSemanal: ProgramacionSemanal) {

    return this.http.post<ProgramacionSemanal>(this.url, programacionSemanal);
  }

    /**
	 * se calculara la lamina neta y los valores necesarios para hacer la
	 * programacion semanal del canal, seccion, zona o unidad
	 * 
	 * @param tipo
	 *            especifiracara si los valores corresponden a canal, seccion, zona
	 *            o unidad.1 = unidad, 2 = zona, 3 = seccion, 4 = canal
	 * 
	 * @param id
	 *            id correspondiente del tipo seleccionado
	 * 
	 * @param txtFecha
	 *            fecha de la semana de la programacion (yyyy-mm-dd) debe de ser un
	 *            lunes
	 * 
	 * @return lamina neta (m), area, capacidad del canal, eficiencia
	 */
  public programacionSemanal(id: number, tipo: number, fecha: Date) {

    let txtFecha = this.dateToString(fecha);

    return this.http.get<ProgramacionSemanal>(`${this.url}programacionSemanal?fecha=${txtFecha}&id=${id}&tipo=${tipo}`);
  }

  buscarPorFechaYCanalId(id: number, fecha: Date) {

    let txtFecha = this.dateToString(fecha);

    return this.http.get<ProgramacionSemanal>(`${this.url}buscarPorFechaYCanalId?fecha=${txtFecha}&id=${id}`);
  }

  /**
   * se devuleve la fecha en formato yyyy-mm-dd
   * @param fecha fecha a parcear
   * @return fecha en texto
   */
  private dateToString(fecha: Date): string {

    let dia: number = fecha.getDate();
    let mes: number = fecha.getMonth() + 1;
    let diaString: string = dia < 10 ? '0' + dia : '' + dia;
    let mesString: string = mes < 10 ? '0' + mes : '' + mes;

    return `${fecha.getFullYear()}-${mesString}-${diaString}`;
  }

}
