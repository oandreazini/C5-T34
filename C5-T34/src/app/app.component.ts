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

//Gurada la primera tecla presionada
numPress(num:string) {
  if (this.input=="0"){
    this.input = num;
} else{
  this.input = this.input + num;
  this.calcAnswer();
}
}



// getLastOperand() {

//   let position:number;

//   position=this.input.toString().lastIndexOf("+")

//   if (this.input.toString().lastIndexOf("-") > position) position =this.input.lastIndexOf("-")

//   if (this.input.toString().lastIndexOf("*") > position) position=this.input.lastIndexOf("*")

//   if (this.input.toString().lastIndexOf("/") > position) position=this.input.lastIndexOf("/")


//   return this.input.substr(position+1)
// }

pressOperator(op: string) {

  const lastKey = this.input[this.input.length - 1];

  if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+')  {
    return;
  }

  this.input = this.input + op
  this.calcAnswer();
}

clear() {
  if (this.input !="" ) {
    this.input=this.input.substr(0, this.input.length-1)
  }
}

allClear() {
  this.result = '0';
  this.input = '0';
}

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

getAnswer() {
  this.calcAnswer();
  this.input = this.result;
  if (this.input=="0") this.input="";
}
}





