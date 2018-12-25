import { DateTime } from "ionic-angular";

export class Usuario {
    _id: string;
    nombre: string;
    apellido: string;
    sexo: string;
    rut: {
        rut: string;
        dv: string;
    };
    telefono: string;
    email: string;
    fecha_nacimiento: DateTime;
    descripcion: string;

    dependientes: {
        _id: string;
        nombre: string;
        apellido: string;
    }[];
    encargados: {
        _id: string;
        nombre: string;
        apellido: string;
    }[];
    afiliados: {
        _id: string;
        nombre: string;
        apellido: string;
    }[];
}