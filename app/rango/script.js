const botao = document.querySelectorAll('.price strong');
const modal = document.querySelector('dialog');
const fechar = document.querySelector('dialog button');

botao.forEach((item) => {
    item.addEventListener('click', () => {
        modal.querySelector('div.modal').innerHTML = `
            <p>${item.parentElement.parentElement.querySelector('p').getAttribute('data-text')}</p>
        `;

        // Abrindo modal
        modal.showModal();
    });
});

fechar.addEventListener('click', () => {
    modal.close();
});