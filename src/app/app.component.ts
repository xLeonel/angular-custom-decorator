import { Component, OnInit } from '@angular/core';
import { Encadear } from './encadear.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'teste-decorator';

  
  @Encadear('adfasd', true) teste = 'valortESTE';


  ngOnInit(): void {
    console.log('valorFinal', this.teste)
  }
}
