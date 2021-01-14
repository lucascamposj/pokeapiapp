
# pokeapiapp



Projeto simples feito em [React Native](https://reactnative.dev) com [Typescript](https://www.typescriptlang.org), consumindo a [PokéAPI](https://pokeapi.com)

![screenshots](https://user-images.githubusercontent.com/22333534/104534782-afd02600-55f3-11eb-8037-72c3b6a89105.png)

## Design do app

Principal inspiração e fonte de alguns ícones do projeto foram os trabalhos do [Daniel Motta](https://dribbble.com/DanielMots), em especial o seu design da [Pokedex App Resouce](https://www.sketchappsources.com/free-source/3989-pokedex-app-sketch-freebie-resource.html).

Neste projeto foi utilizado [Styled Components](https://styled-components.com). Nos arquivos ./styled.d.ts e scr/theme.ts é possível se configurar o tema do aplicativo utilizando o ThemeProvider do Styled Components.

## Configurando o ambiente

Para iniciar o projeto sugere-se a leitura desta página da Rocketseat para configuração do seu ambiente de desenvolvimento de acordo com o seu sistema operacional: [Docs da Rocketseat sobre React Native](https://react-native.rocketseat.dev)

## Principais scripts

Na pasta principal do projeto, os seguintes comandos são possíveis de serem executados:

### `yarn android`

Executa o app para Android, abrindo o Emulador Android Studio e o servidor Metro.

### `yarn ios`

Executa o app para IOS, abrindo o Simulador do Xcode e o servidor Metro.

### `yarn test`

Executa as rotinas de teste da aplicação.

### `yarn start`

Inicia somente o servidor da aplicação, utilizado, na maioria dos casos, quando a aplicação já está instalada no dispositivo ou emulador.

### `yarn lint`

Este comando executa o linter instalado no projeto. Neste caso, foi aplicado o [Eslint](https://eslint.org) em conjunto com o [Prettier](https://prettier.io).

## Organização do projeto

### Principais pastas dentro de ./src

- /assets

  - Armazena recursos da aplicação como imagens e ícones.

- /components

  - Armazena os principais componentes da aplicação, que podem ser utilizados em outras páginas.

- /pages

  - Armazena as telas da aplicação.

- /routes

  - Armazena os componentes de navegação da aplicação, utilizando neste caso, react-navigation.

## Testes

Para criação de rotinas de testes automatizados, em sua maioria atualmente com testes de snapshots da aplicação, foi utilizado o pacote [Jest](https://jestjs.io) em conjunto com [Enzyme](https://github.com/enzymejs/enzyme).

Os componentes criados na pasta src/components possuem uma pasta /tests com as rotinas de testes para cada componente, além da pasta /\_\_snapshots\_\_, criada automaticamente pelo Enzyme, que armazena os snapshots atuais.

### Comandos para testes

### `yarn test`

Este comando executa as rotinas de testes. Caso o snapshot do componente a ser testado já exista, o teste utilizará o snapshot existente, caso contrário criará um novo snapshot. Ao executar este comando, o Jest cria um diretório na raiz do projeto chamado ./coverage onde são armazenados os arquivos de análise da cobertura de testes do código. 

### `yarn test -u`

Este comando executa as rotinas de testes e funcionalidades do comando anterior, porém sobrescreve todos os snapshots atuais com novos de acordo com o estado atual da aplicação.

## Melhorias futuras

 - Aumentar a cobertura de testes principalmente no componente FullPageList.
 - Verificar warning ao executar o `yarn test` referente à renderização de svgs.
 - Melhorar a interface em geral.
 - Verificar qualidade da componentização do código e suas respectivas props.
 - Modificar os arquivos de testes para Typescript.
