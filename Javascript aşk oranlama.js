var name1= prompt("What is first name?");
var name2= prompt("What is second name?");
var n = Math.random();
n= n*100;
n= Math.floor(n) + 1;
if(n>70){
  alert("Your love score is " + n + ". " + "You're really love each other");
} else{
  alert("Your love score is " + n);
}