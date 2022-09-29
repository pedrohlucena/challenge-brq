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


//var dispositivosDisponiveis = ["Lâmpada", "TV", "Ar Condicionado", "Rádio", "Câmera"]

// TODO PASSAR DISPOSITIVOS DISPONÍVEIS PARA DENTRO DE UMA LISTA, REMOVER ITEMS CONFORME A LISTA É USADA
/*var botaoExcluirExiste = false;
var excluiUltimoDispositivo = function(){
    console.log(document.getElementById("selecao_dispositivos").childNodes);
    document.getElementById("dispositivo" + contagemDispositivos--).remove();
    document.getElementById("botao_exclui_dispositivo" + contagemDispositivos--).remove();
    botaoExcluirExiste = false;
}
*/
//var contagemDispositivos = 0;
//CRIA MAIS CAMPOS PARA SELECIONAR DISPOSITIVO NO FORMULÁRIO DE CRIAR ROTINA
var adicionarDispositivo = function(){
    /*if (!botaoExcluirExiste){
        var novoBotaoExcluir = `<button onclick="excluiUltimoDispositivo()" id="botao_exclui_dispositivo" type="delete" class="btn btn-sm btn-danger mb-2">+</button>
        <label for="botao_exclui_dispositivo">Excluir dispositivo</label>`;
        document.getElementById('botoes').insertAdjacentHTML('afterend', novoBotaoExcluir)
        botaoExcluirExiste = true;
    } 
    var dispositivosAindaDisponiveis = "";
    for(var d = 0; d < dispositivosDisponiveis.length; d++){
        dispositivosAindaDisponiveis.concat("<option>" + dispositivosDisponiveis[d] + "</option>")
    }*/

    var dispositivoNovo = `<div class="row">                
                                <div class="form-group col-md-10 offset-md-1">
                                    <label for="dispositivo">Dispositivos Disponíveis:</label>
                                    <select class="form-control">
                                    <option>Lâmpada</option>     
                                    <option>TV</option>
                                    <option>Ar Condicionado</option>
                                    <option>Radio</option>
                                    <option>Camera </option>
                                    </select>
                                </div>
                                <div class="form-group col-md-10 offset-md-1 mb-4">
                                    <label for="acao">Selecione uma ação para o dispositivo escolhido:</label>
                                    <select class="form-control" >
                                    <option>Ligar</option>     
                                    <option>Desligar</option>
                                    </select>
                                </div>      
                            </div> `;
    //contagemDispositivos++;
    document.getElementById('selecao_dispositivos').insertAdjacentHTML('beforeend', dispositivoNovo);
}
