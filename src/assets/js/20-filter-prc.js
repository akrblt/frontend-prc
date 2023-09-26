
import {countries} from "../data/countries.js"


const loadCountries=()=>{
    let options="";
    for(let country of countries){
        options+=`<option  value="${country.ccn3}"> ${country.name.common} </option>`
       console.log(country);
    }
    document.querySelector("#ddlCountries").innerHTML=options;
    document.querySelector("#area").innerHTML=countries.reduce((toplamAlan,contry)=>toplamAlan+contry.area,0);
}

const getCountry=(id)=>{
const arr=countries.filter((country)=> country.ccn3===id);
if(arr.length>0){
    return arr[0];
}
else{
    return null;
}

};

document.querySelector("#ddlCountries").addEventListener("change",(e)=>{
    console.log(e.target.value);
    const country=getCountry(e.target.value);

    // Bir bir list icinden objectleri almak istiyorsak Object.Value u kullanabiliriz. Eger onun icindede objectler varsa bu sefer arow function la map yapip alabiliriz.
    document.querySelector("#details tr:nth-child(1) td").innerHTML=country.capital;
    document.querySelector("#details tr:nth-child(2) td").innerHTML=Object.values(country.currencies).map((item)=> item.name);
    document.querySelector("#details tr:nth-child(3) td").innerHTML=Object.values(country.languages).join("-"); // join methoduyla ekleme cikarma yapabiliriz.  verilerin arasina bir sey ekleyebiliriz.
})



console.log(getCountry("020"))

loadCountries();