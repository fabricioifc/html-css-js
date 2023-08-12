# 1. Introdução a HTML

## Sumário
  - [x] [Introdução ao conteúdo](HTML.md#introdução-ao-conteúdo)
- HTML
  - [x] [Como a internet chega até a sua casa?](HTML.md#como-a-internet-chega-até-a-sua-casa)
  - [x] [O que é o HTML?](HTML.md#o-que-é-o-html)
  - [x] [Estrutura básica](HTML.md#estrutura-básica)
  - [x] [Tags básicas](HTML.md#tags-básicas)
  - [x] [Aninhamento](HTML.md#aninhamento)
  - [x] [Atributos](HTML.md#atributos)
  - [x] [Exemplo](HTML.md#exemplo)
  - [x] [Criando nosso primeiro site com HTML](HTML.md#criando-nosso-primeiro-site-com-html)
  - [x] [Símbolos e Emoji no seu site](HTML.md#símbolos-e-emoji-no-seu-site)
  - [x] [Você tem o direito de usar qualquer imagem no seu site?](HTML.md#você-tem-o-direito-de-usar-qualquer-imagem-no-seu-site)
  - [x] [Como adicionar um favicon ao seu site?](HTML.md#como-adicionar-um-favicon-ao-seu-site)
  - [x] [Como adicionar tabela ao seu site?](HTML.md#como-adicionar-tabela-ao-seu-site)
  - [x] [Elementos de linha e elementos de bloco](HTML.md#elementos-de-linha-e-elementos-de-bloco)
  - [x] [Como adicionar um vídeo ao seu site?](HTML.md#como-adicionar-um-vídeo-ao-seu-site)
  - [x] [Como adicionar um mapa ao seu site?](HTML.md#como-adicionar-um-mapa-ao-seu-site)
  - [x] [Como adicionar um rodapé ao seu site?](HTML.md#como-adicionar-um-rodapé-ao-seu-site)
  - [x] [Metatags para SEO](HTML.md#metatags-para-seo)
  - [x] [Resultado final](HTML.md#resultado-final)
  - [x] [Exercício Prático](HTML.md#exercício-prático)
  - [ ] [Como adicionar áudio ao seu site?](HTML.md#como-adicionar-áudio-ao-seu-site)
  - [ ] [Como adicionar formulário ao seu site?](HTML.md#como-adicionar-formulário-ao-seu-site)
- CSS
  - [x] [O que é o CSS?](HTML.md#o-que-é-o-css)
  - [x] [Inline, Embedding e Import](HTML.md#inline-embedding-e-import)
  - [x] [Selectors](HTML.md#selectors)
  - [x] [Especificidade](HTML.md#especificidade)
  - [x] [Box model](HTML.md#box-model)
  

## Introdução ao conteúdo
[&uarr;](#1-introdução-a-html)

As principais tecnologias utilizadas para criar páginas web são o HTML, o CSS e o JavaScript. O HTML é utilizado para estruturar o conteúdo da página. O CSS é utilizado para estilizar o conteúdo da página. O JavaScript é utilizado para adicionar comportamentos ao conteúdo da página. A imagem abaixo ilustra o logotipo do HTML, do CSS e do JavaScript.

<img src="image/html-css-js.jpg" width="100%">

> Fonte: <a href="https://apexensino.com.br/wp-content/uploads/2017/11/html-css-javascript.jpg">Apexensino</a>

A diferença entre o HTML, o CSS e o JavaScript é que o HTML é uma linguagem de marcação, o CSS é uma linguagem de estilização e o JavaScript é uma linguagem de programação. A imagem abaixo ilustra a diferença entre o HTML, o CSS e o JavaScript.


<img src="image/esqueleto.jpg" width="100%">

> Fonte: <a href="https://thumbs.dreamstime.com/z/html-css-e-javascript-como-camadas-de-codifica%C3%A7%C3%A3o-explica%C3%A7%C3%A3o-diagrama-t%C3%B3picos-explicadas-fases-desenvolvimento-projetos-233593998.jpg">Desamstime</a>

Percebemos na imagem que o HTML é representado como o esqueleto da página, o CSS adiciona cores e estilos ao esqueleto e o JavaScript adiciona comportamentos.

## Como a internet chega até a sua casa?
[&uarr;](#1-introdução-a-html)

A internet é uma rede de computadores que se conectam entre si. Para que você possa acessar a internet, é necessário que o seu computador esteja conectado a essa rede. Existem várias formas de se conectar à internet, como por exemplo, através de um cabo de rede, de uma rede sem fio (Wi-Fi) ou de uma rede de telefonia móvel (3G, 4G, 5G).

Para compreender melhor como a internet funciona, assista ao vídeo abaixo:

[![Como a Internet chega na minha casa?](https://res.cloudinary.com/marcomontalbano/image/upload/v1691849184/video_to_markdown/images/youtube--F74GKCLXUWM-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://youtu.be/F74GKCLXUWM?t=140 "Como a Internet chega na minha casa?")

## O que é o HTML?
[&uarr;](#1-introdução-a-html)

HTML é a sigla para HyperText Markup Language, que significa Linguagem de Marcação de Hipertexto. O HTML é uma linguagem de marcação utilizada para criar páginas web. O HTML é composto por uma série de elementos, que são representados por tags. As tags são utilizadas para estruturar o conteúdo da página.

> 💡 Para experimentar os exemplos abaixo, crie um novo projeto no Visual Studio Code e crie um arquivo chamado `index.html`. Evite copiar e colar os exemplos abaixo. Digite os exemplos abaixo para praticar. 

> Para criar um novo projeto, faça o seguinte:
> 1. Abra o Visual Studio Code.
> 2. Clique no menu "Arquivo" -> "Abrir Pasta".
> 3. Crie uma pasta chamada `primeiro-projeto`.
> 5. Salve a pasta `primeiro-projeto` dentro da pasta `Documentos`.
> 6. Clique no menu "Arquivo" -> "Novo Arquivo".
> 7. Crie um arquivo chamado `index.html`. O arquivo `index.html` é o arquivo principal do site.
> 8. Clique no menu "Arquivo" e habilite a opção "Salvar automaticamente quando um arquivo for alterado".

Agora você está pronto para começar a escrever o código HTML.
 
### Estrutura básica
[&uarr;](#1-introdução-a-html)


A estrutura básica de um documento HTML é composta por uma tag `<html>`, que contém duas tags: `<head>` e `<body>`. A tag `<head>` é utilizada para adicionar informações sobre o documento, como por exemplo, o título da página. A tag `<body>` é utilizada para adicionar o conteúdo da página. No arquivo `index.html`, digite o código abaixo:

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Título da página</title>
    </head>
    <body>
        <h1>Conteúdo da Página</h1>
        <p>Este é um parágrafo.</p>
    </body>
</html>
```

> 💡 Para ver o resultado, execute a ferramenta `live server` que fica no menu inferior direito do vscode. Por padrão, seu site vai estar disponível no endereço `http://localhost:5000`. `localhost` significa que o projeto está sendo executado no seu computador local e `5000` é o número da porta.

> 💡 Entenda melhor como usar a ferramenta `live server` acessando [Como usar o Live Server de forma ideal](https://blog.cod3r.com.br/como-usar-o-live-server-de-forma-ideal/).

#### Explicando a estrutura básica

 - A tag `<!DOCTYPE html>` é utilizada para informar ao navegador que o documento é um documento HTML. Esta tag deve ser a primeira tag do documento.
 - A tag `<html>` é utilizada para criar o elemento raiz do documento. O elemento raiz do documento é o elemento que contém todos os outros elementos.
 - O atributo `lang` é utilizado para informar ao navegador o idioma do documento.
 - A tag `<head>` é utilizada para criar o cabeçalho do documento. O cabeçalho do documento é a parte invisível da página.
 - A tag `<title>` é utilizada para criar o título do documento. O título do documento é exibido na aba do navegador.
 - A tag `<meta>` é utilizada para adicionar informações adicionais ao documento. O atributo `charset` é utilizado para informar ao navegador o conjunto de caracteres do documento. O conjunto de caracteres é utilizado para exibir caracteres especiais, como por exemplo, acentos.
 - A tag `<body>` é utilizada para criar o corpo do documento. O corpo do documento é a parte visível da página.
 - A tag `<h1>` é utilizada para criar um título. O número indica o nível de importância do título. O número 1 indica que o título é o mais importante. O número 6 indica que o título é o menos importante. 
 - A tag `<p>` é utilizada para criar um parágrafo.

 
### O que é um elemento HTML?

Um elemento HTML é composto por uma tag de abertura, um conteúdo e uma tag de fechamento. O conteúdo é o que está entre a tag de abertura e a tag de fechamento. Por exemplo, o elemento abaixo é composto pela tag de abertura `<p>`, pelo conteúdo "Este é um parágrafo." e pela tag de fechamento `</p>`.

```html
<p>Este é um parágrafo.</p>
```

### Tags básicas
[&uarr;](#1-introdução-a-html)

As tags de título são utilizadas para criar títulos e destacar partes importantes do conteúdo. A tag `h1` é utilizada para criar o título mais importante. A tag `h6` é utilizada para criar o título menos importante.


```html
<h1>Título 1</h1>
<h2>Título 2</h2>
<h3>Título 3</h3>
<h4>Título 4</h4>
<h5>Título 5</h5>
<h6>Título 6</h6>
```

As tags de parágrafo são utilizadas para criar parágrafos. Os parágrafos são utilizados para agrupar frases. O parágrafo, por padrão, é um elemento de bloco, ou seja, ele ocupa toda a largura da página.

```html
<p>Este é um parágrafo.</p>
```

As tags de quebra de linha são utilizadas para criar quebras de linha. As quebras de linha são utilizadas para separar frases. A tag `br` é uma tag vazia, ou seja, ela não possui uma tag de fechamento. 

> 💡 **Importante**: Essa tag não possui conteúdo e não pode ser usada fora do texto.

```html
<p>Este é um parágrafo.<br>Este é outro parágrafo.</p>
```

As tags de ênfase são utilizadas para criar ênfases. As ênfases são utilizadas para destacar partes importantes do conteúdo. A tag `strong` é utilizada para criar ênfases fortes. A tag `em` é utilizada para criar ênfases fracas.

```html
<p>Este é um <strong>parágrafo</strong>.</p>
<p>Este é um <em>parágrafo</em>.</p>
```

As tags de lista são utilizadas para criar listas. As listas são utilizadas para agrupar itens. A tag `ul` é utilizada para criar uma lista não ordenada. A tag `li` é utilizada para criar um item de lista. 

**Importante**: a tag `li` deve ser utilizada dentro da tag `ul`.

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

As tags de imagem são utilizadas para criar imagens e ilustrar o conteúdo. A tag `img` é uma tag vazia, ou seja, ela não possui uma tag de fechamento. A tag `img` possui dois atributos obrigatórios: `src` e `alt`. O atributo `src` é utilizado para adicionar o endereço da imagem. O atributo `alt` é utilizado para adicionar um texto alternativo à imagem. O texto alternativo é utilizado para descrever a imagem para pessoas com deficiência visual.

**Importante**: A tag `img` é um elemento de linha, ou seja, ela não ocupa toda a largura da página.

```html
<img src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Logo do Google">
```

As tags de âncora são utilizadas para criar links, ou seja, ligações entre páginas. A tag `a` é uma tag de âncora. A tag `a` possui dois atributos obrigatórios: `href` e `alt`. O atributo `href` é utilizado para adicionar o endereço do link. O atributo `alt` é utilizado para adicionar um texto alternativo ao link. O texto alternativo é utilizado para descrever o link para pessoas com deficiência visual.

```html
<a href="https://www.google.com.br" alt="Link para o Google">Google</a>
```

As tags de comentário são utilizadas para criar comentários. Os comentários são utilizados para adicionar informações adicionais ao código que não serão exibidas na página. Os comentários são utilizados para explicar o código e serão ignorados pelo navegador.

```html
<!-- Este é um comentário -->
```

As tags de divisão são utilizadas para criar divisões. As divisões são utilizadas para agrupar elementos e partes de uma página HTML. A tag `div` é um elemento de bloco, ou seja, ela ocupa toda a largura da página.

```html
<div>
    <p>Este é um parágrafo.</p>
    <p>Este é outro parágrafo.</p>
</div>
```

## Aninhamento
[&uarr;](#1-introdução-a-html)

O aninhamento de elementos é utilizado para agrupar elementos, criando estruturas complexas. Por exemplo, o código abaixo cria uma lista de itens com títulos e parágrafos.

```html
<ul>
    <li>
        <h1>Título 1</h1>
        <p>Este é um parágrafo.</p>
    </li>
    <li>
        <h1>Título 2</h1>
        <p>Este é outro parágrafo.</p>
    </li>
</ul>
```

No código acima, cada item `li` possui um título `h1` e um parágrafo `p`. O título e o parágrafo estão aninhados dentro do item da lista. 

## Atributos
[&uarr;](#1-introdução-a-html)

Os atributos são utilizados para adicionar informações adicionais às tags. Os atributos são adicionados na tag de abertura. Por exemplo, o atributo `href` é utilizado para adicionar um link a um elemento. O atributo `src` é utilizado para adicionar uma imagem a um elemento. O atributo `alt` é utilizado para adicionar um texto alternativo a um elemento. O atributo `class` é utilizado para adicionar uma classe a um elemento. O atributo `id` é utilizado para adicionar um identificador a um elemento.

**Importante**: Os atributos `class` e `id` são utilizados para adicionar estilos e comportamentos aos elementos. Esses atributos serão explicados nas próximas aulas.

```html
<a href="https://www.google.com.br">Google</a>
<img src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Logo do Google">
<p class="paragrafo">Este é um parágrafo.</p>
<p id="paragrafo">Este é um parágrafo.</p>
```

## Exemplo
[&uarr;](#1-introdução-a-html)

Nesta aula aprendemos alguns conceitos básicos sobre HTML e suas tags básicas. Aprendemos também a estrutura básica de um documento HTML e como criar títulos, parágrafos, listas, imagens, links, comentários e divisões. Aprendemos também sobre aninhamento de elementos e atributos. Para demonstrar o que aprendemos, vamos criar uma página HTML com uma lista de compras de produtos de supermercado. Cada produto terá um título, uma imagem e um link para o site do supermercado.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Lista de Compras</title>
    </head>
    <body>
        <h1>Lista de Compras</h1>
        <ul>
            <li>
                <h2>Arroz</h2>
                <img src="https://www.paodeacucar.com/img/uploads/1/100/563100.png" alt="Arroz">
                <a href="https://www.paodeacucar.com/produto/563100/arroz-branco-tipo-1-tio-joao-5kg">Comprar</a>
            </li>
            <li>
                <h2>Feijão</h2>
                <img src="https://www.paodeacucar.com/img/uploads/1/100/563100.png" alt="Feijão">
                <a href="https://www.paodeacucar.com/produto/563100/arroz-branco-tipo-1-tio-joao-5kg">Comprar</a>
            </li>
            <li>
                <h2>Macarrão</h2>
                <img src="https://www.paodeacucar.com/img/uploads/1/100/563100.png" alt="Macarrão">
                <a href="https://www.paodeacucar.com/produto/563100/arroz-branco-tipo-1-tio-joao-5kg">Comprar</a>
            </li>
        </ul>
    </body>
</html>
```

## Criando nosso primeiro site com HTML
[&uarr;](#1-introdução-a-html)

Nesta aula, vamos criar nosso primeiro site. O site será uma página de perfil. A página de perfil será composta por uma foto, um nome, uma descrição, um link para o GitHub e uma lista de atividades favoritas. Para criar o site, siga os passos abaixo:

1. Crie uma pasta chamada `primeiro-site` no seu computador.
2. Abra a pasta `primeiro-site` no Visual Studio Code.
3. Crie um arquivo chamado `index.html` dentro da pasta `primeiro-site`. O arquivo `index.html` é o arquivo principal do site.
4. Abra o arquivo `index.html` no Visual Studio Code.

Com o projeto criado, vamos começar a escrever o código HTML. Para isso, siga os passos abaixo:

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Meu Perfil</title>
    </head>
    <body>
        <h1>Meu Perfil</h1>
        <img src="https://github.com/fabricioifc.png" alt="Foto de perfil" width="150">
        <h1>Fabricio Bizotto</h1>
        <p>Desenvolvedor de Software</p>
        <a href="https://github.com/fabricioifc" target="_blank">GitHub</a>
        <h2>Lista de Atividades</h2>
        <ul>
            <li>Programar</li>
            <li>Estudar</li>
            <li>Assistir filmes</li>
        </ul>
    </body>
</html>
```

Para melhorar o código acima, vamos separar o conteúdo em seções com a tag `div`. Para isso, siga os passos abaixo:

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Meu Perfil</title>
    </head>
    <body>
        <div>
            <h1>Meu Perfil</h1>
            <img src="https://github.com/fabricioifc.png" alt="Foto de perfil" width="150">
        </div>
        <div>
            <h1>Fabricio Bizotto</h1>
            <p>Desenvolvedor de Software</p>
            <a href="https://github.com/fabricioifc" target="_blank">GitHub</a>
            <h2>Lista de Atividades</h2>
            <ul>
                <li>Programar</li>
                <li>Estudar</li>
                <li>Assistir filmes</li>
            </ul>
        </div>
    </body>
</html>
```

## Símbolos e Emoji no seu site
[&uarr;](#1-introdução-a-html)

Para adicionar símbolos e emoji no seu site, você pode utilizar o [Emojipedia](https://emojipedia.org/). Para demonstrar, vamos adicionar um emoji de coração na lista de atividades. Para isso, siga os passos abaixo:

1. Abra o site [Emojipedia](https://emojipedia.org/).
2. Pesquise por "heart".
3. Copie o emoji de coração.
4. Cole o emoji de coração na lista de atividades no exemplo aterior. 

O resultado final deve ser parecido com o código abaixo:

```html
...
<ul>
    <li>❤️ Programar</li>
    <li>❤️ Estudar</li>
    <li>❤️ Assistir filmes</li>
    <li>❤️</li>
</ul>
...
```

## Você tem o direito de usar qualquer imagem no seu site?
[&uarr;](#1-introdução-a-html)

Não. Você não pode usar qualquer imagem no seu site. Você só pode usar imagens que você tem o direito de usar. Por exemplo, você pode usar imagens que você criou ou imagens que você encontrou em sites que permitem o uso comercial. Para encontrar imagens que você pode usar comercialmente, você pode utilizar o [Google Imagens](https://www.google.com.br/imghp?hl=pt-BR&tab=wi&ogbl). Para demonstrar, vamos encontrar uma imagem de um coração no Google Imagens. Para isso, siga os passos abaixo:

1. Abra o site [Google Imagens](https://www.google.com.br/imghp?hl=pt-BR&tab=wi&ogbl).
2. Pesquise por "heart".
3. Clique em "Ferramentas de pesquisa".
4. Clique em "Direitos de uso".
5. Clique em "Marcadas para reutilização com modificação".

O resultado final deve ser parecido com a imagem abaixo:

```html	
<img src="https://cdn.pixabay.com/photo/2013/07/13/10/24/heart-157895_960_720.png" alt="Coração" width="150">
```

## Como adicionar um favicon ao seu site?
[&uarr;](#1-introdução-a-html)

Favicon é a sigla para Favorite Icon, que significa Ícone Favorito. O favicon é o ícone que aparece na aba do navegador. 
Para adicionar um favicon ao seu site, você pode utilizar o [Favicon Generator](https://www.favicon-generator.org/). Para demonstrar, vamos adicionar um favicon ao nosso site. Para isso, siga os passos abaixo:

1. Abra o site [Favicon Generator](https://www.favicon-generator.org/).
2. Clique em "Choose File".
3. Selecione a imagem que você quer utilizar como favicon.
4. Clique em "Generate Favicon".
5. Clique em "Download Favicon".
6. Copie o arquivo `favicon.ico` para a pasta do seu site.
7. Adicione a tag `<link rel="icon" href="favicon.ico">` dentro da tag `<head>`.
8. Abra o arquivo `index.html` no navegador.
9. Observe que o favicon aparece na aba do navegador.

O resultado final deve ser parecido com o código abaixo:

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Meu Perfil</title>
        <!-- veja abaixo como adicionar o favicon-->
        <link rel="icon" href="favicon.ico" type="image/x-icon">
    </head>
    <body>
        ...
    </body>
</html>
```

## Como adicionar tabela ao seu site?
[&uarr;](#1-introdução-a-html)

Tabelas em HTML são utilizadas para exibir dados em linhas e colunas. Para demonstrar, vamos alterar o código do nosso site para exibir uma tabela de filmes. Para isso, siga os passos abaixo:

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        ...
    </head>
    <body>
        ...
        <div>
            <h2>Filmes Favoritos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Ano</th>
                        <th>Gênero</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Matrix</td>
                        <td>1999</td>
                        <td>Ficção Científica</td>
                    </tr>
                    <tr>
                        <td>Interestelar</td>
                        <td>2014</td>
                        <td>Ficção Científica</td>
                    </tr>
                    <tr>
                        <td>Star Wars: Episódio IV - Uma Nova Esperança</td>
                        <td>1977</td>
                        <td>Ficção Científica</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
</html>
```

Percebe-se que a tabela é composta por uma tag `<table>`, que contém duas tags: `<thead>` e `<tbody>`. A tag `<thead>` é utilizada para criar o cabeçalho da tabela. A tag `<tbody>` é utilizada para criar o corpo da tabela. O cabeçalho da tabela é composto por uma tag `<tr>`, que contém três tags `<th>`. O corpo da tabela é composto por três tags `<tr>`, que contém três tags `<td>`. A tag `<th>` é utilizada para criar o cabeçalho da coluna. A tag `<td>` é utilizada para criar o conteúdo da célula.

## Elementos de linha e elementos de bloco
[&uarr;](#1-introdução-a-html)

Cada elemento HTML possui um comportamento diferente. Alguns elementos são elementos de linha e outros são elementos de bloco. Os elementos de linha são elementos que não ocupam toda a largura da página. Os elementos de bloco são elementos que ocupam toda a largura da página.

A grande maioria dos elementos HTML são elementos de bloco. Por exemplo, as tags `<h1>`, `<p>`, `<ul>`, `<li>`, `<table>`, `div`, `hr`, `pre` e `blockquote` são elementos de bloco. Poucas tags são elementos de linha. Por exemplo, as tags `<a>`, `<span>`, `<img>`, `<strong>`, `<em>`, `<br>`, `<input>`, `<select>`, `<textarea>` e `<button>` são elementos de linha.

Para demonstrar a diferença entre elementos de linha e elementos de bloco, vamos adicionar mais uma imagem de perfil ao nosso site. Para isso, siga os passos abaixo:

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        ...
    </head>
    <body>
        ...
        <div>
            <h1>Meu Perfil</h1>
            <img src="https://github.com/fabricioifc.png" alt="Foto de perfil" width="150">
            <img src="https://github.com/fabricioifc.png" alt="Foto de perfil" width="150">
        </div>
        ...
    </body>
</html>
```

Observe que as imagens estão uma ao lado da outra. Para que as imagens fiquem uma abaixo da outra, é necessário alterar a propriedade `display` das imagens para `block`. Isso será feito posteriormente, quando aprendermos sobre CSS.

## Como adicionar um vídeo ao seu site?
[&uarr;](#1-introdução-a-html)

Para adicionar um vídeo ao seu site, você pode utilizar o [YouTube](https://www.youtube.com/). Para demonstrar, vamos adicionar um vídeo ao nosso site. Para isso, siga os passos abaixo:

1. Abra o site [YouTube](https://www.youtube.com/).
2. Pesquise por "fabricio bizotto".
3. Escolha um vídeo. Por exemplo, o vídeo "Programação Web II".
4. Clique no botão "Compartilhar".
5. Clique no botão "Incorporar".
6. Copie o código de incorporação.
7. Cole o código de incorporação no seu site.
8. Abra o arquivo `index.html` no navegador.
9. Observe que o vídeo aparece no seu site.

O resultado final deve ser parecido com o código abaixo:

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        ...
    </head>
    <body>
        ...
        <div>
            <h2>Vídeo</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5n0sdE5Y3lY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </body>
</html>
```

## Como adicionar um mapa ao seu site?
[&uarr;](#1-introdução-a-html)

Para adicionar um mapa ao seu site, você pode utilizar o [Google Maps](https://www.google.com.br/maps/). Para demonstrar, vamos adicionar um mapa ao nosso site. Para isso, siga os passos abaixo:

1. Abra o site [Google Maps](https://www.google.com.br/maps/).
2. Pesquise por "Instituto Federal Catarinense - Campus Videira".
3. Clique no botão "Compartilhar".
4. Clique no botão "Incorporar um mapa".
5. Copie o código de incorporação.
6. Cole o código de incorporação no seu site.
7. Abra o arquivo `index.html` no navegador.
8. Observe que o mapa aparece no seu site.

O resultado final deve ser parecido com o código abaixo:

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        ...
    </head>
    <body>
        ...
        <div>
            <h2>Mapa</h2>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40216.95482411219!2d-51.154208489782796!3d-27.007716151029644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e14fa5b07c8fd5%3A0xfc69f726d4659812!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%20Ci%C3%AAncia%20e%20Tecnologia%20Catarinense%20-%20Campus%20Videira!5e0!3m2!1spt-BR!2sbr!4v1691860887844!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </body>
</html>
```

## Como adicionar um rodapé ao seu site?
[&uarr;](#1-introdução-a-html)

O rodapé é a parte inferior da página. O rodapé é utilizado para adicionar informações adicionais ao site como por exemplo, o nome do autor, licença, data de criação, links para redes sociais, etc. Para demonstrar, vamos adicionar um rodapé ao nosso site. Para isso, siga os passos abaixo:

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        ...
    </head>
    <body>
        ...
        <div>
            <p>&copy; 2023 Fabricio Bizotto</p>
            <p>Licença: MIT</p>
            <a href="https://github.com/fabricioifc" target="_blank">GitHub</a>
        </div>
    </body>
</html>
```

## Metatags para SEO
[&uarr;](#1-introdução-a-html)

SEO é a sigla para `Search Engine Optimization`, que significa Otimização para Mecanismos de Busca. O SEO é utilizado para melhorar o posicionamento de um site nos mecanismos de busca. Para melhorar o posicionamento de um site nos mecanismos de busca, é necessário adicionar metatags ao site. As principais metatags para SEO são: `description`, `keywords`, `author`, `viewport`, `robots` e `charset`. Adicionar estas metatags permitem que o site seja encontrado mais facilmente nos mecanismos de busca.

As metatags são utilizadas para adicionar informações adicionais ao documento. Vejamos alguns exemplos de metatags:

```html
<meta name="description" content="Descrição do documento">
<meta name="keywords" content="Palavras-chave do documento">
<meta name="author" content="Autor do documento">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="index, follow">
<meta charset="UTF-8">
```

Cada `metatag` possui um significado. Para entender melhor, vamos detalhar abaixo cada uma:

 - A metatag `<meta name="description" content="Descrição do documento">` é utilizada para adicionar uma descrição ao documento. A descrição é utilizada pelos mecanismos de busca para exibir uma descrição do documento nos resultados de busca.
 - A metatag `<meta name="keywords" content="Palavras-chave do documento">` é utilizada para adicionar palavras-chave ao documento. As palavras-chave são utilizadas pelos mecanismos de busca para exibir o documento nos resultados de busca.
 - A metatag `<meta name="author" content="Autor do documento">` é utilizada para adicionar o autor do documento.
 - A metatag `<meta name="viewport" content="width=device-width, initial-scale=1.0">` é utilizada para informar ao navegador que o documento deve ser exibido com a largura do dispositivo e com o zoom inicial de 100%.
 - A metatag `<meta name="robots" content="index, follow">` é utilizada para informar aos mecanismos de busca que o documento deve ser indexado e que os links do documento devem ser seguidos.
 - A metatag `<meta charset="UTF-8">` é utilizada para informar ao navegador o conjunto de caracteres do documento. O conjunto de caracteres é utilizado para exibir caracteres especiais, como por exemplo, acentos.

### Como adicionar metatags ao seu site?

Para adicionar metatags ao seu site, você pode utilizar o [Meta Tag Generator](https://www.metatags.org/). Para demonstrar, vamos adicionar metatags ao nosso site. Para isso, siga os passos abaixo:

> 💡 **Importante**: As metatags devem ser adicionadas dentro da tag `<head>`.

1. Abra o site [Free Meta Tag Generator](https://www.seoptimer.com/meta-tag-generator).
2. Preencha os campos com as informações do seu site.
3. Clique no botão "Generate Meta Tags".
4. Clique no botão "Copy to Clipboard".
5. Cole as metatags no seu site dentro da tag `<head>`.

O resultado final deve ser parecido com o código abaixo:

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Meu Perfil</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon">
        <meta name="title" content="Meu Perfil">
        <meta name="description" content="Meu perfil como professor de informática">
        <meta name="keywords" content="IFC, Professor, Informática, Web Design">
        <meta name="robots" content="index, follow">
        <meta name="author" content="Fabricio Bizotto">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        ...
    </body>
</html>
```

## Resultado Final
[&uarr;](#1-introdução-a-html)

O resultado final deve ser parecido com o código abaixo:

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Meu Perfil</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon">
        <meta name="title" content="Meu Perfil">
        <meta name="description" content="Meu perfil como professor de informática">
        <meta name="keywords" content="IFC, Professor, Informática, Web Design">
        <meta name="robots" content="index, follow">
        <meta name="author" content="Fabricio Bizotto">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div>
            <h1>Meu Perfil</h1>
            <img src="https://github.com/fabricioifc.png" alt="Foto de perfil" width="150">
        </div>
        <div>
            <h1>Fabricio Bizotto</h1>
            <p>Desenvolvedor de Software</p>
            <a href="https://github.com/fabricioifc" target="_blank">GitHub</a>
            <h2>Lista de Atividades</h2>
            <ul>
                <li>❤️ Programar</li>
                <li>❤️ Estudar</li>
                <li>❤️ Assistir filmes</li>
            </ul>
        </div>
        <div>
            <h2>Filmes Favoritos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Ano</th>
                        <th>Gênero</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Matrix</td>
                        <td>1999</td>
                        <td>Ficção Científica</td>
                    </tr>
                    <tr>
                        <td>Interestelar</td>
                        <td>2014</td>
                        <td>Ficção Científica</td>
                    </tr>
                    <tr>
                        <td>Star Wars: Episódio IV - Uma Nova Esperança</td>
                        <td>1977</td>
                        <td>Ficção Científica</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <h2>Vídeo</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5n0sdE5Y3lY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div>
            <h2>Mapa</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40216.95482411219!2d-51.154208489782796!3d-27.007716151029644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e14fa5b07c8fd5%3A0xfc69f726d4659812!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%20Ci%C3%AAncia%20e%20Tecnologia%20Catarinense%20-%20Campus%20Videira!5e0!3m2!1spt-BR!2sbr!4v1691860887844!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div>
            <p>&copy; 2023 Fabricio Bizotto</p>
            <p>Licença: MIT</p>
            <a href="https://github.com/fabricioifc" target="_blank">GitHub</a>
        </div>
    </body>
</html>
```

## Exercício Prático
[&uarr;](#1-introdução-a-html)

Crie um site para mostrar os seus filmes e séries favoritas. O site precisa ter:
 - Um título. Utilize a tag `<h1>`.
 - Uma foto de um ator ou atriz. Utiqlize a tag `<img>`.
 - Um parágrafo com o nome do ator ou atriz. Utilize a tag `<p>`. O nome do ator ou atriz deve estar em negrito. Utilize a tag `<strong>`.
 - Uma lista de filmes. Cada filme terá um título, um ano e um gênero. A lista deve ter pelo menos 3 filmes. Utilize as tags `<h1>`, `<ul>`, `<li>`, `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>` e `<td>`. 
 - Uma tabela com as suas séries favoritas. Cada série terá um título, um ano e um gênero. A tabela deve ter pelo menos 3 séries. Utilize as tags `<h1>`, `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>` e `<td>`.
 - Um vídeo de um trailer de um filme ou série. Utilize a tag `<iframe>`.
  - Um rodapé com o seu nome e link para o seu GitHub. Utilize as tags `<p>` e `<a>`.

# O que é CSS?
[&uarr;](#1-introdução-a-html)

CSS é a sigla para `Cascading Style Sheets`, que significa Folhas de Estilo em Cascata. O CSS é utilizado para adicionar estilos e comportamentos aos elementos HTML. O CSS é utilizado para alterar a cor, o tamanho, a fonte, a posição, a visibilidade, a animação, etc. dos elementos HTML. 

## Sintaxe
[&uarr;](#1-introdução-a-html)

O CSS é composto por regras. Cada regra é composta por um seletor e um bloco de declarações. O seletor é utilizado para selecionar um ou mais elementos HTML. O bloco de declarações é utilizado para adicionar estilos e comportamentos aos elementos HTML.

```css
seletor {
    propriedade: valor;
}
```

No exemplo acima, o seletor é `seletor` e o bloco de declarações é `propriedade: valor;`. O seletor pode ser um elemento HTML, uma classe ou um id. A propriedade é o estilo ou comportamento que será adicionado ao elemento HTML. O valor é o valor da propriedade.

## Como adicionar CSS ao seu site?
[&uarr;](#1-introdução-a-html)

> 💡 Para experimentar os exemplos abaixo, crie um novo projeto no Visual Studio Code e crie um arquivo chamado `index.html`. Evite copiar e colar os exemplos abaixo. Digite os exemplos abaixo para praticar. 

> Para criar um novo projeto, faça o seguinte:
> 1. Abra o Visual Studio Code.
> 2. Clique no menu "Arquivo" -> "Abrir Pasta".
> 3. Crie uma pasta chamada `segundo-projeto`.
> 5. Salve a pasta `segundo-projeto` dentro da pasta `Documentos`.
> 6. Clique no menu "Arquivo" -> "Novo Arquivo".
> 7. Crie um arquivo chamado `index.html`. O arquivo `index.html` é o arquivo principal do site.
> 8. Abra o projeto no navegador usando a ferramenta `live server`.

Para adicionar CSS ao seu site, você pode utilizar a tag `<style>`. Para demonstrar, vamos adicionar CSS ao nosso site. Para isso, siga os passos abaixo:

1. Abra o arquivo `index.html` no Visual Studio Code.
2. Adicione a tag `<style>` dentro da tag `<head>`.
3. Adicione o código CSS dentro da tag `<style>`.

O resultado final deve ser parecido com o código abaixo:

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Livraria</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon">
        <meta name="description" content="Livraria do IFC">
        <meta name="keywords" content="IFC, Professor, Informática, Web Design">
        <meta name="robots" content="index, follow">
        <meta name="author" content="Fabricio Bizotto">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            h1 {
                color: red;
                background-color: black;
            }
            p {
                color: blue;
                background-color: yellow;
            }
        </style>
    </head>
    <body>
        <h1>Livraria</h1>
        <p>Faça doações ou empréstimos de livros no campus.</p>
    </body>
</html>
```

Perceba que o resultado final é um título vermelho com fundo preto. Isso acontece porque o seletor `h1` seleciona todos os elementos `<h1>` e adiciona a cor vermelha e o fundo preto. O resultado final também é um parágrafo azul com fundo amarelo. Isso acontece porque o seletor `p` seleciona todos os elementos `<p>` e adiciona a cor azul e o fundo amarelo.

## Como adicionar CSS em um arquivo externo?
[&uarr;](#1-introdução-a-html)

Para adicionar CSS em um arquivo externo, você pode utilizar a tag `<link>`. Vale ressaltar que é uma boa prática adicionar o CSS em um arquivo externo. Para demonstrar, vamos adicionar CSS em um arquivo externo. Para isso, siga os passos abaixo:

1. Crie um arquivo chamado `estilo.css` dentro da pasta `segundo-projeto`.
2. Mover o código css do exemplo anterior para o arquivo `estilo.css`.
3. Adicione a tag `<link>` com os atributos `rel` e `href` dentro da tag `<head>`. O atributo `rel` deve ter o valor `stylesheet`. O atributo `href` deve ter o valor `estilo.css`.
4. Abra o projeto no navegador usando a ferramenta `live server`.

O resultado final deve ser parecido com o código abaixo:

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Livraria</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon">
        <meta name="description" content="Livraria do IFC">
        <meta name="keywords" content="IFC, Professor, Informática, Web Design">
        <meta name="robots" content="index, follow">
        <meta name="author" content="Fabricio Bizotto">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <!-- Alteração -->
        <link rel="stylesheet" href="estilo.css">
    </head>
    <body>
        <h1>Livraria</h1>
        <p>Faça doações ou empréstimos de livros no campus.</p>
    </body>
</html>
```

## Seletores de Elemento
[&uarr;](#1-introdução-a-html)

O seletor de elemento é utilizado para selecionar um ou mais elementos HTML. Como seletor, podemos usar uma `tag`, um `id` ou uma `classe`. Para demonstrar, vamos alterar o código do nosso site para adicionar um estilo ao título, ao parágrafo e ao link. Para isso, siga os passos abaixo:

```css
/* estilos.css */
#main {
    font-family: monospace;
}
h1 {
    color: red;
    background-color: black;
}
p.blue {
    color: blue;
}
p.red {
    color: red;
}
p.green {
    color: green;
}
.center {
    color: magenta;
    text-decoration: none;
    font-size: 20px;
}
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        ...
    </head>
    <body>
        <div id="main">
            <h1>Livraria</h1>
            <p class="blue">Faça doações ou empréstimos de livros no campus.</p>
            <p class="red">Faça doações ou empréstimos de livros no campus.</p>
            <p class="green">Faça doações ou empréstimos de livros no campus.</p>
            <a class="center" href="#">GitHub</a>
        </div>
    </body>
</html>
```

O resultado final com as alterações de estlo podem ser visualizados abaixo:

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <style>
            #main {
    font-family: monospace;
}
h1 {
    color: red;
    background-color: black;
}
p.blue {
    color: blue;
}
p.red {
    color: red;
}
p.green {
    color: green;
}
.center {
    color: magenta;
    text-decoration: none;
    font-size: 20px;
}
        </style>
    </head>
    <body>
        <div id="main">
            <h1>Livraria</h1>
            <p class="blue">Faça doações ou empréstimos de livros no campus.</p>
            <p class="red">Faça doações ou empréstimos de livros no campus.</p>
            <p class="green">Faça doações ou empréstimos de livros no campus.</p>
            <a class="center" href="#">GitHub</a>
        </div>
    </body>
</html>
