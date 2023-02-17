const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login_form');

const validateIput = ({ target }) =>{
    if(target.value.length > 2){
        button.removeAttribute('disabled'); 
    }else{ 
        button.setAttribute('disabled', '')
    }
}
const  handlesubmit = (event) => {
    event.preventDefault();
    console.log('oi');
}
input.addEventListener('input', validateIput);
form.addEventListener('submit', handlesubmit);