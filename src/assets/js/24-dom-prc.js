

import {students} from "../data/students.js"

const loadStudents=()=>{
    let strStudents="";

    students.forEach(() =>{
        strStudents+=`
        <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        
      </tr>
        `;
    });
    document.querySelector("#tblStudent tbody").innerHTML=strStudents;
    console.log(`Good joob`)
};


loadStudents();