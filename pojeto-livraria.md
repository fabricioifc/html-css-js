# Projeto: Livraria
[&uarr;](#1-introdução-a-html)

Para começar, vamos criar um novo repositório no GitHub para armazenar nosso projeto e usar o Visual Studio Code para o desenvolvimento. Para isso, siga os passos abaixo:

### Plataforma GitHub (navegador web)
1. Faça login na plataforma GitHub. Caso não tenha uma conta, crie uma conta gratuitamente.
2. Crie um novo repositório chamado `livraria`. 
   1. Deixe o repositório público
   2. Marque a opção "Inicializar este repositório com um *README*". 
   3. Clique no botão "Criar repositório".

### Visual Studio Code
1. Abra o Visual Studio Code.
   1. Instale a extensão `GitHub CodeSpaces` no Visual Studio Code.
   2. Tecle `Ctrl + Shift + P` para abrir a paleta de comandos.
   3. Digite `Codespaces: Create New Codespace` e tecle `Enter`.
   4. Selecione o repositório `livraria` e tecle `Enter`.
2. Aguarde o Visual Studio Code criar o ambiente de desenvolvimento.
3. Pronto. Agora você está pronto para começar o projeto.

## Desenvolvendo o projeto

Vamos usar vários conhecimentos relacionados a HTML e CSS em um projeto prático. O projeto consiste em criar um site para uma livraria. O site deve ter um título, um menu, uma lista de livros e um rodapé. O menu deve ter os links "Início", "Livros", "Autores" e "Contato". A lista de livros deve ter pelo menos 3 livros. Cada livro deve ter um título, um autor, uma imagem e um botão para comprar. O rodapé deve ter o nome do autor e o ano de criação do site. 

Com o projeto `livraria` aberto no Visual Studio Code, faça:

   1. Crie um novo arquivo chamado `index.html`.
   2. Crie um novo arquivo chamado `estilos.css`.
   3. Crie uma nova pasta chamada `img`.
   4. Abra o projeto no navegador usando a ferramenta `live server`.

A estrutura de pastas e arquivos do projeto terá a seguinte estrutura:

```
livraria
├── img
|   ├── livro-01.jpg
|   ├── livro-02.jpg
|   └── livro-03.jpg
├── index.html
└── estilo.css
```
> 💡 Busque por 3 imagens de livros na internet e salve na pasta `img`.

O resultado esperado deve ser parecido com a imagem abaixo:

![livraria](./image/livraria_resultado.png)

Vamos começar a criar o site passo a passo. Primeiro, vamos criar o título e o menu. Para isso, siga os passos abaixo:

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Livraria</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <header>
        <h1>Livraria Fantástica</h1>
        <nav>
            <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Livros</a></li>
                <li><a href="#">Autores</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    </header>
</body>
</html>
```

O código acima começa com a declaração do documento HTML. Em seguida, temos a tag `<head>` com as metatags charset e viewport, o título do site e o link para o arquivo `estilos.css`. Na tag `<body>`, temos o cabeçalho com o título e o menu. O menu é uma lista não ordenada com os links "Início", "Livros", "Autores" e "Contato".

> 💡 A tag `header` é uma tag semântica. As tags semânticas são utilizadas para adicionar significado ao documento. Conheça mais sobre tags semânticas [clicando aqui](https://www.freecodecamp.org/portuguese/news/elementos-semanticos-do-html5-explicados/).

Agora, vamos adicionar o estilo ao nosso site. Para começar, vamos adicionar um reset de estilos. Para isso, siga os passos abaixo:

```css
/* estilos.css */

/* Reset de Estilos */
* {
    margin: 0; /* zerar a margem de todos os elementos */
    padding: 0; /* zerar o espaçamento interno de todos os elementos */
    box-sizing: border-box; /* incluir padding e borda no cálculo do tamanho do elemento */
}
```

O código CSS acima, começa com o reset de estilos com a propriedade `*` que seleciona todos os elementos HTML. O reset de estilos é utilizado para remover os estilos padrões do navegador. Assim, estamos zerando as margens e os espaçamentos dos elementos HTML. 

> 💡 Por padrão, o preenchimento e a borda não são incluídos no cálculo do tamanho do elemento. Isso significa que o tamanho do elemento será a soma do conteúdo e da margem. Para incluir o preenchimento e a borda no cálculo do tamanho do elemento, utilizamos a propriedade `box-sizing` com o valor `border-box`.

O próximo passo será adicionar uma cor de fundo e um tipo de fonte diferente. Faremos isso na tag `body` pois queremos que esses estilos sejam aplicados em todo o site. Para isso, siga os passos abaixo:

```css
/* estilos.css */

body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}
```

> 💡 Podemos adicionar uma fonte externa ao nosso site. Recomendo usar o Google Fonts para adicionar fontes externas ao seu site. Conheça mais sobre o Google Fonts [clicando aqui](https://fonts.google.com/). Veremos isso mais adiante.

Em seguida, vamos adicionar o estilo ao cabeçalho. Para isso, siga os passos abaixo:

```css
/* estilos.css */

