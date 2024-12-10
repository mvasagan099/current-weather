var signbtn = document.getElementById("popupsign");
var layer = document.querySelector(".layer");
var sign = document.querySelector(".signup");

signbtn.addEventListener("click",function(){
    layer.style.display="block";
    sign.style.display="block";

})

var closebtn = document.getElementById("close-btn");
closebtn.addEventListener("click",function(){
     layer.style.display="none";
    sign.style.display="none";
})

var logbtn = document.getElementById("popuplog");
var login = document.querySelector(".login");
logbtn.addEventListener("click",function(){
    layer.style.display="block";
    login.style.display="block";

})

var closelogbtn = document.getElementById("closelog");
closelogbtn.addEventListener("click",function(){
    layer.style.display="none";
    login.style.display="none";

})
var pass=""
var usr1=""
function checking(event){
    usr1 =event.target.value;
    console.log(usr1);
}
function checking2(event){
    pass= event.target.value;
    console.log(pass)
}

function gonewpage(){
    if(usr1=='mani' && pass=='1234')
    {
       window.open("index.html", "_blank" );
    } 
    else {
        window.open("Weatherlogin.html", "_blank" );
    }
}