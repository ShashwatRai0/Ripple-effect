//let promise1 = new Promise((resolve ,reject)=>{
//   let success = false
//   if(success){
//    resolve("Promise fulfilled")
//   }
//   else{
//    reject("Proimse rejected");
//   }
//})
//promise1.then((message)=>{
//    console.log("first promise:"+ message)
//    return "second promise fulfilled"
//}).then((message)=>{
//    console.log("second promise:" +message)
//    return "third promise fulfilled"
//})
//.then((message)=>{
//    console.log("third promise:" +message)   
//})
//.catch((error)=>{
//    console.error("promise1:"+ error);
//    
//})

//async function getData() {
//   let response = await fetch('https://jsonplaceholder.typicode.com/posts') 
//   let data = await response.json()
//   console.log(data); 
//}
//getData()

//object-----------------------------------------

//const Person ={}
//
//Person.firstName="Shashwat"
//Person.LastName="Rai"
//Person.age="23"
//
//document.getElementById("demo").innerHTML=Person.firstName+" is "+ Person.age

//const element = document.getElementById("id1").innerHTML="bye"
//const click = document.getElementById("id2").innerHTML="bye"
//const score = 200

//   if(score>100){
//     let power = "fly"
//     console.log(`user power: ${power}`)
//   }
//   console.log(`user power: ${power}`)

//const balance = 1000
//
//if(balance>500) console.log("test");


//const month = 5
//
//switch (month) {
//    case 1:
//        console.log("january")
//         break;
//    case 2:
//        console.log("february")
//         break;
//    case 3:
//        console.log("march")
//         break;
//    case 4:
//        console.log("april")
//         break;
//    case 3:
//        console.log("may")
//         break;
//
//    default:
//        console.log("no month to shown");
//        
//        break;
//}


//for loop

//for (let i = 1; i <=10; i++) {
//    console.log(`TABLE OF ${i}`);
//      for(let j =1 ;j<=10; j++) {
//    console.log(i + '*' + j + '=' + i*j)
//   }
//}


//High order loops (foor in ,for-of ,for each)

//for-of---------------------->>>

//const arr = [1,2,3,4,5,6,7,8]
//
//for (const num of arr) {
//   // console.log(num);
//    
//}
//
//const map = new Map()
//map.set  ('IN',"India")
//map.set  ('FR',"France")
//map.set  ('SL',"Sri Lanka")
//
//console.log(map);


//for-each---------------->>>>>>>>

//const coding = ["js","c++","ruby","py"]
//coding.forEach((item,index,arr) => {
//    console.log(item,index,arr);
//    
//});

//function printme(item){
//    console.log(item);
//    
//}
//
//coding.forEach(printme)


//const myCoding = [
//    {
//        languageName: "javaScript",
//        languagefile: "js"
//    },
//    {
//        languageName: "java",
//        languagefile: ".java"
//    },
//    {
//        languageName: "python",
//        languagefile: "py"
//    },
//]
//myCoding.forEach((item ,index)=>{
//    console.log(item.languagefile,index);
//     
//})



// ------  for each dont return any value--->>>>




//const myNums = [1,2,3,4,5,6,7,8,9]

//const num = myNums.filter((item)=>item>4)
//
//console.log(num);

//const newNum = []
//
//myNums.forEach((num) => 
//    {
//     if (num > 4) {
//        newNum.push(num)
//    }
//})
//console.log(newNum)


//const books = [
//    {
//    title:"book1",
//    genre:"History",
//    publish:2000
//   },
//    {
//    title:"book2",
//    genre:"English",
//    publish:1999
//   },
//    {
//    title:"book1",
//    genre:"Geo",
//    publish:2014
//   },
//    {
//    title:"book1",
//    genre:"javascript",
//    edition:"ES6",
//    publish:2022
//   },
//    {
//    title:"book1",
//    genre:"physics",
//    publish:2001
//   },
//    {
//    title:"book1",
//    genre:"javascript",
//    edition:"ES5",
//    publish:1995
//   },
//]
//
//const myBooks = books.filter((item) => {
//    return item.genre==="javascript" && item.publish >=2000
// 
//})
//console.log(myBooks);
//console.log(books);

const myNum= [1,2,3,4,5,6,7,8,9,10]

//const nums=[]

//myNum.forEach((value,index,array)=>{
//     array[index]= value+10
//     
//})

//let number = myNum.map((item) => {
//   return item *10}).map((item) =>{
//    return  item+1
//   } ).filter((item) => item >=40 )
//console.log(number);

// Reduce---------------->>>>>>>


//const arr =[1,2,3]
//
//const total= arr.reduce((acc,curval) =>{
//    console.log(`acc: ${acc} and curval: ${curval}`);
//    
//    return acc+curval
//
//}, 0 )

//console.log(total);


//const shoppingCart = 
//[
//    {
//        item: "js course",
//        price:999
//    },
//    {
//        item: "java course",
//        price:899
//    },
//    {
//        item: "c++ course",
//        price:799
//    },
//]
//
//const total = shoppingCart.reduce( (acc,item) =>( acc+item.price),0 )
//console.log("Total price of courses: ",total);




