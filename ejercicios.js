



// const character = {name: 'Jack Sparrow', age: 10};

// character.age = 25;

// console.log (character);

// firstName = 'Jon';
// lastName = 'Snow';
// age = 24;

// console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`)

// const toy1 = {name: 'Buss myYear', price: 19};
// const toy2 = {name: 'Rallo mcKing', price: 29};

// const sumaToy1MasToy2 = toy1.price + toy2.price

// console.log(`la suma de toy 1 mas la suma de toy 2 es ${sumaToy1MasToy2}`);

// let globalBasePrice = 10000;
// const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
// const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

// console.log(globalBasePrice);

// globalBasePrice = 25000;
// console.log(globalBasePrice);

// car1.finalPrice = car1.basePrice + globalBasePrice
// car2.finalPrice = car2.basePrice + globalBasePrice

// console.log(car1);
// console.log(car2);

// let multiply = 8 * 5
// console.log(multiply);

// let division = 10 / 2
// console.log(division);

// let resto = 15 % 9
// console.log(resto);

// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
// console.log(avengers[0]);

// avengers[0] = "IRONMAN"
// console.log(avengers);

// const elementosDelArray = avengers.length

// console.log(elementosDelArray);

// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
// console.log(rickAndMortyCharacters);

// rickAndMortyCharacters.push("Summer", "Morty");
// console.log(rickAndMortyCharacters);

// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
// console.log(rickAndMortyCharacters);
// rickAndMortyCharacters.pop();

// console.log(rickAndMortyCharacters);

// console.log(rickAndMortyCharacters[0]);
// console.log(rickAndMortyCharacters[rickAndMortyCharacters.length -1]);

//Elimina el segundo elemento del array y muestra el array por consola.

// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

// rickAndMortyCharacters.splice(1, 1);
// console.log(rickAndMortyCharacters);





// const number1 = 10; const number2 = 20; const number3 = 2;


// ejemplo if(number1 === 10){
// console.log('number1 es estrictamente igual a 10') }


// if (number2 / number1 === 2) { console.log("number2 dividido entre number1 es igual a 2");
// }
// if (number1 !== number2) { console.log("number1 es estrictamente distinto a number2");
// }
// if (number3 !== number1) { console.log("number3 es distinto number1");
// }
// if (number3 * 5 === number1) { console.log("number3 por 5 es igual a number1");
// }
// if (number3 * 5 === number1 && number1 * 2 === number2) { console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
// }
// if (2 === number1 || number1 / 5 === number3) { console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
// }




// Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

// for (let i=0; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }

//   for (let i = 1; i <= 10; i++) {
//     if (i < 10) {
//       console.log(`Intentando dormir ovejas ${i}`);
//     } else {
//       console.log("Dormido!");
//     }
//   }


// let numberOne = 2
// let numberTwo = 4

// function getMaxNumber(numberOne, numberTwo) {
//   if (numberOne > numberTwo) {
//     return numberOne;
//   } else {
//     return numberTwo;
//   }
  
// }

// console.log(getMaxNumber(numberOne, numberTwo));

let numberOne = 9
let numberTwo = 5

function getMaxNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
  
}

console.log(getMaxNumber(numberOne, numberTwo));
