let butt_yes;

let butt_no;


document.addEventListener("DOMContentLoaded",function(){
    butt_yes = document.getElementById("butn1");
    butt_no = document.getElementById("butn2");
    
})
let arr = ["Think Once Again", "But why?? He loves You so much", "Ahh common don't do this to him","Sneha What happen yrr, He is Such a good ladka ","AHHAHA Now he has become so sad <br> do you really want that "]
let i =0
let j = 1;
function no(){
    console.log(butt_yes.style.height+","+j)
    butt_yes.innerHTML  = arr[i]
    butt_yes.style.height = j*90 +"px"
    butt_yes.style.width = j*80 +"px"
    butt_yes.style.fontSize=10*(j+1) + "px";
    i++
    j++;
    if (i>4){
        i=0;
    }
}
function yes(){
    window.location.href = 'yes.html';
}

