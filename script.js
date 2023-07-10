import { Jogador } from "./modelJogador.js"
import { Salvar, Pesquisar, Pontuação, Vencedor} from "./controllerJogador.js"

let nomeJogadorUm = ""
let nomeJogadorDois = ""
let verificacao = ""
let vencedor = ""

let jogadas = []
for (let i = 0; i < 3; i++){
    jogadas[i] = []
}

let botoes = document.getElementsByTagName("button")
for(let botao of botoes){
    botao.addEventListener("click", Set)
}

let buttons = document.getElementsByClassName("botoes-jogo")
for (let button of buttons){
    button.addEventListener("click", Jogar)
}

document.querySelector("#botao-trocar").addEventListener("click", Trocar)
document.querySelector("#botao-voltar").addEventListener("click", Voltar)

function Set(){
    let botao = this.id
    let jogador = new Jogador()
    let nomeJogador
    switch(botao){
        case "jogador-1-botao-salvar":
            nomeJogadorUm = document.querySelector("#jogador-1-nome").value 
            jogador.nome = nomeJogadorUm
            jogador.pontos = 0
            Salvar(jogador)
            this.remove()
            document.querySelector("#jogador-1-botao-buscar").remove()
            document.querySelector("#jogador-1-botoes").innerHTML = "<button id='jogador-1-botao-voltar'>VOLTAR</button>"
            break
        case "jogador-2-botao-salvar":
            nomeJogadorDois = document.querySelector("#jogador-2-nome").value
            jogador.nome = nomeJogadorDois
            jogador.pontos = 0
            Salvar(jogador)
            this.remove()
            document.querySelector("#jogador-2-botao-buscar").remove()
            document.querySelector("#jogador-2-botoes").innerHTML = "<button id='jogador-2-botao-voltar'>VOLTAR</button>"
            break
        case "jogador-1-botao-buscar":
            nomeJogador = document.querySelector("#jogador-1-nome").value
            if(Pesquisar(nomeJogador) == null){
                alert("Jogador Não Encontrado!")
            } else {
                this.remove()
                document.querySelector("#jogador-1-botao-salvar").remove()
                document.querySelector("#jogador-1-botoes").innerHTML = "<button id='jogador-1-botao-voltar'>VOLTAR</button>"
            }
            document.querySelector("#jogador-1-nome").value = Pesquisar(nomeJogador)
            nomeJogadorUm = document.querySelector("#jogador-1-nome").value 
            break
        case "jogador-2-botao-buscar":
            nomeJogador = document.querySelector("#jogador-2-nome").value
            if(Pesquisar(nomeJogador) == null){
                alert("Jogador Não Encontrado!")
            } else {
                this.remove()
                document.querySelector("#jogador-2-botao-salvar").remove()
                document.querySelector("#jogador-2-botoes").innerHTML = "<button id='jogador-2-botao-voltar'>VOLTAR</button>"
            }
            document.querySelector("#jogador-2-nome").value = Pesquisar(nomeJogador)
            nomeJogadorDois = document.querySelector("#jogador-2-nome").value 
            break
        case "jogador-1-botao-voltar":
            this.remove()
            document.querySelector("#jogador-1-botoes").innerHTML = "<button id='jogador-1-botao-salvar'>SALVAR</button><button id='jogador-1-botao-buscar'>BUSCAR</button>"
            break
        case "jogador-2-botao-voltar":
            this.remove()
            document.querySelector("#jogador-2-botoes").innerHTML = "<button id='jogador-2-botao-salvar'>SALVAR</button><button id='jogador-2-botao-buscar'>BUSCAR</button>"
            break
        }
    for(let botao of botoes){
        botao.addEventListener("click", Set)
    }
    if (nomeJogadorUm != "" && nomeJogadorDois != ""){
        document.querySelector("#jogador-1-botao-voltar").remove()
        document.querySelector("#jogador-1-botoes").innerHTML = "<button id='jogador-1-botao-salvar'>SALVAR</button><button id='jogador-1-botao-buscar'>BUSCAR</button>"
        document.querySelector("#jogador-2-botao-voltar").remove()
        document.querySelector("#jogador-2-botoes").innerHTML = "<button id='jogador-2-botao-salvar'>SALVAR</button><button id='jogador-2-botao-buscar'>BUSCAR</button>"
        document.querySelector("#login").style.zIndex = -1
        document.querySelector("#login").style.opacity = 0
        document.querySelector("#nome-jogador").innerText = nomeJogadorUm
        document.querySelector("#pontos-jogador").innerText = Pontuação(nomeJogadorUm)
    }
}

function Jogar(){
    let posicao = this.value
    let jogador = document.querySelector("body").id
    switch (jogador){
        case "turno-jogador-1":
            posicao = posicao.split("-")
            if (jogadas[parseInt(posicao[0])][parseInt(posicao[1])] == null){
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
                } else{
                    document.querySelector("body").id = "turno-jogador-2"
                    document.querySelector("#nome-jogador").innerText = nomeJogadorDois
                    document.querySelector("#pontos-jogador").innerText = Pontuação(nomeJogadorDois)
                }
            }
            break
        case "turno-jogador-2":
            posicao = posicao.split("-")
            if (jogadas[parseInt(posicao[0])][parseInt(posicao[1])] == null){
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
                        document.querySelector("#tela-vitoria").style.zIndex = 1
                        document.querySelector("#tela-vitoria").style.opacity = 1
                        document.querySelector("#vencedor").innerText = nomeJogadorUm + " Venceu!"
                    }
                } else{
                    document.querySelector("body").id = "turno-jogador-1"
                    document.querySelector("#nome-jogador").innerText = nomeJogadorUm
                    document.querySelector("#pontos-jogador").innerText = Pontuação(nomeJogadorUm)
                }
            }
            break
    }
}

function Trocar(){
    alert()
    document.querySelector("#login").style.zIndex = 1
    document.querySelector("#login").style.opacity = 1
    document.querySelector("#tela-vitoria").style.zIndex = -1
    document.querySelector("#tela-vitoria").style.opacity = 0
}

function Voltar(){
    document.querySelector("#tela-vitoria").style.zIndex = -1
    document.querySelector("#tela-vitoria").style.opacity = 0
}