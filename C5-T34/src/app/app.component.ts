import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'C5-T34';
  input:string = '0';
  result:string = '0';

//Guarda la primera tecla presionada
numPress(num:string) {
  if (this.input=="0"){
    this.input = num;
} else{
  this.input = this.input + num;
  this.calcAnswer();
}
}

//Guarda el segundo operador
pressOperator(op: string) {

  const lastKey = this.input[this.input.length - 1];

  if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+')  {
    return;
  }

  this.input = this.input + op
  this.calcAnswer();
}

//Borra un elemento de la operación
clear() {
  if (this.input !="" ) {
    this.input=this.input.substr(0, this.input.length-1)
  }
}

//Borra todos las operaciones y el resultado
allClear() {
  this.result = '0';
  this.input = '0';
}

//Hace la operación
calcAnswer() {
  let formula = this.input;

  let lastKey = formula[formula.length - 1];

  if (lastKey === '.')  {
    formula=formula.substr(0,formula.length - 1);
  }

  lastKey = formula[formula.length - 1];

  if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.')  {
    formula=formula.substr(0,formula.length - 1);
  }

  this.result = eval(formula);
}

//Devuelve el resultado
getAnswer() {
  this.calcAnswer();
  this.input = this.result;
  if (this.input=="0") this.input="";
}
}





