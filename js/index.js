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
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})

let carouselOn = true;
var changeCarouselvisibility = function(){
    if(carouselOn){
        document.getElementById("carrosel").setAttribute("style", "display: none");
        carouselOn = false;
    } else {
        document.getElementById("carrosel").setAttribute("style", "display: block");
        carouselOn = true;
    }
    
}