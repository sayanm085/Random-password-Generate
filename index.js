let lengthslider=document.querySelector("#lengthslider")
let slidervalue=document.querySelector("#slidervalue")


slidervalue.innerText=lengthslider.value

lengthslider.addEventListener("input", ()=>{
    slidervalue.innerText=lengthslider.value 
})




let generatebtn=document.querySelector("#generate")

generatebtn.addEventListener("click",()=>{
    let lenght=lengthslider.value

    let uppercase=document.querySelector("#uppercase").checked
    let lowercase=document.querySelector("#lowercase").checked
    let numbers=document.querySelector("#numbers").checked
    let symbols=document.querySelector("#symbols").checked

  
    let cratorin=""
    let password=""
     
    if(uppercase) cratorin+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(lowercase) cratorin+="abcdefghijklmnopqrstuvwxyz"
    if(numbers) cratorin+="0123456789"
    if(symbols) cratorin+="!@#$%^&*()_+"

    for(let i=0; i<lenght;i++){
      password+=cratorin.charAt(Math.floor(Math.random()*cratorin.length))
    }
    

    document.querySelector(".input").value=password
    
})


