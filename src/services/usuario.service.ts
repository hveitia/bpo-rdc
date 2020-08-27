import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class  UsuarioService {

    private nombre: string;
    private email: string;
    private celular: string;

    constructor() { }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setEmail(email: string) {
        this.email = email;
    }
    public getEmail(): string {
        return this.email;
    }
    public setCelular(celular: string) {
        this.celular = celular;
    }
    public getCelular(): string {
        return this.celular;
    }

}
