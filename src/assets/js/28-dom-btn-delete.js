

import {students} from "../data/students.js"

const loadStudents=()=>{
    let strStudents="";

    students.forEach((student,index) =>{
        strStudents+=`
        <tr>
        <th scope="row">${index+1}</th>
        <td>${student.name}</td>
        <td>${student.puan}</td>
        <td><button class="btn btn-danger btn-delete" >Delete</button></td> 
        
      </tr>
        `;
    });
    document.querySelector("#tblStudent tbody").innerHTML=strStudents;
    
};

const setStudentBg = () => {
  const rows = document.querySelectorAll("#tblStudent tbody tr");
  console.log(rows);
  for(let row of rows){
      const point = row.querySelector("td:nth-child(3)").innerText;
      if(point<50){
          row.classList.add("table-danger");
      }
  }
}

loadStudents();

setStudentBg();

document.querySelectorAll(".btn-delete").forEach((btn) =>{
  btn.addEventListener("click",(e)=>{
// console.log(e.target);
const row=e.target.closest("tr");
    const name=e.target.closest("tr").querySelector("td").innerText;
    //console.log(name);
    const result=confirm(`${name} isimli kaydi silmek istediginizden emin misiniz?`);

    if(!result) return;

    row.remove();;;;
    



    

  })
})

document.querySelectorAll("#tblStudent tbody tr").forEach((row)=>{
  row.addEventListener("click",(e)=>{
    e.target.closest("tr").classList.toggle("table-warning");
    
    
    
  })
})


