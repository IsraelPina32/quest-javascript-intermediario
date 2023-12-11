const form = document.getElementById('form');
const fields = document.querySelectorAll('input, textarea');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let formVerification = 'campo obrigatorio*'
    
    fields.forEach((field,)  => {
        if(field.value === ''){
            field.nextElementSibling.textContent = formVerification;
            field.classList.add("field-not");
            field.classList.remove("field-filled");
        }else{
            field.nextElementSibling.textContent = "";
            field.classList.add("field-filled");
            field.classList.remove("field-not");
        }
    })
  
   
})
