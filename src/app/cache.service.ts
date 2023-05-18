import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  contexto = new Array<ItemContexto>();

  constructor() { }

  async setContexto(item: ItemContexto) {
    const itemCache = await Promise.resolve(this.contexto.findIndex(x => x.key === item.key));

    if (itemCache !== -1) {
      this.contexto[itemCache].value = item.value;

      return;
    }

    this.contexto.push(item);
  }

  async getContexto(key: string) {
    return await Promise.resolve(this.contexto.find(x => x.key === key));
  }

  async getAllContexto() {
    return await Promise.resolve(this.contexto);
  };
}


export class ItemContexto {
  constructor(
    public key: string,
    public value: object
  ) { }

}