header {
    background-color: #333; /* cor de fundo */
    color: #fff; /* cor do texto */
    text-align: center; /* alinhamento centralizado */
    padding-top: 20px; /* espaçamento interno superior */
    padding-bottom: 20px; /* espaçamento interno inferior */
    padding-left: 20px; /* espaçamento interno esquerdo */
    padding-right: 20px; /* espaçamento interno direito */
}

header h1 {
    margin-bottom: 10px; /* Define um espaçamento inferior */
}
```

No cabeçalho `header` adicionamos uma cor de fundo, uma cor de texto, um alinhamento centralizado e um espaçamento interno de 20px em todas as direções. Em seguida, adicionamos um espaçamento inferior de 10px no título `h1`.

Para simplificar, podemos usar a propriedade `padding` para adicionar um espaçamento interno de 20px em todas as direções. Para isso, faça a seguinte alteração no código acima:

```css
/* estilos.css */

header {
    background-color: #333;
    color: #fff;
    text-align: center;
    
    /* assim (cima, baixo, esquerda, direita) */
    /* padding: 20px 20px 20px 20px; */

    /* ou 20px em todas as direções */
    padding: 20px;
}
```

> 💡 Tanto `padding` quanto `margin` seguem a mesma lógica (cima, baixo, esquerda, direita).

Nosso cabeçalho está quase pronto. Falta apenas adicionar o estilo ao título e ao menu. Para isso, siga os passos abaixo:

```css
/* estilos.css */

nav ul {
    list-style: none; /* Remove o estilo da lista */
}

nav li {
    display: inline; /* Deixa os itens da lista em linha */
    margin: 0 10px; /* Adiciona um espaçamento de 10px entre os itens da lista */
}

nav a {
    text-decoration: none; /* Remove o sublinhado dos links */
    font-weight: bold; /* Deixa o texto em negrito */
    color: #fff; /* Cor do texto */
}
```

O código acima remove os marcadores da lista, deixa os itens da lista em linha, adiciona um espaçamento de 20px entre os itens da lista, remove o sublinhado dos links, deixa o texto em negrito e adiciona uma cor de texto branca.

Pronto, nosso cabeçalho está pronto. Agora, vamos alterar nosso arquivo `index.html` para adicionar a lista de livros. Para isso, siga os passos abaixo:

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Livraria</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <header>
        <h1>Livraria Fantástica</h1>
        <nav>
            <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Livros</a></li>
                <li><a href="#">Autores</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    </header>

    <!-- Conteúdo principal adicionado -->
    <main>
        <section class="cards">
            <div class="card">
                <img src="image/livraria/livro-01.jpg" alt="Livro 1">
                <h2>Livro Incrível</h2>
                <p>Autor: João Silva</p>
                <button>Comprar</button>
            </div>

            <div class="card">
                <img src="image/livraria/livro-02.jpg" alt="Livro 2">
                <h2>Livro Fantástico</h2>
                <p>Autor: Maria Santos</p>
                <button>Comprar</button>
            </div>

            <div class="card">
                <img src="image/livraria/livro-03.jpg" alt="Livro 3">
                <h2>Aventuras Mágicas</h2>
                <p>Autor: Pedro Almeida</p>
                <button>Comprar</button>
            </div>
        </section>
    </main>
</body>
</html>
```

