//Capturem els elements del DOM
const form = document.getElementById('form');
const nomUsuari = document.getElementById('nomUsuari');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Functions
function mostraError(input, missatge){
    const formControl = input.parentElement;

    formControl.className = "form-control error";
    const label = formControl.querySelector('label');
    const small = formControl.querySelector('small');
    small.innertext = label.innertext + ' ' + missatge;
    }

function mostraCorrecte(input){
    const formControl = input.parentElement;
    formControl.className = "form-control correcte";
    }

function esEmailValid(email){
    //javascript validacion email regex
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.exec(String(email).toLocaleLowerCase()); //true o false

}

function esObligatori(input){
    if(input.value === ''){
        mostraError(input, 'es obligatori.');
    }else{
        mostraCorrecte(input);
    }
}

//Events
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    esObligatori(nomUsuari);
    // esObligatori(email);
    if(email.value === ''){
        mostraError(email, 'es obligatori.');
    }else if(!esEmailValid(email.value)){
        mostraError(email, 'no te el format correcte.')
    }else{
        mostraCorrecte(email);
    }
    esObligatori(password);
    esObligatori(password2);
});