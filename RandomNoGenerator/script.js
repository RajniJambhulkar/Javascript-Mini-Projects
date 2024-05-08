let lable1 = document.getElementById("label1");
let lable2 = document.getElementById("label2");
let lable3 = document.getElementById("label3");
const button1 = document.getElementById("button1");
button1.onclick = function(){
    let min = 10;
    let max = 40;
     lable1.textContent = Math.floor(Math.random()*(max-min+1) + min);
     lable2.textContent = Math.floor(Math.random()*(max-min+1) + min);
     lable3.textContent = Math.floor(Math.random()*(max-min+1) + min);
    
}