
import  {clients} from "../data/clients.js"


const loadclients=()=>{
    let client="";
    clients.forEach((c,number)=>{
        client+=`
        <tr>
        <th scope="row">${number+1}</th>
        <td>${c.name}</td>
        <td>${c.cardCredit}</td>
        
      </tr>
        `;
    }) ;

    document.querySelector("#tblClient tbody").innerHTML=client;
        
    
        
}

const hasAcreditCard=()=>{
    const credit=document.querySelectorAll("#tblClient tbody tr");
    console.log(credit);
    for(let card of credit ){
        const hasCard=card.querySelector("td:nth-child(3)").innerHTML;
        console.log(hasCard);
        if(hasCard=="false"){
            card.classList.add("table-danger");

        }
        else card.classList.add("table-success");
    }
  
    

   

   

}

loadclients();
hasAcreditCard();

