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


// let person={
//     name:"nimur",
//     age:30, 
//     marks:60,
//     result:function(){
//         return this.marks>50?"pass":"fail";
//     } 
// };
// console.log(person.result());
// let employee=[
//     {name:"nimur",salary:1000},
//     {name:"rakib",salary:2000},
//     {name:"sada",salary:4000},
//     {name:"tre",salary:5000}
// ]
// employee.forEach(items => {
//     console.log(items.name+"="+items.salary)
// })
// let employees = [
//   { name: "Nimur", salary: 25000 },
//   { name: "Rana", salary: 35000 },
//   { name: "Asz", salary: 45000 }
// ];
// let highSalary=employees.filter(hs => hs.salary >30000);
// highSalary.forEach(e => console.log(e.name))

// let user = {
//   name: "Nimur",
//   age: 25,
//   city: "Dhaka"
// };
// document.getElementById("demo").innerHTML=
// "Name: " + user.name +"<br>"+
// "Age: " +user.age +"<br>"+
// "City:" +user.city+"<br>";
// ;
let student = {
    name: "Rana",
    marks: 78
};

function showInfo() {
    document.getElementById("info").innerHTML =
        student.name + " score " + student.marks;
}

let products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 120 },
  { name: "Bag", price: 800 }
];
let ul=document.getElementById("list");
products.forEach(item =>
{
    let li=document.createElement("li");
    li.innerText=item.name+"-"+item.price;
    ul.appendChild(li);
}
)