> 💡 Repare que estamos usando mais duas tags semânticas: `main` e `section`. A tag `main` é utilizada para adicionar o conteúdo principal do site. A tag `section` é utilizada para adicionar uma seção do site. Conheça mais sobre tags semânticas [clicando aqui](https://www.freecodecamp.org/portuguese/news/elementos-semanticos-do-html5-explicados/).

O código acima adiciona uma seção com a classe `.cards` e três cartões com a classe `.card`. Cada cartão tem uma imagem, um título, um autor e um botão para comprar. Para isso, siga os passos abaixo:

```css
/* estilos.css */

main {
    overflow: hidden; /* esconde o conteúdo que ultrapassa o tamanho do elemento */
}
```

> 💡 A propriedade `overflow` com o valor `hidden` é utilizada para esconder o conteúdo que ultrapassa o tamanho do elemento. Isso é necessário porque vamos adicionar um estilo de coluna na classe `.card`.

Já que vamos dividir nossa tela em três colunas, vamos adicionar um estilo de coluna na classe `.card`. Cada `.card` terá uma largura calculada da seguinte forma: `33.33% - 20px`. Esse calculo foi feito para descontar a margem de 10px para cima e para baixo. Para isso, siga os passos abaixo:

```css
/* estilos.css */

.card {
    width: calc(33.33% - 20px); /* 33.33% - 20px */
    height: 500px; /* altura de 500px */
    margin: 10px; /* margem de 10px para cima e para baixo */
    padding: 10px; /* Define um espaçamento interno */
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    float: left; /* flutua o elemento para a esquerda */
}
```

No código acima, usamos vários conceitos diferentes.

- A largura (`width`) de cada card é calculada da seguinte forma. Primeiro, calculamos 33.33% da largura do elemento pai. Em seguida, subtraímos 20px para adicionar uma margem de 20px entre os cartões. O resultado é uma largura de 33.33% - 20px.
- Adicionamos uma altura de 500px.
- Adicionamos uma margem de 10px em cada card.
- Adicionamos um espaçamento interno de 10px em todas as direções.
- Adicionamos uma cor de fundo branca.
- Adicionamos uma sombra.
- Centralizamos o texto no card.
- Flutuamos o card para a esquerda. Isso é necessário para encaixar os cards em colunas.

> 💡 A propriedade `float` é utilizada para flutuar o elemento para a esquerda ou para a direita. Isso é necessário para flutuar um card ao lado do outro, já que cada card por padrão ocupa 100% da largura do elemento pai.

Por fim, vamos adicionar o estilo ao rodapé. Para isso, siga os passos abaixo:

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Livraria</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <header>
        <h1>Livraria Fantástica</h1>
        <nav>
            <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Livros</a></li>
                <li><a href="#">Autores</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    </header>

    <!-- Conteúdo principal adicionado -->
    <main>
        <section class="cards">
            <div class="card">
                <img src="image/livraria/livro-01.jpg" alt="Livro 1">
                <h2>Livro Incrível</h2>
                <p>Autor: João Silva</p>
                <button>Comprar</button>
            </div>

            <div class="card">
                <img src="image/livraria/livro-02.jpg" alt="Livro 2">
                <h2>Livro Fantástico</h2>
                <p>Autor: Maria Santos</p>
                <button>Comprar</button>
            </div>

            <div class="card">
                <img src="image/livraria/livro-03.jpg" alt="Livro 3">
                <h2>Aventuras Mágicas</h2>
                <p>Autor: Pedro Almeida</p>
                <button>Comprar</button>
            </div>
        </section>
    </main>

    <!-- Rodapé adicionado -->
    <footer>
        <p>&copy; 2023 Livraria Fantástica | Criado por Seu Nome</p>
    </footer>
</body>
</html>
```

```css
/* estilos.css */

footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem;
}
```

O código acima adiciona uma cor de fundo, uma cor de texto, um alinhamento centralizado e um espaçamento interno de 1rem em todas as direções.

> 💡 A propriedade `rem` é utilizada para definir o tamanho da fonte. O `rem` é relativo ao tamanho da fonte do elemento `html`. Por padrão, o tamanho da fonte do elemento `html` é `16px`. Isso significa que `1rem` é igual a `16px`. Se o tamanho da fonte do elemento `html` for `20px`, `1rem` será igual a `20px`.

### Design Responsivo

O design responsivo é uma abordagem ao web design que faz com que seu conteúdo web se adapte aos diferentes tamanhos de tela e janelas de uma variedade de dispositivos. Para aplicar o design responsivo, vamos usar a propriedade `@media`.

A propriedade `@media` em CSS é usada para aplicar estilos diferentes com base nas características do dispositivo ou da tela em que a página está sendo exibida. Isso é fundamental para criar designs responsivos que se adaptem a diferentes tamanhos de tela, como telas de dispositivos móveis, tablets e desktops. As media queries permitem que você ajuste o layout, as fontes, as imagens e outros elementos para proporcionar uma experiência de usuário otimizada em vários dispositivos.

Para aplicar o design responsivo na classe `.card`, siga os passos abaixo:

```css
/* estilos.css */

