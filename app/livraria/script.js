function adicionarLivroAoCarrinho(livro) {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push(livro);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  atualizarCarrinho();
}

function pegarLivros() {
  return JSON.parse(localStorage.getItem('carrinho')) || [];
}

function comprar() {
  localStorage.removeItem('carrinho');
  alert('Compra realizada com sucesso!');
}

function atualizarCarrinho() {
    const livros = pegarLivros();
    const span = document.querySelector('nav ul.right > li span');
    span.innerText = `${livros.length} itens`;
}

const botao = document.querySelectorAll('.card button');

botao.forEach((botao) => {
    botao.addEventListener('click', (event) => {
        const card = event.target.parentNode;
        const livro = {
            nome: card.querySelector('h2').innerText,
        };
        adicionarLivroAoCarrinho(livro);
    });
});

const modal = document.querySelector('dialog');
const botaoCarrinho = document.querySelector('nav ul.right > li');

botaoCarrinho.addEventListener('click', function() {
    const livros = pegarLivros();
    const lista = modal.querySelector('div.livros');
    lista.innerHTML = '';
    livros.forEach((livro) => {
        const item = document.createElement('div');
        item.innerText = livro.nome;

        item.addEventListener('click', () => {
            const index = livros.indexOf(livro);
            livros.splice(index, 1);
            localStorage.setItem('carrinho', JSON.stringify(livros));
            atualizarCarrinho();
            item.remove();
        });

        lista.appendChild(item);
    });
    modal.showModal();
});

atualizarCarrinho();

const botaoComprar = modal.querySelector('dialog button.fechar');

botaoComprar.addEventListener('click', () => {
    modal.close();
});