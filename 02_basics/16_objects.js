
// objects literal

const mySymbol = Symbol("key1")

const jsUser ={
    name: "moin",
    age: 28,
    city: "lahore",
    email: "moin@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "friday"],
    [mySymbol]: "mykey1"
}

//console.log(mySymbol)
//console.log(jsUser.email);
//console.log(jsUser["email"])

//jsUser.email = "moin@google.com"
//Object.freeze(jsUser)
//jsUser.email = "moin@memegpt.com"

//console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello JS User")
}
jsUser.greetingTwo = function(){
    console.log(`hello JS User, ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())