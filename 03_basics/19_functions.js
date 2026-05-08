

function sayMyName(){

        console.log("m")
        console.log("o")
        console.log("i")
        console.log("n")

}
//sayMyName()

function addTwoNumbers(number1, number2){
        console.log(number1 + number2);
}
//addTwoNumbers(3, 4)
//addTwoNumbers(3, "4")
//addTwoNumbers(3, "a")
//addTwoNumbers(3, null)

/* function addTwoNumbers(number1, number2){
        console.log(number1 + number2);
}
const result = addTwoNumbers(5, 4)
console.log("Result", result) */


/*
function addTwoNumbers(number1, number2){
        let result = number1 + number2
        return result
}
const result = addTwoNumbers(5, 4)
console.log("Result", result)
*/

/*
function addTwoNumbers(number1, number2){
        
        return number1 + number2
}
const result = addTwoNumbers(5, 4)
console.log("Result", result)
*/

/*
function justLoggedIn(username){
    return`${username} just logged in.`
}

console.log(justLoggedIn("moin"));
*/


//function justLoggedIn(username = "ahmad"){
function justLoggedIn(username){
    if(username === undefined)
        // if(!username)
        {
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(justLoggedIn());
//this