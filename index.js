const password=document.getElementById("password");
const text=document.getElementById("text");

const i=6;

password.addEventListener("input",function(){
    const result= password.value.length;
    if(result>i){
      text.textContent="Sifre 6 simvoldan ibaret olmalidir";
      text.style.color="red";
      password.style.borderColor="red";


    } 
    else if(result===i){
      text.textContent="Sifre dogrudur";
      text.style.color="green";
      password.style.borderColor="green";
    } 


})