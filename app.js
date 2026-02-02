
//IMPORTANDO O VALOR DO FORMULÁRIO

const frm = document.querySelector("form")
const larg = document.querySelector("#largura")
const altu = document.querySelector("#altura")
const profun = document.querySelector("#profundidade")
const qtdPortas = document.querySelector("#qtdPortas")
const mod = document.querySelector("#modulus")
const prazo = document.querySelector("#prazo")
const prat = document.querySelector("#prateleiras")
const gav = document.querySelector("#gavetas")


//IMPORTANDO AS SAÍDAS DO DEMONSTRATVOS

const resp01 = document.querySelector("#outDLargura")
const resp02 = document.querySelector("#outDAltura")
const resp03 = document.querySelector("#outDProfundidade")
const resp04 = document.querySelector("#outDPortas")
const resp05 = document.querySelector("#outDModulos")
const resp06 = document.querySelector("#outDPrateleiras")
const resp07 = document.querySelector("#outDGavetas")
const resp08 = document.querySelector("#outDPrazo")


//IMPORTANDO A SAÍDA DO ORÇAMENTO

const orca01 = document.querySelector("#metro")
const orca02 = document.querySelector("#acessorios")
const orca03 = document.querySelector("#total")
const orca04 = document.querySelector("#valorTotal")
const orca05 = document.querySelector("#totalEstimado")
const orca06 = document.querySelector("#precoPorMetro")


//CALCULAR 


frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const largura = Number(frm.largura.value)
    const altura = Number(frm.altura.value)
    const profundidade = Number(frm.profundidade.value)
    const qtdPortas = Number(frm.qtdPortas.value)
    const modulos = Number(frm.modulos.value)
    const prazo = Number(frm.prazo.value)
    const prateleiras = Number(frm.prateleiras.value)
    const gavetas = Number(frm.gavetas.value)
    const material = frm.material.value
    const estilo = frm.estilo.value
    const ml = largura + altura + profundidade
    const qtdAcessorios = gavetas + qtdPortas
    const precoMl = 10
    const puxador = frm.puxadores.checked
    const instalacao = frm.instalacao.checked

   

    let qtdPuxador 
    if (puxador){
    qtdPuxador = 10 * qtdAcessorios 
    }else{
        qtdPuxador = 0
    }

    let valorInstalacao
    if (instalacao){
        valorInstalacao = 600
    }else {
        valorInstalacao = 0
    }

    console.log(qtdPuxador)
    //Estilo
    let valorEstilo
    switch(estilo){
        case "rustico":
        valorEstilo = 50
        break
        case "minimalista":
        valorEstilo = 60
        break
        case "tradicional": 
        valorEstilo = 80
        break
    }
    //Material
    let valorMaterial
    switch(material){
        case "MDF":
        valorMaterial = 100
        break
        case "Carvalho":
        valorMaterial = 110
        break
        case "MDP": 
        valorMaterial = 120
        break
    }


    //SAÍDAS ORÇAMENTO
    orca01.innerText = `${ml}ml`
    orca02.innerText = `R$${qtdAcessorios * 10}`
    orca04.innerText = `R$${(ml * precoMl) + (modulos * 200) + (valorEstilo) + (valorMaterial) + (qtdPuxador) + (valorInstalacao)}`
    orca06.innerText =`Preço por metro linear: R$${precoMl}`

    



})