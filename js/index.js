function limparInput() {

    let elements = [] ;
    elements = document.getElementsByClassName("form-control");

    for(let i=0; i<elements.length ; i++){
       elements[i].value = "" ;
    }

}


let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1500:{
        items:4
      }
  }
})


let carouselOn = true;
var changeCarouselvisibility = function(){
    if(carouselOn){
        document.getElementById("carrosel").setAttribute("style", "display: none");
        document.getElementById("botao-camera").setAttribute("src", "../../assets/images/camera.svg");        
        carouselOn = false;
    } else {
        document.getElementById("carrosel").setAttribute("style", "display: block");
        document.getElementById("botao-camera").setAttribute("src", "../../assets/images/camera-on.svg");    
        carouselOn = true;
    }    
}
var fechaCarrossel = function(){
    if(carouselOn){
        changeCarouselvisibility();
    }
}

var mostraPostosProximos = function(){
    document.getElementById("iframe-index").src = "https://maps.google.com/maps?q=pinheiros,%20postos%20de%20gasolina&t=&z=13&ie=UTF8&iwloc=&output=embed";
    document.getElementById("img-seta-retorno").src = "../../assets/images/retorno-on.svg";
    document.getElementById("link-seta-retorno").href = "../home/index.html";
    document.getElementById("discreta").style.display = "none";
}

