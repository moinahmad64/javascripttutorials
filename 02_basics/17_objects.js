

//const tinderUser = new Object()    //singleton object

const binanceUser = {}

binanceUser.id = "moin123"
binanceUser.name = "moin"
binanceUser.isLoggedIn = false

//console.log(tinderUser);

const bybitUser = {
    email: "moin@bybit.com",
    fullName: {
        userFullName: {
            userFirstName: "moin",
            userLastName: "ahmad"
        }
    }
}

//console.log(bybitUser.fullName.userFullName.userFirstName);

const obj1 = {1: "a", 2: "b"}

const obj2 = {3: "c", 4: "d"}

//const obj3 = { obj1, obj2}
//console.log(obj3)

//const obj4 = Object.assign({}, obj1, obj2)
//console.log(obj4);

//const obj5 = {...obj1, ...obj2}
//console.log(obj5);

const users = [
    {id: 1, 
    email: "user1@gmail.com"
    },
    {id: 2, 
    email: "user2@gmail.com"
    },
    {id: 3, 
    email: "user3@gmail.com"
    }
]

//console.log(users[1].email)

//console.log(binanceUser);

//console.log(Object.keys(binanceUser));
//console.log(Object.values(binanceUser));
//console.log(Object.entries(binanceUser));

//console.log(binanceUser.hasOwnProperty('isLoggedIn'));
