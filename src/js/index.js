const botoescarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoescarrosel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        botao.classList.add('selecionado');

        const ImagemAtiva = document.querySelector('.ativa');
        ImagemAtiva.classList.remove('ativa');

        imagens[indice].classList.add('ativa');
    })
})

