

document.querySelector("#btnAverage").addEventListener("click", (e)=>{
    const point1=document.querySelector("#txtPoint1").value;
    const point2=document.querySelector("#txtPoint2").value;

    const average=getAverage(point1,point2);
    console.log(average);

    const letter=convertNumberToLetter(average);

    alert(letter);
});


const getAverage=(point1,point2)=>{
    if(isNaN(parseFloat(point1)) || (isNaN(parseFloat(point2)))) return;

    const average=(parseFloat(point1) + parseFloat(point2))/2;

    return average;
};


const convertNumberToLetter = (average)=>{
    if(isNaN(parseFloat(average))) return;

    let letter;
     if(average >=90 && average<=100){
letter="A";
     }
     else if(average>=80){
        letter="B";
     }
     else if(average>=70){
        letter="C";
     }

     else if(average>=50){
        letter="D"
     }
     else letter="F";

     return letter;

}














