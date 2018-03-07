import { Canal } from "./canal";

export class Predio {
    
    id: number;
	codigo: string;
	nombre: string;
	nombrePropietario: string;
	areaTotal: number;
	areaPotencialRiego: number;
	areaBajoRiego: number;
	moduloRiego: number;
	numeroTomas: number;
	tipoSuelo: string;
	longitud: number;
	latitud: number;
	canalId: Canal;
}