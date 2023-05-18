import { Component, OnInit } from '@angular/core';
import { CacheValue } from './cache.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'teste-decorator';

  // constructor(private encadearService: EncadearService) {

  // }

  @CacheValue('key-teste', true) teste: string = 'valor inicial';
  // @CacheValue('key-outro', true) outro!: string;


  async ngOnInit(): Promise<void> {
    // this.encadearService.setContexto('valor1')
    // this.encadearService.setContexto('valor2')
    // this.encadearService.setContexto('valor3')

    // const contexto = this.encadearService.getAllContexto();

    // console.log(contexto)

    // const campo = await this.teste;

    // console.log('teste', campo)
    // console.log('teste', await this.teste);

    this.teste = '3';
    this.teste = '4';
    this.teste = '5';
    this.teste = '6';
    console.log('teste', await this.teste);

    // console.log('=======================================');

    // this.outro = 'valor outro'

    // let campo2 = await this.outro;

    // console.log('teste', campo2)
    // console.log('teste', await this.outro);

    // this.outro = 'sadada outro'

    // campo2 = await this.outro;

    // console.log('teste', campo2)


  }

  async atualizar(value: string) {
    this.teste = value

    console.log('teste', await this.teste)

  }
}
