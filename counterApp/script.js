const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
countlabel = document.getElementById("countLabel");
let count =0;
increasebtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decreasebtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}
resetbtn.onclick = function(){
    count=0;
    countLabel.textContent = count;
}