/* Design Responsivo */
@media screen and (max-width: 768px) {
    .card {
        width: calc(50% - 20px); /* 50% - 40px */
    }
}

@media screen and (max-width: 480px) {
    .card {
        width: 100%;
    }
}
```

O código acima adiciona duas propriedades `@media`. A primeira propriedade `@media` é utilizada para definir o estilo do site quando a largura da tela for menor ou igual a `768px`. A segunda propriedade `@media` é utilizada para definir o estilo do site quando a largura da tela for menor ou igual a `480px`. Para verificar o resultado, siga os passos abaixo:

1. Abra o site no navegador usando a ferramenta `live server`.
2. Abra o modo de desenvolvedor do navegador. Tecle `Ctrl + Shift + I` ou `F12`.
3. Redimensione a tela para verificar o design responsivo.
4. Para simular um dispositivo móvel, clique no ícone de celular no modo de desenvolvedor ou clique em `Ctrl + Shift + M`.
5. Pronto, nosso site está pronto.

Verifique se o resultado final está parecido com a imagem abaixo:

![livraria](./image/livraria_resultado.png)

## Tarefa

 - [ ] Adicione cores e espaçamentos diferentes.
 - [ ] Adicione mais uma seção com livros dividida em colunas.
 - [ ] Adicione animação nos links do menu. Pode usar o pseudo-elemento `:hover`.
 - [ ] Adicione uma fonte externa ao seu site. Recomendo usar o Google Fonts para adicionar fontes externas ao seu site. Conheça mais sobre o Google Fonts [clicando aqui](https://fonts.google.com/).

## Publicando o site no GitHub Pages

Para publicar o site no GitHub Pages, siga os passos abaixo:

1. Abra o navegador web e acesse o site do GitHub.
2. Faça login na plataforma GitHub.
3. Abra o repositório `livraria`.
4. Clique na aba `Settings`.
5. Clique no menu lateral `Pages`.
6. Na opção `Source`, selecione a branch `main` e clique no botão `Save`.
7. Aguarde alguns minutos até que o site seja publicado.
8. Pronto, seu site está publicado no GitHub Pages.
9. Copie o link do seu site e envie no Google Classroom.
10. Aguarde a correção do professor.
11. Parabéns, você concluiu o projeto!

> 👍 O mais importante é praticar e se divertir!

# Projeto: Livraria (Parte 2)
[&uarr;](#1-introdução-a-html)

Nesta parte do projeto, vamos adicionar uma página para cadastro de livros. Para isso, siga os passos abaixo:

1. Crie um novo arquivo chamado `cadastro.html`.
2. Abra o projeto no navegador usando a ferramenta `live server`.

> 💡 Para adicionar estilos ao nosso formulário, vamos fazer alterações no arquivo `estilos.css`.

Antes de começar a criar nosso formulário, vamos adicionar mais um link ao menu no arquivo `index.html`. Para isso, faça a seguinte alteração no código:

```html
<!-- index.html -->

<nav>
    <ul>
        <li><a href="index.html">Início</a></li>
        <li><a href="#">Livros</a></li>
        <li><a href="#">Autores</a></li>
        <li><a href="#">Contato</a></li>
        <!-- Adicionar mais este link -->
        <li><a href="cadastro.html">Cadastro</a></li>
    </ul>
</nav>
```

Agora, vamos começar a criar nosso formulário. Para isso, siga os passos abaixo:

```html
<!-- cadastro.html -->
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Livros</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <header>
        <h1>Livraria Fantástica</h1>
        <nav>
            <ul>
                <li><a href="index.html">Início</a></li>
                <li><a href="#">Livros</a></li>
                <li><a href="#">Autores</a></li>
                <li><a href="#">Contato</a></li>
                <li><a href="cadastro.html">Cadastro</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="container">
            <!-- Aqui vai o formulário -->
        </section>
    </main>
