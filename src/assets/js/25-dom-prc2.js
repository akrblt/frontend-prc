 
 import { newStudents } from "../data/newStudents.js";


 const loadStudents=()=>{
    let students="";
    newStudents.forEach((student,index)=>{
      console.log(student,index);
        students+=`
        <tr>
        <th scope="row">${index+1}</th>
        <td>${student.name}</td>
        <td>${student.point}</td>
        
      </tr>
        `;
    });
   
    document.querySelector("#tblStudents tbody").innerHTML=students;

 }

 loadStudents();