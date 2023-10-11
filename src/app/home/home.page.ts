import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  peso: number = 0;
  imc: number = 0;
  altura: number = 0;
  alturaMetros: number = 0;
  edad: number = 0;
  resultado: number = 0;
  mensajeBasal: String = '';
  mensajeIMC: String = '';
  genero: String = '';
  categoriaIMC: String = ''; // Variable para la categoría del IMC


  constructor() {}

  calcularGastoBasal(peso: number, altura: number, edad: number, genero: String) {
    if (genero == 'hombre') {
      this.resultado = 13.397 * peso + 4.799 * altura - 5.677 * edad + 88.362;;
      this.resultado.toFixed(2);
      this.mensajeBasal
   = "Tu gasto basal aproximado es de " + this.resultado.toString() + " calorías diarias";
    } else {
      this.resultado = 9.247 * peso + 3.098 * altura - 4.330 * edad + 447.593;;
      this.resultado.toFixed(2);
      this.mensajeBasal
   = "Tu gasto basal aproximado es de " + this.resultado.toString() + " calorías diarias";
    }
  }

  calcularIMC(peso: number, altura: number) {
    this.alturaMetros = altura / 100;
    this.imc = peso / (this.alturaMetros * this.alturaMetros);
    
    this.mensajeIMC = this.imc.toFixed(2);
  
    let categoria = '';
    if (this.imc < 18.5) {
      categoria = 'Bajo peso';
    } else if (this.imc >= 18.5 && this.imc < 24.9) {
      categoria = 'Peso normal';
    } else if (this.imc >= 25 && this.imc < 29.9) {
      categoria = 'Sobrepeso';
    } else {
      categoria = 'Obesidad';
    }
  
    this.mensajeIMC = `Tu IMC es ${this.mensajeIMC} (${categoria})`;

    this.categoriaIMC = categoria;
    

  }
  
  

}
