const formBody = document.querySelector(".main");
const emailInput = document.querySelector(".emailInput")
const formButton = document.querySelector(".btn");
const successPage = document.querySelector(".success");
const successButton = document.querySelector(".sucessBtn");
const mailMessage = document.querySelector(".validMail");
const enteredEmail = document.querySelector(".enteredEmail");

function isValidEmail(email){
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
function handleInputChange(){
    const email = emailInput.value;
    if(isValidEmail(email)){
        formButton.disabled =false;
        mailMessage.classList.add("visible");
        
    }else{
        formButton.disabled = true;
        mailMessage.classList.remove("visible");
    }
}

emailInput.addEventListener('input',handleInputChange)

formButton.addEventListener("click",()=>{
    formBody.classList.add("visible")
    successPage.classList.remove("visible");
    enteredEmail.textContent = emailInput.value;
})

successButton.addEventListener("click",()=>{
    formBody.classList.remove("visible")
    successPage.classList.add("visible");
    emailInput.value = "";
})