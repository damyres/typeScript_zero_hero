//Transpilação CTRL + B Segunda opçao

// ==> Variáveis 
let nome: string= 'Damyres'
console.log(nome)

// ==> arrays
let animais: string[] = ['Elefante', 'Panda', 'Vaca']
console.log(animais)

// ==> Objeto
let carro: {
    nome:string;
    ano:number;
    preco:number
}
carro = {nome: 'Toyota', ano: 1990, preco:70.000}
console.log(carro)


// ==> Functions
function multiplicarNumeros(num1:number, num2:number){
    return (num1 * num2)
}
console.log(`Multiplicd ..cador: ${multiplicarNumeros(3,5)}`)