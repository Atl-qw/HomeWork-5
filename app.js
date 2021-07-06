var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var num = document.querySelector("#num");

var counter = 0;
 button1.addEventListener("click", function(){
     counter--
     num.innerText=counter;
 }
 ,num.innerText=counter
 );
 button2.addEventListener("click", function(){
      counter= 0
     num.innerText=counter;
 }
 ,num.innerText=counter
 );
 button3.addEventListener("click", function(){
     counter++
     num.innerText=counter;
 }
 )
