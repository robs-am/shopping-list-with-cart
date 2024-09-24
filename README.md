## Aplicativo de Carrinho de Compras

Um aplicativo de carrinho de compras do mundo real construído com React/Typescript/Vite.

## Stack Tecnológica
- React / Typescript / Vite
- SASS / CSS Modules

### Capturas de Tela (animadas)

#### Visão Desktop
![Desktop](https://github.com/mihailgaberov/shopping-cart-app/blob/main/screenshots/desktop.gif)

#### Visão Mobile
![Mobile](https://github.com/mihailgaberov/shopping-cart-app/blob/main/screenshots/mobile.gif)

## Funcionalidades do Aplicativo:

### I. Página de Lista de Produtos
1. A página de lista de produtos exibe todos os produtos disponíveis, mostrando a imagem em diferentes resoluções e um botão para adicioná-lo ao carrinho.
2. A página de lista de produtos é utilizável em dispositivos desktop e móveis, utilizando uma grade de três itens por linha em desktop e de dois ou um item, dependendo da largura da tela em mobile.

### II. Seção do Carrinho
1. O carrinho lista todos os produtos adicionados, exibindo o título e uma opção para atualizar a quantidade desejada.
2. A lógica do componente de quantificador permite ao usuário adicionar quantos itens desejar, mas se a contagem for reduzida a zero, o produto será removido do carrinho.
3. O carrinho exibe o preço unitário e total de todos os itens adicionados

### Demonstração
:star: [Aplicativo de Carrinho de Compras](https://shopping-cart-app-coral.vercel.app/) :star:



### Running the app locally

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed.
2. Install [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable/).
3. From the project folder, execute the following commands:

To install dependencies:
```shell
  yarn
```
To run the app:

```shell
  yarn run dev
```