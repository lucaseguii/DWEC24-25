// PART 1
// window.addEventListener('click', ()=>{
// console.log('Hiciste clic?');
// });

// let boton = document.querySelector("button");
// boton.addEventListener('click', clic);

// function clic (){
//     console.log("Click sobre el boton");
//     boton.removeEventListener('click', clic);
// }


// PART2
// let boton = document.querySelector("button");
// boton.addEventListener('mousedown', (e)=>{
// console.log(e);
// console.log(e.button);
// if(e.button == 0){
//     console.log("Button izq.");
// } else if(e.button == 1){
//     console.log("El chicho de enmedio");
// } else if(e.button == 2){
//     console.log("boton derecho");
// }else{
//     console.log("desconegut");
// }
// });


// PART 3
// let parrafo = document.getElementsByTagName("p")[0];
// let boton = document.querySelector("button");

// parrafo.addEventListener('mousedown', ()=>{
//     console.log("Controlador de evento para el parrafo");
// });

// boton.addEventListener('mousedown', (e)=>{
//     console.log("controlador de evento para el boton");
//     if(e.button == 2){
//         e.stopPropagation();
//     }
// });

// PART 4
// document.addEventListener('click', (e)=>{
//     if(e.target.nodeName.toLoweCase() == "button"){
//         console.log('Clic en ', e.target.textContent);
//     }
// });

//PART 5
// let enlace = document.querySelector("a");
// enlace.addEventListener('click', (e)=>{
//     console.log('Correcto');
//     e.preventDefault();
// });


// PART 6
// window.addEventListener('keydown', (e)=>{
//     if(e.key == "v"){
//         document.body.style.background = "violet";
//     }
// });

// window.addEventListener('keyup', (e)=>{
//     document.body.style.background = "";
// });

// window.addEventListener('keydown', (e)=>{
//     if(e.key == e.ctrlKey && e.key == " "){
// console.log("continuando...");    }
// });


//PART 7
window.addEventListener('click', (e)=>{
    let punto = document.createElement("div");
    punto.className = "dot";
    punto.style.left = (e.pageX - 4) + "px";
    punto.style.top = (e.pageY - 4) + "px";
    document.body.appendChild(punto);
});