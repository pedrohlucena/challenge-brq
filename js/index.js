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