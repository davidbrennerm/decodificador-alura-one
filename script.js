const textArea = document.querySelector(".msgTextarea");
const mensagem = document.querySelector(".mgs-resultado");



//As "chaves" de criptografia que utilizarmos são:
//'A letra "e" é convertida para "enter"'
//'A letra "i" é convertida para "imes"'
//'A letra "a" é convertida para "ai"'
//'A letra "o" é convertida para "obter"'
//'A letra "u" é convertida para "ufat"'

function copy(){
    let copiarTexto = document.getElementById('copy').innerHTML = '<button id="btn-copiar" class="btn btn-copiar" onclick="copy()">Copiar</button>';
    navigator.clipboard.writeText(mensagem.value);
    mensagem.select();
    mensagem.setSelectionRange(0,999999); //Mobile
//  alert("Texto copiado para área de transferência.");
}

// function refresh(){
//    let copiarTexto = document.getElementById('refresh').innerHTML = '<button id="refresh" class="btn btn-refresh" onclick="refresh()">Refresh</button>';
//    window.location.reload(true); recarregar pagina 
// }

function esconderImagem() {
    let elementoImagem = document.getElementById("msg-NaoEncontrada");
    elementoImagem.style.display = "none";
}

function esconderTextResposta() {
    let textAreaResposta = document.getElementById("mgs-resultado");
    textAreaResposta.style.display = "none";

    setTimeout(function() {
        textAreaResposta.style.display = "inline";
    }, 2000);
}

function mensagemNaoEncontrada(){

    const mensagemElemento = document.querySelector(".mensagem");
    const teste = "Nenhuma mensagem encontrada";
    mensagemElemento.innerText = teste;

    setTimeout(function(){
        mensagemElemento.innerText = "";
    }, 2000)

}


function botaoEncriptar(){
    if(textArea.value.length == false){
        mensagemNaoEncontrada();
        esconderTextResposta();

    } else {
        const textoEncriptado = encriptar(textArea.value);
        mensagem.value = textoEncriptado;
        esconderImagem();
        copy();
    }

    return
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o","obter"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
    
}

function botaoDesencriptar(){

    if(textArea.value.length == false){
        mensagemNaoEncontrada();
        esconderTextResposta();
    } else {
        const textoDesencriptado = desencriptar(textArea.value);
        mensagem.value = textoDesencriptado;
        esconderImagem();
        copy();
    }
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o","obter"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    
    return stringDesencriptada;

}

