
// DATE AND TIME

let myDate = new Date()

//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toLocaleDateString());
//console.log(typeof(myDate));

let myCreatedDate =new Date(2023, 0, 23)

//console.log(myCreatedDate);
//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toLocaleDateString());

let myCreatedDate2 =new Date(2023, 0, 23, 5, 3)

//console.log(myCreatedDate2);
//console.log(myCreatedDate2.toLocaleString());

//let myCreatedDate3 = new Date("2023-01-14")

//console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date("01-14-2023")

//console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate4.getTime());

console.log(Date.now()); // current time is in miliseconds
console.log(Math.floor(Date.now()/1000)); //to convert in seconds will divide by 1000 and wrap up with math.floor to avoid decimal value



