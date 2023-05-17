import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncadearService {

  contexto = new Array<ItemContexto>();

  constructor() { }

  setContexto(item: ItemContexto) {
    this.contexto.push(item);
  }

  getContexto(key: string) {
    return this.contexto.find(x => x.key === key);
  }
}

export interface ItemContexto {
  key: string;
  value: object;
  type: TypeContexto
}

export enum TypeContexto {
  sessao,
  trabalho
}

