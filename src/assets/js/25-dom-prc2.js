 
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

 };



 const setStudentBg=()=>{
  const rows=document.querySelectorAll("#tblStudents tbody tr");
  console.log(rows);
  for(let row of rows){
    const point = row.querySelector("td:nth-child(3)").innerHTML;
    console.log(point);
    if(point<50){
      row.classList.add("table-danger");
    }
  }
 }








 loadStudents();
 setStudentBg();