
const marvelHeros = ["thor", "ironman", "spiderman"]

const dcHeros = ["superman", "flash", "batman"]

//marvelHeros.push(dcHeros)
//console.log(marvelHeros)
//console.log(marvelHeros[3]);

const allHeros = marvelHeros.concat(dcHeros)
//console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros] //spread opretor
//console.log(allNewHeros);

const firstArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const secondArray = firstArray.flat(Infinity)

//console.log(secondArray);

//console.log(Array.isArray("moin"));
//console.log(Array.from("moin"));
//console.log(Array.from({name: "moin"})); // will not be able to make an array we have to tell either we want to have an array of "keys" or "values"

let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1, score2, score3));