import React from "react";
import { useState } from "react";
const Array=()=>{
    // const[state,setState]=useState("");
    // const test=()=>{
// ---conditional operater with prompet
    //    var promptm= prompt("hii");
    //    a==3 ? document.write("hii"):document.write("bhag bhosdike")


// ---while loop with prompet
    //    while(a<=3){      
    //     document.write(a +"<br>");      
    //     a++       
    //    }
       

// ---do while loop with continue


//  do{
//     document.write("moj le roj le:"+ a + "<br>")
//     if (a==1) {
//         document.write("moj le roj le22222:"+ a + "<br>")
//         break;    
//     }

   
//     a++;
//  }while(a<=3)


// --- 1D array
// let a =new Array();
// a=[1,2,3,4] 
// var sum =0;

// for(var g=4;g<=4;g++){
//     a[g]=promptm;
// } 

// for(let b=0;b<a.length;b++){
//     document.write("+a[b] + "<br>");  
// sum=sum+a[b]
// }

//document.write(sum +" "+a.length)

//--- n D array with table
// var arr=[
//     [1,2],
//     [2,5],
//     [3,0]
// ];
// document.write("<table border='1px' cellspacing='0'>");
// for(var a=0; a<arr.length; a++){
//      document.write("<tr>");
//     for(var b=0;b<arr[a].length;b++){
//         document.write("<td>" + arr[a][b] +"</td>");
//     }
  
//     document.write("</tr>");
// } 
//      document.write("</table>"); 

//--- forEach loop

// var a=[4,2];
// document.write(a)//->4,2
// a.forEach(function(val, index){
//     document.write(index + " " + val+ " <br>")//->4 2 // index show array element lication 
// })

//--- forEach loop deffrent way 

// a.forEach(loop);
// function loop(val, index){
//     document.write(index + " " + val+ " <br>")


//--- object with array

// var object={
//     array : [1,3,4],
// salary: function(){
//     return 1000;
// },
//      s: function(){
//         return (this.array +"  ") -----//without this u can
//not access array object with in function---
//     }
// }
// document.write(object.s());
// }

//--- object with function
// document.write(object.salary()); 
//---- array const problem
// problem- when u create array by const u can
// to change the value of array.same problem in case of object
// ex- const a=[10,2];
//a=[3,4];
//o/p- error
//solution-a[0]=4;
//a[1]=6;
//o/p-[4,6] 

//---for in loop
// basicaly for in loor made for object 
//problem- in object each oject normaly print in following way which not good way
//ex-- var q={
//     name: "khj",
//     sub:"nknkj", 
//     fail:"nbbj"
// } 
// console.log(q.name);
// console.log(q.sub);
// solution--
// for(var key in q){
//     dcument.write(key +":"+ q[key]+"<br>")
// }
//-- o/p-- name:khj
//         sub:nknkj
//         fail:nbbj

//map()
// var q =[1,2,3];
// var q=[//this is called array of object
//        { name: "khj",lname :"ygy"},
//         {sub:"nknkj"}, 
//         {fail:"nbbj"}
// ]
// var n=q.map(item);
// document.write(n);
// function item(x){
//   return x.lname="g"


//--->basic dom object method
// Element=document.all[9];
// Element=document.head;
// Element=document.title;
// Element=document.body;
// Element=document.links;
// Element=document.domain;
// Element=document.images;
// Element=document.forms;

//--> (label,option, select)menu with form

// return(
// <form action="">
//     <label for="">name</label><input type="no"id="no" ></input>
//     <label for="">class</label><input type="no" id="queen"></input>
//     <label for ="">country</label>
//     <select>
//         <option value="">india</option>
//         <option value="">pak</option>
//     </select>
// </form>
    
// )

//--> rest operator




// }

// const hello =(element)=>{
    
//     var x=element.value;
//     document.getElementsByName("1").innerHTML=x;

// }
    function rest(name, ...arg) {
        let sum = 0;
        for (let i in arg) {
            sum += arg[i];

        }
        document.write(sum);
        document.write(name);
    }

  
  
    return(
           

        // test()// form form becaus not fired on event thats why directly call this function
        rest("nj",1,2,3)
        // <span onClick={test}>yes</span>       
    )
}
export default Array;