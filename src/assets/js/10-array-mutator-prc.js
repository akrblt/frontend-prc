
const cities=["Ankara","Karaman","Mersin","Istanbul","Sirnak"];

document.querySelector("#btnSort").addEventListener("click",()=>{

 cities.sort();
    loadList();
});

document.querySelector("#btnReverse").addEventListener("click",()=>{
    cities.reverse();
    loadList();
});

document.querySelector("#btnREmove").addEventListener("click",()=>{
    cities.shift();
    loadList();
});

document.querySelector("#btnRemoveLast").addEventListener("click",()=>{
    cities.pop();
    loadList();
});

document.querySelector("#btnREmoveAll").addEventListener("click",()=>{
    cities.splice(0,cities.length);
    loadList();
});

document.querySelector("#btnAdd").addEventListener("click",()=>{

   const city= document.querySelector("#cities").value;
   if(!city) return;
   cities.push(city);
    loadList();
});

document.querySelector("#btnMix").addEventListener("click", ()=>{
    getRandom();
    loadList();
});

const getRandom=()=>{
    const arr=[];

    while(cities.length>0){
        const rndIndex=Math.floor(Math.random()*cities.length);
        const city=cities[rndIndex];
        arr.push(city);
        cities.splice(rndIndex,1);
    }

    cities.splice(0,0,...arr);
    
}





const loadList=()=>{
    let html="";
    for(let i=0;i<cities.length;i++){
        html+=`<li> ${cities[i]}</li>`;
    }

    document.querySelector("#cityList").innerHTML=html;
}



loadList();