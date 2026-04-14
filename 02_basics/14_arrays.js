
const firstArray = [0, 1, 2, 3, 4, 5]

const secondArray = ["spiderman", "superman", "batman"]

const thirdArray = new Array(1, 2, 3, 4)

//console.log(thirdArray[1]);

// ARRAY METHODS

//firstArray.push(6);   //will insert 6 at the last of firstArray
//firstArray.push(7);
//firstArray.pop();  // removes last value from firstArray

//firstArray.unshift(9);  //will insert 9 in the start of firstArray
//firstArray.shift(9);  //will remove first element of firstArray

//console.log(firstArray.includes(9))  //tells if 9 is present in firstArray returns boolean datatype

const fourthArray = firstArray.join() // fourthArray will return data of firstArray in string datatype

//console.log(firstArray);
//console.log(fourthArray);
//console.log(typeof(fourthArray));

// SLICE,  SPLICE

//const fifthArray = firstArray.slice(1,3)

//console.log(firstArray);
//console.log(fifthArray);

const sixthArray = firstArray.splice(1,3)

//console.log(firstArray);
//console.log(sixthArray);
