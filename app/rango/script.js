const botao = document.querySelectorAll('.price strong');
const modal = document.querySelector('dialog');
const fechar = document.querySelector('dialog button');

botao.forEach((item) => {
    item.addEventListener('click', () => {
        modal.innerHTML = `
            <div class="modal">
                <h2>Detalhes da Receita</h2>
                <p>${item.parentElement.parentElement.querySelector('p').getAttribute('data-text')}</p>
                <button>Fechar</button>
            </div>
        `;
        modal.showModal();
    });
});

fechar.addEventListener('click', () => {
    modal.close();
});