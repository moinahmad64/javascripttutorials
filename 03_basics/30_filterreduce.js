

const coding = ["js", "ruby", "java", "python", "cpp"]

//coding.forEach( (item) => {
//    console.log(item);
//})

//const values = coding.forEach( (item) => {
//    console.log(item);
//})
//console.log(values)

//const values = coding.forEach( (item) => {
  //  console.log(item);
    //return item;
//})
//console.log(values)

//===========================================

const myNums = [1, 2, 3, 4, 5, 6, 7, 8]

//myNums.filter( (nums) => nums > 4)
//const newNums = myNums.filter( (nums) => nums > 4)
//console.log(newNums);

//myNums.filter( (nums) => nums > 4)
//const newNums = myNums.filter( (nums) => {
//    return nums > 4})
//console.log(newNums);

//============================================

const secondArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newSecondArr = []

secondArr.forEach( (num) => {
    if(num > 4){ 
        newSecondArr.push(num)
    }
})

//console.log(newSecondArr)

//=============================================

const books = [
    {title: 'bookone', genre: 'fiction', publish: 1981, edition: 2004},
    {title: 'booktwo', genre: 'non-fiction', publish: 1992, edition: 2008},
    {title: 'bookthree', genre: 'history', publish: 1999, edition: 2007},
    {title: 'bookfour', genre: 'non-fiction', publish: 1989, edition: 2010},
    {title: 'bookfive', genre: 'science', publish: 2009, edition: 2014},
    {title: 'booksix', genre: 'fiction', publish: 1987, edition: 2010},
    {title: 'bookseven', genre: 'history', publish: 1986, edition: 1996},
    {title: 'bookeight', genre: 'science', publish: 2011, edition: 2016},
    {title: 'booknine', genre: 'non-fiction', publish: 1981, edition: 2089}
]

//const userBook = books.filter( (bk) => bk.genre === "history")
//console.log(userBook)

//const userBook = books.filter( (bk) => {
//  return bk.genre === "history" && bk.publish === 1999})
//console.log(userBook)

//==========================================

const thirdArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newThirdArr = thirdArr.map( (num) => num + 10);
//console.log(newThirdArr)

const newThirdArr = thirdArr.map(  (num) => { return num + 10});
//console.log(newThirdArr)

//===============================================

//               CHAINING

const fourthArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newFourthArr = fourthArr.map( (num) => num * 10).map( (num) => num + 1 ).filter( (num) => num >= 50)

//console.log(newFourthArr);

//===============================================





