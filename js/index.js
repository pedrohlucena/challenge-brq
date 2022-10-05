function limparInput() {

    var elements = [] ;
    elements = document.getElementsByClassName("form-control");

    for(var i=0; i<elements.length ; i++){
       elements[i].value = "" ;
    }

}