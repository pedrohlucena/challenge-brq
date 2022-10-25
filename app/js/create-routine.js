let dispositivosAindaDisponiveis = [ "Ar condicionado LG Dual Inverter Compact", 
"Câmera Externa Smart Intelbras iM5 SC", "Caixa de Som Bluetooth JBL Boombox" , 
"Lâmpada LED Philips Amarela 4.5W - Quarto 1", "Lâmpada LED Philips Branca 4.5W - Quarto 2", "Lâmpada Eletrônica Ourolux 15W - Cozinha",
'Smart TV LED PRO 43" Full HD LG 43LM631C0SB', "Smart Speaker Amazon Echo Dot 3ª Geração com Alexa"];let dispositivosSelecionados = [];
let existeBotaoExcluir = false;
let numeroCamposDispositivos = 0;

let abreNovoCampoAcao = function(){
    let camposAcao = document.getElementById("campos_de_acao");
    let campoVisivel = camposAcao.lastElementChild; 
        while (campoVisivel) {
            camposAcao.removeChild(campoVisivel);
            campoVisivel = camposAcao.lastElementChild;
        }
    let acionamento = document.getElementById('tipo-acionamento').value;    
        if (acionamento == 'horario'){
            document.getElementById('campos_de_acao').innerHTML = `<div class="form-group col-md-10 offset-md-1 mb-4">
            <div class="row">
                <div class="form-group col-md-8 mb-2">
                    <label for="certo_horario">⏰ Informe o horário de disparo da rotina:</label>
                    <input type="datetime-local" class="form-control" id="certo_horario" placeholder="" onblur="habilitarBotaoCriarRotina()">
                </div>
                <div class="form-group col-md-4">
                    <label for="frequencia_acionamento">🔁 Frequência</label>
                    <select class="form-control" id="frequencia_acionamento" onblur="habilitarBotaoCriarRotina()">
                        <option value="">Apenas uma vez</option>     
                        <option value="">Diariamente</option>
                        <option value="">Apenas dias úteis</option>
                        <option value="">Próximos 3 dias</option>
                        <option value="">A cada 7 dias</option>
                        <option value="">Personalizar... </option>
                    </select>
                </div>
            </div>
        </div>`
        } else if(acionamento == 'distancia'){
            document.getElementById('campos_de_acao').innerHTML = `<div class="form-group col-md-10 offset-md-1 mb-4">
            <label for="certa_distancia">🛣️ Defina a que distância de sua casa a rotina deve ser acionada (em metros):</label>
            <input type="number" class="form-control" id="certa_distancia" placeholder="50" onblur="habilitarBotaoCriarRotina()">
        </div>`
        } else if(acionamento == 'minutos'){
            document.getElementById('campos_de_acao').innerHTML = `<div class="form-group col-md-10 offset-md-1 mb-4">
            <label for="certos_minutos">⏱️ Defina a quanto tempo de sua casa a rotina deve ser acionada (em minutos)</label>
            <input type="number" class="form-control" id="certos_minutos" placeholder="2" onblur="habilitarBotaoCriarRotina()">
        </div>`
    } ;
} 

let criaBotaoExcluir = function(){ 
    document.getElementById('botao_excluir').innerHTML = `<button onclick="excluiUltimoDispositivo()" id="botao_exclui_dispositivo" type="delete" class="offset-sm-1 btn btn-sm btn-danger mb-2">×</button>
    <label for="botao_exclui_dispositivo" id="label_botao_excluir">Excluir dispositivo</label>`;        
    existeBotaoExcluir = true;    
} 

let criaHTMLCamposDispositivos = function(){ // cria HTML para campos de dispositivos com a lista de dispositivosSelecionados
    let dispositivosHTML = "";
    dispositivosAindaDisponiveis.forEach((d, index) => dispositivosHTML += `<option value="${index}">${d}</option>`);
    let linhaHTML = `<div class="row" id="linha_dispositivo${numeroCamposDispositivos}">                
                                    <div class="form-group col-md-5 offset-md-1">
                                        <label for="dispositivo"> 
                                            ${dispositivosAindaDisponiveis.length} Dispositivos Disponíveis:
                                        </label>
                                        <select class="form-control" id="dispositivo${dispositivosSelecionados.length}" onblur="habilitarBotaoCriarRotina()">
                                            ${dispositivosHTML} 
                                        </select>
                                    </div>
                                    <div class="form-group col-md-5 mb-4">
                                        <label for="acao">🔧Selecione uma ação:</label>
                                        <select class="form-control" onblur="habilitarBotaoCriarRotina()">
                                        <option>Ligar</option>     
                                        <option>Desligar</option>
                                        </select>
                                    </div> 
                                </div>`;
    return linhaHTML;
} 

let acrescentaCamposDispositivos = function(){ // monta HTML com todas as opções de dispositivos
    numeroCamposDispositivos++;
    let campos = criaHTMLCamposDispositivos();
    document.getElementById('selecao_dispositivos').insertAdjacentHTML('beforeend', campos);    
} 
acrescentaCamposDispositivos(); // já inicia a página com os campos para selecionar 1 dispositivo

let adicionarDispositivo = function(){
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

let efetivarEscolha = function(){   
    let indiceDispositivo = parseInt(document.getElementById(`dispositivo${numeroCamposDispositivos - 1}`).value); 
    let dispositivo = dispositivosAindaDisponiveis[indiceDispositivo];
    dispositivosSelecionados.push(dispositivo);
    dispositivosAindaDisponiveis.splice(indiceDispositivo, 1);
}


let excluiUltimoDispositivo = function(){
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

function habilitarBotaoCriarRotina() {
    const criarRotinaBotao = document.getElementById("botao-criar-rotina");

    const nomeRotinaInput = document.getElementById("nome-rotina");
    const horarioDisparoRotinaInput = document.getElementById("certo_horario");
    const distanciaDisparoRotinaInput = document.getElementById("certa_distancia");
    const minutosCasaDisparoRotinaInput = document.getElementById("certos_minutos");
    
    let condicoesSatisfeitas = true

    if(nomeRotinaInput.value.length === 0) {
        condicoesSatisfeitas = condicoesSatisfeitas && false
    }

    if(horarioDisparoRotinaInput && horarioDisparoRotinaInput.value.length === 0) {
        condicoesSatisfeitas = condicoesSatisfeitas && false
    }

    if(distanciaDisparoRotinaInput && 5 > +(distanciaDisparoRotinaInput.value)) {
        condicoesSatisfeitas = condicoesSatisfeitas && false
    }

    if(minutosCasaDisparoRotinaInput) {
        const minutosParaDisparoRotina = parseInt(minutosCasaDisparoRotinaInput.value)
        
        if(isNaN(minutosParaDisparoRotina)) {
            condicoesSatisfeitas = condicoesSatisfeitas && false
        }
    
        if(1 > minutosParaDisparoRotina) {
            condicoesSatisfeitas = condicoesSatisfeitas && false
        }
    }

    if(condicoesSatisfeitas) {
        if(criarRotinaBotao.classList.contains('disabled')) {
            criarRotinaBotao.classList.replace('disabled', 'enabled')
        }
    } else {
        if(criarRotinaBotao.classList.contains('enabled')) {
            criarRotinaBotao.classList.replace('enabled', 'disabled')
        }
    }
}