</body>
</html>
```

O código acima adiciona uma seção com a classe `.container`. Essa classe será utilizada para centralizar o conteúdo do formulário. Em seguida, vamos adicionar o formulário. Para isso, siga os passos abaixo:

```html
<!-- cadastro.html -->

<form>
    <fieldset>
        <legend>Cadastro de Livros</legend>

        <div class="input-container">
            <label for="titulo">Título</label>
            <input type="text" name="titulo" id="titulo" placeholder="Título do livro" required autofocus>
        </div>

        <!-- Aqui vão os próximos campos de entrada -->

    </fieldset>
</form>
```

Com isso, começamos a criar nosso formulário. O formulário tem:

 - A tag `<form>` que é utilizada para criar um formulário.
 - A tag `<fieldset>` que é utilizada para agrupar elementos relacionados em um formulário.
 - A tag `<legend>` que é utilizada para adicionar uma legenda ao formulário.
 - A tag `<div>` com a classe `.input-container` que é utilizada para agrupar um rótulo e um campo de entrada.
 - A tag `<label>` que é utilizada para adicionar um rótulo ao campo de entrada.
 - A tag `<input>` que é utilizada para adicionar um campo de entrada ao formulário. Nesse caso, o campo de entrada é do tipo `text` com o nome `titulo` e o id `titulo`.

> 💡 O atributo `required` é utilizado para tornar o campo de entrada obrigatório. 
> 💡 O atributo `autofocus` é utilizado para definir o foco automático no campo de entrada.
> 💡 O atributo `placeholder` é utilizado para adicionar um texto de ajuda ao campo de entrada.

Agora, vamos adicionar mais campos de entrada de texto ao formulário. Para isso, siga os passos abaixo:

```html
<!-- cadastro.html -->

<div class="input-container">
    <label for="autor">Autor</label>
    <input type="text" name="autor" id="autor" placeholder="Nome do autor" required>
</div>

<div class="input-container">
    <label for="editora">Editora</label>
    <input type="text" name="editora" id="editora" placeholder="Editora" required>
</div>
```

> 💡 Além de campos de entrada de texto, podemos adicionar campos de entrada de `número`, `email`, `telefone`, `data`, etc.

Vamos adicionar um campo `date` para adicionar a data de publicação do livro. Para isso, siga os passos abaixo:

```html
<div class="input-container">
    <label for="dtpublicacao">Publicação</label>
    <input type="date" name="dtpublicacao" id="dtpublicacao" required>
</div>
```

Repare que alteramos apenas a propriedade `type` para `date`. Isso é suficiente para adicionar um campo de entrada de data.

Agora, vamos adicionar um campo `checkbox` para escolher quais serão os idiomas do livro. Para isso, siga os passos abaixo:

```html
<div class="input-container">
    <label>Idioma</label>
    <div class="input-check">
        <input type="checkbox" name="idioma" value="Português" id="portugues">
        <label for="portugues">Português</label>
    </div>
    <div class="input-check">
        <input type="checkbox" name="idioma" value="Inglês" id="ingles">
        <label for="ingles">Inglês</label>
    </div>
    <div class="input-check">
        <input type="checkbox" name="idioma" value="Espanhol" id="espanhol">
        <label for="espanhol">Espanhol</label>
    </div>
</div>
```


O componente `checkbox` é utilizado para adicionar uma caixa de seleção. Nesse caso, temos três caixas de seleção com os valores `Português`, `Inglês` e `Espanhol`. Para agrupar os componentes `checkbox`, usamos a classe `.input-check`. Para adicionar um rótulo ao componente `checkbox`, usamos a tag `<label>` com o atributo `for` que deve ter o mesmo valor do atributo `id` do componente `checkbox`. 
    
> 💡 A característica mais importante do componente `checkbox` é que ele pode ter mais de um valor selecionado.
> 💡 Além de componentes `checkbox`, podemos adicionar componentes `radio`, `range`, `file`, etc.

Vamos adicionar mais uma caixa de entrada de texto, porém, dessa vez, a caixa de texto terá um `pattern` para validar o ISBN do livro. Para isso, siga os passos abaixo:

```html
<div class="input-container">
    <label for="isbn">ISBN</label>
    <input type="text" name="isbn" id="isbn" placeholder="ISBN do livro" pattern="\d{3}-\d{10}" required>
