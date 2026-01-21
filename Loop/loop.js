// let fruits = ["Apple", "Banana", "Mango"];

// fruits.forEach((value, index) =>{
//     console.log(index+":"+value)
// })
// let employess=[
//     {name:"nimur",salary:2000},
//     {name:"rana",salary:4000},
//     {name:"rak",salary:5000},
// ]
// for(let emp of employess){
//     if(emp.salary>4000){
//         console.log(emp.name,emp.salary)
//     }
// }
// let numbers = [1, 2, 3, 4, 5, 6];
// for(let l of numbers){
//     if(l%2 == 0){
//         console.log(""+l)
//     }
// }


let student = {
  name: "Rahim",
  math: 80,
  english: 70,
  science: 90
};

let total=0;
for(let key in student){
    if(typeof student[key]==="number"){
        total=total+student[key];
    }
   
}
 console.log("total number is ="+total);

