const $ = document;
const btnsubmit = $.getElementById("btn");
const firstInput = $.getElementById("firstuser");
const secInput = $.getElementById("Seconduser");
const mincharP =$.getElementById("minchar")

let firstplayername;
let secondplayername;

const toast = Swal.mixin({
    icon: 'success',
  title: 'Saved...',
  text: 'Try to do your best!',
  showConfirmButton: false,
  timer:4000,
  
 
   
   
})

     




btnsubmit.addEventListener("click", () => {
  //    firstnamelenght=Number(firstInput.value.length)
  //    console.log(firstnamelenght)
  if (firstInput.value.length >=3 && secInput.value.length >=3)  {

    toast.fire({
       
    })
    






  }else{
    mincharP.style.animation="minchar 7s"
  }
});

