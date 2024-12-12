let enlace = document.getElementsByTagName("a")[2];
let miDiv = document.getElementById("miDiv")
let parrafos = document.getElementsByTagName("p");
let divP = document.getElementById("divP");
let creaP = document.getElementById("creaP");
let polar = divP.getElementsByTagName("img")[0];
console.log(polar);
// divP.insertBefore(parrafos[2], parrafos[1]);

creaP.addEventListener('click', ()=>{
    let miP = document.createTextNode("p")
    if(polar.alt){
        let texto = document.createTextNode(polar.alt);
        console.log(polar.parentElement);
    }
});



// console.log(enlace);
// console.log(miDiv);