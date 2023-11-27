const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const reset = document.getElementById("reset");
let h = document.querySelector("h1");

let startValue = 0;

// inc.addEventListener("click" , function () {
//    h.innerHTML =+1;
// })



inc.addEventListener("click",function () {
    startValue++;

    if(startValue == 10){
        h.style.color =" red"
    }else {
        h.style.color =" black"
    }

     h.innerHTML = startValue;
})


dec.addEventListener("click",function () {
    
    if(h.innerHTML > 0){
        startValue--;
        h.innerHTML = startValue;
    }
   
    if(startValue == 10){
        h.style.color =" red"
    }else {
        h.style.color =" black"
    }
})

reset.addEventListener("click" , function () {
   h.innerHTML = 0;
})
   




