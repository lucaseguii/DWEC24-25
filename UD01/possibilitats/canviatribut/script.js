let polar =  document.getElementById('polar');

function canviaImatge(){
    if(polar.src.match('oso')){
        polar.src = "imatges/perro.jpg";
    }
    else{
        polar.src = "imatges/osoPolar.jpg";
    }
    
}
function canviaTamany(){
    if(polar.src.match('oso')){
        polar.style.width = "500px";
    }
    
}
function canviaTamany1(){
    if(polar.src.match('per')){
        polar.style.width = "500px";
    }
    
}