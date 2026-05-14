

//["", "", ""]
//[{}, {},{}]

const firstArray = [1, 2, 3, 4, 5]

for (const num of firstArray) {
   // console.log(num)
    
}

//============================

const greeting = "hello world"
for (const greet of greeting) {
   // console.log(`$ char of greeting "${greet}"`)
    
}

//============================

// MAP

const map = new Map()

map.set('pk', "Pakistan")
map.set('uk', "United Kingdom")
map.set('usa', "United States of America")

//console.log(map)


//for (const key of map) {
//    console.log(key)    
//}


//for (const [key, value] of map) {
//    console.log(key , value)    
//}


//======================================

const games = {
    'game1': 'gta',
    'game2': 'nfs'
}

//for (const [key, value] of games) {
   // console.log(key, value)    
//}

const games2 = {
    game1: 'gta',
    game2: 'nfs'
}

//for (const [key, value] of games2) {
    //console.log(key, value)    
//}

//============================================

const myLangs = {
    js: 'javascript',
    html: 'hyper text markup lang',
    css: 'cascading style sheet',
    cpp: 'c++'
}

//for (const key in myLangs) {
//    console.log(key);
//}


//for (const key in myLangs) {
//    console.log(`${key} is shortcut for ${myLangs[key]}`)
//}

//===========================================

const programmingLangs = ["js", "java", "c++", "python"]

//for (const key in programmingLangs) {
          // console.log(key)
          //  console.log(programmingLangs[key])    
//}

//=================================================

const marvel = ["spiderman", "docstrange", "ironman", "wanda"]

//marvel.forEach( function (hero) {
  //  console.log(hero)
//})


//marvel.forEach( (item) => {
  //  console.log(item)
//})


//function printMe(item){
  //  console.log(item)
//}
//marvel.forEach(printMe);

//marvel.forEach( (item, index, arr) => {
  //  console.log(item, index, arr)

//})

//=======================================

const myCoding = [
    {languageName: "javascript",
    languageFileName: "js"
    },
    {languageName: "hypetext",
    languageFileName: "html"
    },
    {languageName: "cascadingstyle",
    languageFileName: "css"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    console.log(item.languageName);
})

