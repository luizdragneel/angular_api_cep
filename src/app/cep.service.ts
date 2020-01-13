import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Cep } from './cep';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http:Http) { }

  buscar(cep: string){
    return new Promise((resolve, reject) => {
      this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
        .subscribe((result:any) => {
          resolve(this.recuperarDados(result.json()));
        })
    })
    
  }

  recuperarDados(cepRes):Cep{
    let cep = new Cep();
    cep.cep = cepRes.cep;
    cep.logradouro = cepRes.logradouro;
    cep.complemento = cepRes.complemento;
    cep.bairro = cepRes.bairro;
    cep.localidade = cepRes.localidade;
    cep.uf = cepRes.uf;
    return cep;
  }
}
