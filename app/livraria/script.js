const filename = 'books.json';
const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const book = {
        titulo: data.get('titulo'),
        autor: data.get('autor'),
        ano: data.get('ano'),
        editora: data.get('editora'),
        isbn: data.get('isbn'),
        paginas: data.get('paginas'),
        categoria: data.get('categoria'),
        usado: data.get('situacao'),
        idioma: data.getAll('idioma'),
        resumo: data.get('resumo'),
        capa: data.get('capa')
    }

    // export json to file
    exportToJsonFile(book);
    form.reset();
    alert('Livro cadastrado com sucesso!');
    
});

const exportToJsonFile = (jsonData) => {
    let dataStr = JSON.stringify(jsonData, null, 2);
    let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', filename);
    linkElement.click();
}

// // populate form data with json
// const populateForm = (json) => {
//     const book = JSON.parse(json);
//     document.querySelector('#titulo').value = book.titulo;
//     document.querySelector('#autor').value = book.autor;
//     document.querySelector('#ano').value = book.ano;
    
//     book.idioma.forEach(f => {
//         document.querySelector(`input[value="${f}"]`).checked = true;
//     });
    
//     document.querySelector('#editora').value = book.editora;
//     document.querySelector('#isbn').value = book.isbn;
//     document.querySelector('#paginas').value = book.paginas;
//     document.querySelector('#categoria').value = book.categoria;
//     document.querySelector('#usado').checked = book.situacao === 'Usado';
//     document.querySelector('#resumo').value = book.resumo;
//     // document.querySelector('#capa').value = book.capa;
// }

// document.addEventListener('DOMContentLoaded', () => {
    
//     try {
//         const initialValue = '{"titulo":"Livro 1","autor":"Autor 1","ano":"2019","editora":"Editora 1","isbn":"123-4567891234","paginas":"100","categoria":"Aventura","situacao":"Usado","idioma":["Português", "Espanhol"],"resumo":"Resumo do livro 1"}';
//         populateForm(initialValue);
//     } catch (error) {
//         console.error(error);
//         alert('Erro ao carregar o arquivo');
//     }
    

// });