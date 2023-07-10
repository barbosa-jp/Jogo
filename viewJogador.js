import { Pesquisar, Pontuacao, Salvar, Vencedor } from "./controllerJogador.js";

let nomeJogadorUm;
let nomeJogadorDois;
let nomeJogador;
let confirmacao;
let vencedor = "";
let jgds = 0;

let botoes = document.getElementsByTagName("button");
for (let botao of botoes){
    botao.addEventListener("click", Set);
}

let jogadas = []
for (let i = 0; i < 3; i++){
    jogadas[i] = []
}

function Set(){
    switch(this.id){
        case "botao-salvar-jogador-1":
            nomeJogador = document.querySelector("#nome-jogador-1").value
            confirmacao = Salvar(nomeJogador, 0);
            if (confirmacao == false){
                window.alert("Jogador Já Cadastrado");
            } else if (nomeJogador == ""){
                window.alert("Preencha o Nickname")
            } else {
                this.remove();
                document.querySelector("#botao-buscar-jogador-1").remove();
                document.querySelector("#botoes-jogador-1").innerHTML = "<button id='botao-voltar-jogador-1'>VOLTAR</button>";
                document.querySelector("#botao-voltar-jogador-1").addEventListener("click", Set);
                nomeJogadorUm = nomeJogador;
            }
        break
        case "botao-buscar-jogador-1":
            nomeJogador = document.querySelector("#nome-jogador-1").value;
            if(Pesquisar(nomeJogador) == null){
                window.alert("Jogador Não Contratado");
            } else if (nomeJogador == nomeJogadorDois){
                window.alert("Jogador Já Selecionado");
            } else if (nomeJogador == ""){
                window.alert("Preencha o Nickname")
            } else {
                this.remove()
                document.querySelector("#botao-salvar-jogador-1").remove();
                document.querySelector("#botoes-jogador-1").innerHTML = "<button id='botao-voltar-jogador-1'>VOLTAR</button>";
                document.querySelector("#botao-voltar-jogador-1").addEventListener("click", Set);
                nomeJogadorUm = nomeJogador;
            }
        break
        case "botao-voltar-jogador-1":
            this.remove();
            document.querySelector("#botoes-jogador-1").innerHTML = "<button id='botao-salvar-jogador-1'>SALVAR</button><button id='botao-buscar-jogador-1'>BUSCAR</button>";
            document.querySelector("#botao-salvar-jogador-1").addEventListener("click", Set);
            document.querySelector("#botao-buscar-jogador-1").addEventListener("click", Set);
            nomeJogadorUm = null
        break
        case "botao-salvar-jogador-2":
            nomeJogador = document.querySelector("#nome-jogador-2").value
            confirmacao = Salvar(nomeJogador, 0);
            if (confirmacao == false){
                window.alert("Jogador Já Cadastrado");
            } else if (nomeJogador == ""){
                window.alert("Preencha o Nickname")
            } else {
                this.remove();
                document.querySelector("#botao-buscar-jogador-2").remove();
                document.querySelector("#botoes-jogador-2").innerHTML = "<button id='botao-voltar-jogador-2'>VOLTAR</button>";
                document.querySelector("#botao-voltar-jogador-2").addEventListener("click", Set);
                nomeJogadorDois = nomeJogador;
            }
        break
        case "botao-buscar-jogador-2":
            nomeJogador = document.querySelector("#nome-jogador-2").value;
            if(Pesquisar(nomeJogador) == null){
                window.alert("Jogador Não Contratado");
            } else if (nomeJogador == nomeJogadorUm){
                window.alert("Jogador Já Selecionado")
            } else if (nomeJogador == ""){
                window.alert("Preencha o Nickname")
            } else {
                this.remove()
                document.querySelector("#botao-salvar-jogador-2").remove();
                document.querySelector("#botoes-jogador-2").innerHTML = "<button id='botao-voltar-jogador-2'>VOLTAR</button>";
                document.querySelector("#botao-voltar-jogador-2").addEventListener("click", Set);
                nomeJogadorDois = nomeJogador;
            }
        break
        case "botao-voltar-jogador-2":
            this.remove();
            document.querySelector("#botoes-jogador-2").innerHTML = "<button id='botao-salvar-jogador-2'>SALVAR</button><button id='botao-buscar-jogador-2'>BUSCAR</button>";
            document.querySelector("#botao-salvar-jogador-2").addEventListener("click", Set);
            document.querySelector("#botao-buscar-jogador-2").addEventListener("click", Set);
            nomeJogadorDois = null
        break
    }
    if(nomeJogadorUm != null && nomeJogadorDois != null){
        document.querySelector("#tela-login").style.opacity = 0
        document.querySelector("#tela-login").style.zIndex = -2
        document.querySelector("#nome-jogador").innerText = nomeJogadorUm + " (X)"
        document.querySelector("#pontos-jogador").innerText = Pontuacao(nomeJogadorUm)
        botoes = document.getElementsByTagName("button");
        for (let botao of botoes){
            botao.addEventListener("click", Jogar);
        }
    }
}

