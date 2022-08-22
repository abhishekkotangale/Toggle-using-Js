var toggled = false;

var toggle = document.getElementById("toggle-mode");
var ani = document.getElementById("circle");
var hTag = document.getElementsByTagName("h1")[0];
document.getElementById("toggle-mode").onclick = function (){
    if(!toggled){
        
        ani.style.marginLeft = "100px";
        document.body.style.backgroundColor = "black";
        hTag.style.color = "white";
        toggled = true;
    }else{
        ani.style.marginLeft = "1px";
        document.body.style.backgroundColor = "white";
        hTag.style.color = "black";
        toggled = false;
    }
}