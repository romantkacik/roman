



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

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);