</div>
```

> 💡 O atributo `pattern` é utilizado para validar o valor do campo de entrada. Nesse caso, o valor do campo de entrada deve ter o seguinte padrão: `\d{3}-\d{10}`. Isso significa que o valor do campo de entrada deve ter 3 dígitos, um traço e 10 dígitos.

Podemos adicionar caixas de entrada de texto que aceitarão apenas números. Para demonstrar, vamos adicionar o ano de publicação e a quantidade de páginas do livro. Para isso, siga os passos abaixo:

```html
<div class="input-container">
    <label for="ano">Ano</label>
    <input type="number" name="ano" id="ano" placeholder="Ano de publicação" required>
</div>

<div class="input-container">
    <label for="paginas">Páginas</label>
    <input type="number" name="paginas" id="paginas" placeholder="Número de páginas" required>
</div>
```

> 💡 O atributo `type` com o valor `number` é utilizado para adicionar um campo de entrada de números.

Para escolher uma categoria, vamos adicionar um componente `select`. Para isso, siga os passos abaixo:

```html
<div class="input-container">
    <label for="categoria">Categoria</label>
    <select name="categoria" id="categoria" required>
        <option value="">Selecione</option>
        <option value="Ação">Ação</option>
        <option value="Aventura">Aventura</option>
        <option value="Comédia">Comédia</option>
        <option value="Drama">Drama</option>
        <option value="Ficção Científica">Ficção Científica</option>
        <option value="Romance">Romance</option>
        <option value="Suspense">Suspense</option>
        <option value="Terror">Terror</option>
    </select>
</div>
```

O componente `select` é utilizado para adicionar uma lista de opções. Nesse caso, temos uma lista de opções com as categorias de livros. Para adicionar uma opção, usamos a tag `<option>` com o atributo `value` que define o valor da opção. A primeira opção é utilizada para definir um valor padrão. Para isso, usamos o atributo `value` com o valor vazio.

> 💡 O componente `select` é utilizado para adicionar uma lista de opções. O componente `datalist` é utilizado para adicionar uma lista de opções com um campo de entrada de texto. Conheça mais sobre o componente `datalist` [clicando aqui](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/datalist).

Para registrar o estado de conservação do livro, novo ou usado, vamos adicionar um componente `radio`. Para isso, siga os passos abaixo:

```html
<div class="input-container">
    <label>Estado do Livro</label>
    <div class="radio-group">
        <input type="radio" name="situacao" id="novo" value="Novo" required checked>
        <label for="novo">Novo</label>
      
        <input type="radio" name="situacao" id="usado" value="Usado" required>
        <label for="usado">Usado</label>
    </div>
</div>
```

Componentes de entrada do tipo `radio` são geralmente usados para selecionar uma única opção em uma lista. Para que isso seja possível, todos os componentes `radio` devem ter o mesmo nome. Nesse caso, todos os componentes `radio` tem o atributo `name` com o valor `situacao`. 

> 💡 Para definir um valor padrão, usamos o atributo `checked`.

Quando precisamos adicionar um campo de entrada de texto grande, usamos o componente `textarea`. Faremos isso para registrar o resumo do livro. Para isso, siga os passos abaixo:

```html
<div class="input-container">
    <label for="resumo">Resumo</label>
    <textarea name="resumo" id="resumo" placeholder="Resumo do livro" rows="5" required></textarea>
</div>
```

> 💡 O componente `textarea` é utilizado para adicionar um campo de entrada de texto grande. O atributo `rows` é utilizado para definir o número de linhas do campo de entrada.

Até agora, adicionamos vários componentes de entrada de texto. Agora, vamos adicionar um componente de entrada de arquivo para adicionar a capa do livro. Para isso, siga os passos abaixo:

```html
<div class="input-container">
    <label for="capa">Capa</label>
    <input type="file" name="capa" id="capa" accept="image/*">
</div>
```

> 💡 O atributo `accept` é utilizado para definir o tipo de arquivo que pode ser enviado. Nesse caso, o tipo de arquivo é `image/*`, ou seja, qualquer tipo de imagem.

Para finalizar, vamos adicionar um botão para enviar o formulário e outro para limpar o formulário. Para isso, siga os passos abaixo:

```html
<div class="actions">
    <button type="submit">Cadastrar</button>
    <button type="reset">Limpar</button>
</div>
```

> 💡 O atributo `type` com o valor `submit` é utilizado para enviar o formulário. O atributo `type` com o valor `reset` é utilizado para limpar o formulário.

Pronto, nosso formulário está pronto. Agora, vamos adicionar o estilo ao nosso formulário. Para começar, vamos adicionar um estilo ao base do formulário. Para isso, siga os passos abaixo:

```css
/* estilos.css */

