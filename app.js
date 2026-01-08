
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

//const ambiente = document.querySelector('.ambiente01');


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
 


//const ambienteCom = document.querySelector('.ambiente02');

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



// MATERIAL/ESTILO

let materialSelecionado = "";
let estiloSelecionado = "";

// MATERIAL
document.querySelectorAll(".material").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".material").forEach(m => m.classList.remove("ativo"));
        item.classList.add("ativo");
        materialSelecionado = item.dataset.material;
        console.log("Material:", materialSelecionado);
    });
});

// ESTILO
document.querySelectorAll(".estilo").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".estilo").forEach(e => e.classList.remove("ativo"));
        item.classList.add("ativo");
        estiloSelecionado = item.dataset.estilo;
        console.log("Estilo:", estiloSelecionado);
    });
});



opcoes.forEach(opcao => {
    opcao.addEventListener('click', () => {
        opcoes.forEach(o => o.classList.remove('selecionado'));
        opcao.classList.add('selecionado');

        if (opcao.dataset.value === 'residencial') {
            body.classList.add('mostrarAmbiente');
            body.classList.add('mostrarMaterialEstilo'); // 👈 MOSTRA material/estilo
            body.classList.remove('mostrarAmbiente02');
        } else {
            body.classList.remove('mostrarAmbiente');
            body.classList.remove('mostrarMaterialEstilo'); // 👈 ESCONDE material/estilo
            body.classList.add('mostrarAmbiente02');
        }
    });
});




comodos.forEach(comodo => {
    const btnDiminuir = comodo.querySelector('.diminuir');
    const btnAumentar = comodo.querySelector('.aumentar');
    const valorSpan = comodo.querySelector('.qtd span:nth-child(2)');
    const tamanhosContainer = comodo.querySelector('.tamanhos');
    const template = comodo.querySelector('.tamanho.template');

    let quantidade = 0;

    function atualizarTamanhos() {
        tamanhosContainer.innerHTML = '';

        for (let i = 0; i < quantidade; i++) {
            const clone = template.cloneNode(true);
            clone.classList.remove('template');
            clone.style.display = 'block';

            tamanhosContainer.appendChild(clone);
        }
    }

    btnAumentar.addEventListener('click', e => {
        e.stopPropagation();
        quantidade++;
        valorSpan.textContent = quantidade;
        atualizarTamanhos();
    });

    btnDiminuir.addEventListener('click', e => {
        e.stopPropagation();
        if (quantidade > 0) {
            quantidade--;
            valorSpan.textContent = quantidade;
            atualizarTamanhos();
        }
    });
});