function Jogar(){
    let posicao = this.value
    let jogador = document.querySelector("body").id
    let verificacao;
    switch (jogador){
        case "turno-jogador-1":
            posicao = posicao.split("-")
            if (jogadas[parseInt(posicao[0])][parseInt(posicao[1])] == null){
                jgds++
                jogadas[parseInt(posicao[0])][parseInt(posicao[1])] = "X"
                this.innerHTML = "X"
                verificacao = "X"
                for(let i = 0; i < 3; i++){
                    for(let j = 0; j < 3; j++){
                        if(verificacao == jogadas[i][j]){
                            verificacao = "X"
                        } else {
                            verificacao = ""
                        }
                    }
                    if (verificacao == "X"){
                        vencedor = "X"
                    }
                    verificacao = "X"
                }
                for(let i = 0; i < 3; i++){
                    for(let j = 0; j < 3; j++){
                        if(verificacao == jogadas[j][i]){
                            verificacao = "X"
                        } else {
                            verificacao = ""
                        }
                    }
                    if (verificacao == "X"){
                        vencedor = "X"
                    }
                    verificacao = "X"
                }
                for(let i = 0; i < 2; i++){
                    switch (i){
                        case 0:
                            for(let j = 0; j < 3; j++){
                                if(verificacao == jogadas[j][j]){
                                    verificacao = "X"
                                } else {
                                    verificacao = ""
                                }
                            }
                            if (verificacao == "X"){
                                vencedor = "X"
                            }
                            verificacao = "X"
                            break
                        case 1:
                            for(let j = 0; j < 3; j++){
                                if(verificacao == jogadas[2-j][j]){
                                    verificacao = "X"
                                } else {
                                    verificacao = ""
                                }
                            }
                            if (verificacao == "X"){
                                vencedor = "X"
                            }
                            verificacao = "X"
                            break                
                    }
                }
                if (vencedor == "X"){
                    Vencedor(nomeJogadorUm)
                    for(let botao of botoes){
                        botao.innerText = null
                    }
                    vencedor = ""
                    for (let i = 0; i < 3; i++){
                        for(let j = 0; j < 3; j++){
                            jogadas[i][j] = null 
                        }
                    }
                    document.querySelector("#tela-vitoria").style.zIndex = 1
                    document.querySelector("#tela-vitoria").style.opacity = 1
                    document.querySelector("#vencedor").innerText = nomeJogadorUm + " Venceu!"
                    for (let botao of botoes){
                        botao.addEventListener("click", Vitoria);
                    }        
                    document.querySelector("#botao-trocar").innerText = "TROCAR"
                    document.querySelector("#botao-voltar").innerText = "VOLTAR"
                    jgds = 0
                } else if (jgds < 9){
                    document.querySelector("body").id = "turno-jogador-2"
                    document.querySelector("#nome-jogador").innerText = nomeJogadorDois + " (O)"
                    document.querySelector("#pontos-jogador").innerText = Pontuacao(nomeJogadorDois)
                }
            }
            break
        case "turno-jogador-2":
            posicao = posicao.split("-")
            if (jogadas[parseInt(posicao[0])][parseInt(posicao[1])] == null){
                jgds++
                jogadas[parseInt(posicao[0])][parseInt(posicao[1])] = "O"
                this.innerHTML = "O"
                verificacao = "O"
                for(let i = 0; i < 3; i++){
                    for(let j = 0; j < 3; j++){
                        if(verificacao == jogadas[i][j]){
                            verificacao = "O"
                        } else {
                            verificacao = ""
                        }
                    }
                    if (verificacao == "O"){
                        vencedor = "O"
                    }
                    verificacao = "O"
                }
                for(let i = 0; i < 3; i++){
                    for(let j = 0; j < 3; j++){
                        if(verificacao == jogadas[j][i]){
                            verificacao = "O"
                        } else {
                            verificacao = ""
                        }
                    }
                    if (verificacao == "O"){
                        vencedor = "O"
                    }
                    verificacao = "O"
                }
                for(let i = 0; i < 2; i++){
                    switch (i){
                        case 0:
                            for(let j = 0; j < 3; j++){
                                if(verificacao == jogador[j][j]){
                                    verificacao = "O"
                                } else {
                                    verificacao = ""
                                }
                            }
                            if (verificacao == "O"){
                                vencedor = "O"
                            }
                            verificacao = "O"
                            break
                        case 1:
                            for(let j = 0; j < 3; j++){
                                if(verificacao == jogadas[2-j][j]){
                                    verificacao = "O"
                                } else {
                                    verificacao = ""
                                }
                            }
                            if (verificacao == "O"){
                                vencedor = "O"
                            }
                            verificacao = "O"
                            break                
                    }
                }
                if (vencedor == "O"){
                    Vencedor(nomeJogadorDois)
                    for(let botao of botoes){
                        botao.innerText = null
                    }
                    vencedor = ""
                    for (let i = 0; i < 3; i++){
                        for(let j = 0; j < 3; j++){
                            jogadas[i][j] = null 
                        }
                    }
                    document.querySelector("#tela-vitoria").style.zIndex = 1
                    document.querySelector("#tela-vitoria").style.opacity = 1
                    document.querySelector("#vencedor").innerText = nomeJogadorDois + " Venceu!"
                    for (let botao of botoes){
                        botao.addEventListener("click", Vitoria);
                    }        
                    document.querySelector("#botao-trocar").innerText = "TROCAR"
                    document.querySelector("#botao-voltar").innerText = "VOLTAR"
                    jgds = 0
                } else if (jgds < 9){
                    document.querySelector("body").id = "turno-jogador-1"
                    document.querySelector("#nome-jogador").innerText = nomeJogadorUm + " (X)"
                    document.querySelector("#pontos-jogador").innerText = Pontuacao(nomeJogadorUm)
                }
            }
        break
    }
    if (jgds == 9 && vencedor == ""){
        for(let botao of botoes){
            botao.innerText = null
        }
        vencedor = ""
        for (let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                jogadas[i][j] = null 
            }
        }
        document.querySelector("#tela-vitoria").style.zIndex = 1
        document.querySelector("#tela-vitoria").style.opacity = 1
        document.querySelector("#vencedor").innerText = "DEU VELHA!"
        for (let botao of botoes){
            botao.addEventListener("click", Vitoria);
            document.querySelector("#botao-trocar").innerText = "TROCAR"
            document.querySelector("#botao-voltar").innerText = "VOLTAR"                
        }    
        jgds = 0                    
    }
}

function Vitoria(){
    switch(this.id){
        case "botao-trocar":
            document.querySelector("#tela-login").style.zIndex = 2
            document.querySelector("#tela-login").style.opacity = 1
            document.querySelector("#tela-vitoria").style.zIndex = -1
            document.querySelector("#tela-vitoria").style.opacity = 0
            document.querySelector("#botao-voltar-jogador-1").innerText = "VOLTAR"
            document.querySelector("#botao-voltar-jogador-2").innerText = "VOLTAR"
            for (let botao of botoes){
                botao.addEventListener("click", Set);
            }
        break
        case "botao-voltar":
            document.querySelector("#tela-vitoria").style.zIndex = -1
            document.querySelector("#tela-vitoria").style.opacity = 0
            for (let botao of botoes){
                botao.addEventListener("click", Jogar);
            }
            document.querySelector("body").id = "turno-jogador-1"
        break
    }
}  