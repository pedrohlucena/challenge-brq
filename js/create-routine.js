var todosDispositivos = ["Ar Condicionado", "Câmera", "Lâmpada",  "Rádio", "TV"];
var dispositivosAindaDisponiveis = todosDispositivos.slice();
var dispositivosSelecionados = [];
var existeBotaoExcluir = false;
var numeroCamposDispositivos = 0;

var abreNovoCampoAcao = function(){
    var camposAcao = document.getElementById("campos_de_acao");
    var campoVisivel = camposAcao.lastElementChild; 
        while (campoVisivel) {
            camposAcao.removeChild(campoVisivel);
            campoVisivel = camposAcao.lastElementChild;
        }
    var acionamento = document.getElementById('tipo-acionamento').value;    
        if (acionamento == 'horario'){
            document.getElementById('campos_de_acao').innerHTML = `<div class="form-group col-md-10 offset-md-1 mb-4">
            <label for="certa_distancia">Informe o horário de disparo:</label>
            <input type="datetime-local" class="form-control" id="certa_distancia" placeholder="">
        </div>`
        } else if(acionamento == 'distancia'){
            document.getElementById('campos_de_acao').innerHTML = `<div class="form-group col-md-10 offset-md-1 mb-4">
            <label for="certa_distancia">Defina a distância (em metros) desejada de sua casa:</label>
            <input type="number" class="form-control" id="certa_distancia" placeholder="">
        </div>`
        } else if(acionamento == 'minutos'){
            document.getElementById('campos_de_acao').innerHTML = `<div class="form-group col-md-10 offset-md-1 mb-4">
            <label for="certa_distancia">Defina a quantos minutos de sua casa:</label>
            <input type="number" class="form-control" id="certa_distancia" placeholder="">
        </div>`
    } ;
} 

var criaBotaoExcluir = function(){ 
    document.getElementById('botao_excluir').innerHTML = `<button onclick="excluiUltimoDispositivo()" id="botao_exclui_dispositivo" type="delete" class="offset-sm-1 btn btn-sm btn-danger mb-2">×</button>
    <label for="botao_exclui_dispositivo" id="label_botao_excluir">Excluir dispositivo</label>`;        
    existeBotaoExcluir = true;    
} 

var criaHTMLCamposDispositivos = function(){ // cria HTML para campos de dispositivos com a lista de dispositivosSelecionados
    var dispositivosHTML = "";
    dispositivosAindaDisponiveis.forEach((d, index) => dispositivosHTML += `<option value="${index}">${d}</option>`);
    var linhaHTML = `<div class="row" id="linha_dispositivo${numeroCamposDispositivos}">                
                                    <div class="form-group col-md-5 offset-md-1">
                                        <label for="dispositivo"> 
                                            ${dispositivosAindaDisponiveis.length} Dispositivos Disponíveis:
                                        </label>
                                        <select class="form-control" id="dispositivo${dispositivosSelecionados.length}">
                                            ${dispositivosHTML} 
                                        </select>
                                    </div>
                                    <div class="form-group col-md-5 mb-4">
                                        <label for="acao">🔧Selecione uma ação:</label>
                                        <select class="form-control" >
                                        <option>Ligar</option>     
                                        <option>Desligar</option>
                                        </select>
                                    </div> 
                                </div>`;
    return linhaHTML;
} 

var acrescentaCamposDispositivos = function(){ // monta HTML com todas as opções de dispositivos
    numeroCamposDispositivos++;
    var campos = criaHTMLCamposDispositivos();
    document.getElementById('selecao_dispositivos').insertAdjacentHTML('beforeend', campos);    
} 
acrescentaCamposDispositivos(); // já inicia a página com os campos para selecionar 1 dispositivo

var adicionarDispositivo = function(){
    event.preventDefault();
    if (!existeBotaoExcluir){
        criaBotaoExcluir();
    }
    efetivarEscolha();
    if(dispositivosAindaDisponiveis.length === 0){
        document.getElementById("botao_seleciona_dispositivo").disabled = true;
        return;
    } 
    acrescentaCamposDispositivos();
} 

var efetivarEscolha = function(){   
    var indiceDispositivo = parseInt(document.getElementById(`dispositivo${numeroCamposDispositivos - 1}`).value); 
    var dispositivo = dispositivosAindaDisponiveis[indiceDispositivo];
    dispositivosSelecionados.push(dispositivo);
    dispositivosAindaDisponiveis.splice(indiceDispositivo, 1);
}


var excluiUltimoDispositivo = function(){
    event.preventDefault();   
    if(dispositivosSelecionados.length > 0 && numeroCamposDispositivos != 1){      
        document.getElementById(`linha_dispositivo${numeroCamposDispositivos}`).remove();
        numeroCamposDispositivos--;
        dispositivosAindaDisponiveis.push(dispositivosSelecionados.pop());
    } else {
        document.getElementById("botao_exclui_dispositivo").remove();
        document.getElementById("label_botao_excluir").remove();
        existeBotaoExcluir = false;
    }
         
    if(dispositivosAindaDisponiveis.length > 0) {
        document.getElementById("botao_seleciona_dispositivo").disabled = false;
    }
    dispositivosAindaDisponiveis.sort();
    console.log("SELECIONADOS: " + dispositivosSelecionados)
    console.log("DISPONÍVEIS: " + dispositivosAindaDisponiveis)
    console.log(dispositivosAindaDisponiveis.length)
}

