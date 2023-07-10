import { Jogador } from "./modelJogador.js"

let jogadores = []
let pos = 0

export function Salvar(nomeJogador, pontosJogador){
    for(let i = 0; i < pos; i++){
        if (jogadores[i].nome == nomeJogador){
            return false
        }
    }
    let jogador = new Jogador()
    jogador.nome = nomeJogador
    jogador.pontos = pontosJogador
    jogadores[pos] = jogador
    pos++
    console.log(jogadores)
    return true
}

export function Pesquisar(nome){
    let contador = 0
    let encontrado = false
    while(contador < jogadores.length && encontrado == false){
        if(jogadores[contador].nome == nome){
            encontrado=true
            return jogadores[contador].nome
        }
        contador++
    }
    if(encontrado==false){
        return null
    }
}

export function Pontuacao(nomeJogador){
    for(let i = 0; i < jogadores.length; i++){
        if(jogadores[i].nome == nomeJogador){
            return jogadores[i].pontos
        }
    }
}

export function Vencedor(nomeJogador){
    for(let i = 0; i < jogadores.length; i++){
        if(jogadores[i].nome == nomeJogador){
            jogadores[i].pontos = 1 + parseInt(jogadores[i].pontos) 
        }
    }
}