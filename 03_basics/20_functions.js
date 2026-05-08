

function calculateCartPrice(num1) {
    return num1;
}
//console.log(calculateCartPrice(1))



function calculateCartPrice(...num1) {
    return num1;
}
//console.log(calculateCartPrice(200, 300, 400))



function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}
//console.log(calculateCartPrice(200, 300, 400, 500, 800))



const user = {
    userNmae: "moin",
    price: 999
}

function handleobject(anyobject) {

    console.log(`username is ${anyobject.userNmae} and price is ${anyobject.price}`)

}
//handleobject(user);



//passing object directly into function while calling
function handleobject(anyobject) {

    console.log(`username is ${anyobject.userNmae} and price is ${anyobject.price}`)

}
/*
handleobject({
    userNmae: "ahmad",
    price: 1199
});
*/



///passing arrays

const myNewArray = [11, 22, 33, 44]

function returnSecondValue(getarray){
    return getarray[1]
}
//console.log(returnSecondValue(myNewArray))
//console.log(returnSecondValue([21, 31, 41, 51])) //=> directily passing array into function while calling
