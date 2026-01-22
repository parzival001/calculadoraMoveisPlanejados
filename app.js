
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
    const largura = frm.largura.value
    const altura = frm.altura.value
    const profundidade = frm.profundidade.value
    const qtdPortas = frm.qtdPortas.value
    const modulus = frm.modulos.value
    const prazo = frm.prazo.value
    const prateleiras = frm.prateleiras.value
    const gavetas = frm.gavetas.value

    //SAÍDA DEMONSTRATIVOS
    resp01.innerText = `Largura Total: ${largura}m`
    resp02.innerText = `Altura Total: ${altura}m`
    resp03.innerText = `Profundidade Total: ${profundidade}m`
    resp04.innerText = `Portas (qtd): ${qtdPortas}`
    resp05.innerText = `Modulos (qtd): ${modulus}`
    resp06.innerText = `Prateleiras (qtd): ${prateleiras}`
    resp07.innerText = `Gavetas (qtd): ${gavetas}`
    resp08.innerText = `Prazo: ${prazo} dias`



    e.preventDefault()
})