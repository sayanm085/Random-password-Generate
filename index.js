let lengthslider=document.querySelector("#lengthslider");
let slidervalue=document.querySelector("#slidervalue");


slidervalue.textContent=lengthslider.value;

lengthslider.addEventListener("input",()=>{
  slidervalue.textContent=lengthslider.value;
})

let generate=document.querySelector("#generate");

generate.addEventListener("click",()=>{
    
  let Length=lengthslider.value


   let uppercase=document.querySelector("#uppercase").checked
   let lowercase=document.querySelector("#uppercase").checked
   let numbers=document.querySelector("#uppercase").checked
   let symbols=document.querySelector("#uppercase").checked

  let character="";
  let String="";


  if(uppercase){
    character+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(lowercase){
    character+="abcdefghijklmnopqrstuvwxyz";
  }
  if(numbers){
    character+="0123456789";
  }
  if(symbols){
    character+="!@#$%^&*()_+";
  }

  for(let i=0; i<Length;i++){
     String+=character.charAt(Math.floor(Math.random()*character.length))
  }
  
   
  document.querySelector(".input").value=String;

})