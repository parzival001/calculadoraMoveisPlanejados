
//Aba Orçamento

let iconOrcamento = document.querySelector('.iconCart');
let fecharOrcamento = document.querySelector('.fechar')
let body = document.querySelector('body');


iconOrcamento.addEventListener('click', () => {
    body.classList.toggle('mostrarOrcamento')
})

fecharOrcamento.addEventListener('click', () => {
    body.classList.toggle('mostrarOrcamento')
})


//Residencial ou Comercial 

const opcoes = document.querySelectorAll('.opcao');

opcoes.forEach(opcao => {
    opcao.addEventListener('click', () => {

        // remove seleção de todas
        opcoes.forEach(o => o.classList.remove('selecionado'));

        // adiciona apenas na clicada
        opcao.classList.add('selecionado');

        // pega o valor
        const valor = opcao.dataset.value;
        console.log('Selecionado:', valor);
    });
});


//Ambiente

const ambiente = document.querySelector('.ambiente01');


opcoes.forEach(opcao => {
    opcao.addEventListener('click', () => {
        opcoes.forEach(o => o.classList.remove('selecionado'));
        opcao.classList.add('selecionado');

        if (opcao.dataset.value === 'residencial') {
            body.classList.add('mostrarAmbiente');
        } else {
            body.classList.remove('mostrarAmbiente');
        }
    });
});
 


const ambienteCom = document.querySelector('.ambiente02');

opcoes.forEach(opcao => {
    opcao.addEventListener('click', () => {
        opcoes.forEach(o => o.classList.remove('selecionado'));
        opcao.classList.add('selecionado');

        if (opcao.dataset.value === 'comercial') {
            body.classList.add('mostrarAmbiente02');
        } else {
            body.classList.remove('mostrarAmbiente02');
        }
    });
});



const comodos = document.querySelectorAll('.comodos');

comodos.forEach(comodo => {
    const btnDiminuir = comodo.querySelector('.diminuir');
    const btnAumentar = comodo.querySelector('.aumentar');
    const valorSpan = comodo.querySelector('.qtd span:nth-child(2)');

    let quantidade = 1;

    btnAumentar.addEventListener('click', (e) => {
        e.stopPropagation(); // evita conflito com clique no comodo
        quantidade++;
        valorSpan.textContent = quantidade;
    });

    btnDiminuir.addEventListener('click', (e) => {
        e.stopPropagation();

        if (quantidade > 1) {
            quantidade--;
            valorSpan.textContent = quantidade;
        }
    });
});
