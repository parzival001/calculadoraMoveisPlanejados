
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
    const largura = Number(frm.largura.value)
    const altura = Number(frm.altura.value)
    const profundidade = Number(frm.profundidade.value)
    const qtdPortas = Number(frm.qtdPortas.value)
    const modulus = Number(frm.modulos.value)
    const prazo = Number(frm.prazo.value)
    const prateleiras = Number(frm.prateleiras.value)
    const gavetas = Number(frm.gavetas.value)

    //SAÍDA DEMONSTRATIVOS
    // resp01.innerText = `Largura Total: ${largura}m`
    // resp02.innerText = `Altura Total: ${altura}m`
    // resp03.innerText = `Profundidade Total: ${profundidade}m`
    // resp04.innerText = `Portas (qtd): ${qtdPortas}`
    // resp05.innerText = `Modulos (qtd): ${modulus}`
    // resp06.innerText = `Prateleiras (qtd): ${prateleiras}`
    // resp07.innerText = `Gavetas (qtd): ${gavetas}`
    // resp08.innerText = `Prazo: ${prazo} dias`

    const ml = largura + altura + profundidade
    const qtdAcessorios = gavetas + qtdPortas
    const precoMl = 10
    const precoAcessorios = 2

    //SAÍDAS ORÇAMENTO
    orca01.innerText = `${ml}ml`
    orca02.innerText = `${qtdAcessorios}un`
    orca04.innerText = `R$${(ml * precoMl) + (precoAcessorios * qtdAcessorios)}`
    orca06.innerText =`Preço por metro linear: R$${precoMl}`

    e.preventDefault()
})