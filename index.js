var button = document.getElementById('a9');
var body = document.getElementById("gradient");
var a1 = document.getElementById("a8");
button.addEventListener("click", function (){
    body.style.background="linear-gradient(to left,#66ffff,violet,#e6005c)";
    a1.style.background = "linear-gradient(to left,#66ffff,violet,#e6005c)";
});