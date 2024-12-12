const form = document.getElementById("form");
const nomUsuari = document.getElementById("nomUsuari");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function mostraError(input, missatge) {
  const formControl = input.parentElement;

  formControl.className = "form-control error";
  const label = formControl.querySelector("label");
  const small = formControl.querySelector("small");
  small.innerText = label.innerText + " " + missatge;
}

function mostraCorrecte(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control correcte";
}

function esEmailValid(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.exec(String(email).toLowerCase()); //retornarà true o false
    if(re.test(String(input.value).toLowerCase())){
        mostraCorrecte(input);
    }else{
        mostraError(input, 'format invalid');
    }
}

function esObligatori(inputArray) {
  inputArray.forEach((input) => {
    console.log(input);
    if (input.value === "") {
      mostraError(input, "és obligatori");
    } else {
      mostraCorrecte(input);
    }
  });
}

function comprovaLongitud(input, min, max) {

  if(input.value.length < min) {
    mostraError(input, `ha de tenir almenys ${min} caràcters`);
  } else if (input.value.length > max) {
    mostraError(input, `ha de tenir màxim ${max} caràcters`);
  } else {
    mostraCorrecte(input);
  }
}

function comprovarContrasenyesIguals(input1, input2){
    if(input1.value != input2.value){
    mostraError(input2, 'No coinciden');
    }
}
//Esdeveniments
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // esObligatori(nomUsuari);
  // // esObligatori(email);

  // if (email.value === '') {
  //   mostraError(email, "és obligatori");
  // } else if (!esEmailValid(email.value)){
  //   mostraError(email, "no té el format correcte");
  // } else {
  //   mostraCorrecte(email);
  // }

  // esObligatori(password);
  // esObligatori(password2);

  const arrControls = [nomUsuari, email, password, password2];
  esObligatori(arrControls);

  comprovaLongitud(nomUsuari, 3, 15);
  comprovaLongitud(password, 4, 10);
    esEmailValid(email);
  comprovarContrasenyesIguals(password, password2);
});


//los mensajes de error desaparezcan en forma de que se supere el error