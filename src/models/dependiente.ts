import { DateTime } from "ionic-angular";
import { Evento } from "./evento";

export class Dependiente {
    _id: string;
    nombre: string;
    apellido: string;
    estado_civil: string;
    sexo: string;
    rut: {
        rut: string;
        dv: string;
    };
    fecha_nacimiento: DateTime;
    apoderado: {
        _id: string;
        nombre: string;
        apellido: string;
    };
    contactos: any[];
    cuidadores: any[];
    enfermades: any[];
    medicinas: any[];
    notas: any[];
    eventos: Evento[];
    lugares: any[];

}