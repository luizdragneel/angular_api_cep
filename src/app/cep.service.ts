import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http:Http) { }

  buscar(cep: string){
    this.http.get(`https://viacep.com.br/ws/${cep}}/json/`)
  }
}
