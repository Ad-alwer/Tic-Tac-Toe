const $ = document;
const btnsubmit = $.getElementById("btn");
const firstInput = $.getElementById("firstuser");
const secInput = $.getElementById("Seconduser");
const mincharP =$.getElementById("minchar")
const themebtn =$.getElementById("theme")
const body=$.body
const container=$.getElementById("cont")
 const h2txt=$.getElementById("h2txt")
 const h3txt=$.getElementById("h3txt")
 const socialtxt=$.getElementById("social")




let firstplayername;
let secondplayername;
let nowtheme="light"
const regexusers=/^\w{3,12}$/
let localstoregetheme

const toast = Swal.mixin({
    icon: 'success',
  title: 'Saved...',
  text: 'Try to do your best!',
  showConfirmButton: false,
  timer:4000,
  
 
   
   
})
if(localstoregetheme=="dark"){
  themebtn.classList.remove(bx-sun)
  themebtn.classList.add("bx-moon")
  }


window.addEventListener("load",()=>{

   localstoregetheme=localStorage.getItem("theme");
   if(localstoregetheme==="dark"){
    themebtn.classList.remove("bx-sun")
    themebtn.classList.add("bx-moon")
    }
 
  if(!localstoregetheme){
    localStorage.setItem("theme", "light");
  }


 
  
  
  
})

themechanger()




themebtn.addEventListener("click" ,() =>{
 themebtn.classList.toggle('bx-sun')
 themebtn.classList.toggle('bx-moon')

if(themebtn.classList=="bx sun me-3 bx-moon"){
  localStorage.setItem("theme", "dark");
  themechanger()
}
if(themebtn.classList=="bx sun me-3 bx-sun"){
  localStorage.setItem("theme", "light");
  themechanger()
}
})


     




btnsubmit.addEventListener("click", () => {
  //    firstnamelenght=Number(firstInput.value.length)

  
  let regexresultuser1=regexusers.test(firstInput.value)
  let regexresultuser2=regexusers.test(secInput.value)

  
  if (regexresultuser1 && regexresultuser2)  {
   let firstname=firstInput.value
   let secondname=secInput.value
   localStorage.setItem('firstplayername',firstname);
   localStorage.setItem('secondplayername',secondname);
   
   

    toast.fire({
       
    })
    setInterval(function () {location.href='http://127.0.0.1:5500/mainpage.html'}, 3000);
    

    






  }else{
    localstoregetheme=localStorage.getItem("theme");
    if(localstoregetheme ==="light"){
      mincharP.style.animation="minchar 7s"
    }else if(localstoregetheme ==="dark"){
      mincharP.style.animation="minchardark 7s"

    }
  }
 
});



function themechanger(){
  const nowtheme =localStorage.getItem("theme");
  if(nowtheme=="dark"){
    body.style.backgroundColor="black"
    container.style.backgroundColor="rgb(38, 37, 37)"
    themebtn.style.color="white"
     
     h2txt.classList.add("text-light")
     h3txt.classList.remove("text-muted")
     h3txt.classList.add("text-white-50")

     
     mincharP.style.color="white"
     firstInput.style.backgroundColor="rgb(20, 19, 19)"
     firstInput.style.color="white"

     secInput.style.backgroundColor="rgb(20, 19, 19)"
     secInput.style.color="white"

     btnsubmit.classList.remove("bg-dark")
     btnsubmit.classList.remove("text-light")
     btnsubmit.classList.add("text-dark")
     btnsubmit.classList.add("bg-secondary")

     socialtxt.classList.remove("text-muted")
     socialtxt.classList.add("text-secondary")

     
    container.classList.remove('cont')
     container.style.boxShadow=' 0px 0px 47px 8px rgb(246, 243, 243, 0.35)';

    
     
    
    
   

  }
  if(nowtheme=="light"){
    body.style.backgroundColor="white"
    container.style.backgroundColor="rgb(233, 229, 229)"
    themebtn.style.color="black"
    h2txt.classList.remove("text-light")
    h3txt.classList.remove("text-muted")

    mincharP.style.color="black"

    firstInput.style.backgroundColor="white"
     firstInput.style.color="black"

     secInput.style.backgroundColor="white"
     secInput.style.color="black"

     btnsubmit.classList.remove("bg-secondary")
     btnsubmit.classList.add("bg-dark")
     btnsubmit.classList.add("text-white")

     socialtxt.classList.remove("text-secondary")
    socialtxt.classList.add("text-muted")

    container.style.boxShadow=' 1px 1px 39px 2px rgba(0,0,0,0.32)';
    
    
    
   
     
     
    

   

  }
}