/* Formulário */
.container {
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

form {
  overflow: hidden;
}

form fieldset {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
}

form legend {
  font-weight: bold;
  color: #777;
}
```

O código acima adiciona:
 - A classe `.container` com uma largura de 1200px, uma largura máxima de 100%, uma margem de 0 e um espaçamento interno de 20px em todas as direções.
 - A tag `<form>` com a propriedade `overflow` com o valor `hidden` para esconder o conteúdo que ultrapassa o tamanho do elemento.
 - A tag `<fieldset>` com uma borda de 1px sólida, um raio de borda de 4px, um espaçamento interno de 10px e uma margem inferior de 10px.
 - A tag `<legend>` com o texto em negrito e uma cor de texto cinza.

Agora, vamos adicionar o estilo aos campos de entrada de texto. Para isso, siga os passos abaixo:

```css
/* estilos.css */

/* Campos de Entrada de Texto */
.input-container {
    margin-bottom: 10px;
}

.input-container label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 14px;
}

input[type="text"],
input[type="date"],
input[type="number"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #555;
}
```

O código acima adiciona:
 - A classe `.input-container` com uma margem inferior de 10px. Essa classe é utilizada para agrupar um rótulo e um campo de entrada.
 - A tag `<label>` com um espaçamento inferior de 5px, o texto em negrito e um tamanho de fonte de 14px.
 - A tag `<input>` com uma largura de 100%, um espaçamento interno de 8px, uma borda de 1px sólida, um raio de borda de 4px e uma cor de texto cinza.

Agora, vamos adicionar o estilo aos componentes `checkbox` e `radio`. Para isso, siga os passos abaixo:

```css
/* estilos.css */

/* Componentes Checkbox e Radio */
.radio-group label {
  display: inline;
  margin-right: 10px;
  font-weight: normal;
}

.input-check {
    display: inline-block;
    margin-right: 10px;
}

.input-check input[type="checkbox"] + label {
    display: inline-block;
    font-weight: normal;
}
```

O código acima adiciona:
 - A classe `.radio-group` com um espaçamento direito de 10px, um display em linha para que os componentes `radio` fiquem na mesma linha.
 - A classe `.input-check` com um espaçamento direito de 10px e um display em linha para agrupar os componentes `checkbox`.
 - A classe `.input-check` é utilizada para agrupar o componente `checkbox` e o `label`. Para isso, usamos o seletor `+` para selecionar o rótulo que vem logo após o componente `checkbox`.

Para customizar o componente `textarea` e o componente `select`, vamos usar propriedades bem comuns como `width`, `padding`, `border`, `border-radius`, `color`, etc. Para isso, siga os passos abaixo:

```css
/* estilos.css */

/* Componentes Textarea e Select */
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical; /* Permite redimensionar verticalmente o textarea */
  height: 120px; /* Altura inicial do textarea */
}

select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
```

> 💡 A única propriedade diferente é a propriedade `resize` que é utilizada para permitir redimensionar verticalmente o componente `textarea`.

Para finalizar, vamos adicionar o estilo aos botões. Para isso, siga os passos abaixo:

```css
/* estilos.css */

/* Botões */
button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer; /* Adiciona um cursor de ponteiro */
}

/* Botão de Limpar */
button[type="reset"] {
  background-color: #6c757d;
}

/* Botão de Enviar */
button:hover {
  background-color: #0056b3;
}
```

O código acima adiciona:
 - A tag `<button>` com uma cor de fundo azul, uma cor de texto branca, uma borda de 1px sólida, um raio de borda de 4px, um espaçamento interno de 10px e um cursor de ponteiro.
 - A tag `<button>` com o atributo `type` com o valor `reset` com uma cor de fundo cinza.
 - A tag `<button>` com o pseudo-elemento `:hover` com uma cor de fundo azul mais escura.

Pronto, nosso formulário está criado. Precisamos agora finalizar nosso arquivo `cadastro.html` com o mesmo rodapé usado no arquivo `index.html`. Para isso, siga os passos abaixo:

```html
<footer>
    <p>&copy; 2023 Livraria Fantástica | Criado por Seu Nome</p>
</footer>
```

