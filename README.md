# pokeapiapp

Projeto simples feito em React-Native com Typescript, consumindo a [PokéAPI](https://pokeapi.com)

## Design do app

Principal inspiração e fonte de alguns ícones do projeto foram os trabalhos do [Daniel Motta](https://dribbble.com/DanielMots), em especial o seu design da [Pokedex App Resouce](https://www.sketchappsources.com/free-source/3989-pokedex-app-sketch-freebie-resource.html).

Neste projeto foi utilizado styled-components. Nos arquivos ./styled.d.ts e scr/theme.ts é possível se configurar o tema do aplicativo utilizando o ThemeProvider do styled-components.

## Configurando o ambiente

Para iniciar o projeto sugere-se a leitura desta página da Rocketseat para configuração do seu ambiente de desenvolvimento de acordo com o seu sistema operacional: [Docs da Rocketseat sobre React Native](https://react-native.rocketseat.dev)

## Principais scripts

Na pasta principal do projeto, os seguintes comandos são possíveis ser executados:

### `yarn android`

Executa o app para Android, abrindo o Emulador Android Studio, e o servidor Metro.

### `yarn ios`

Executa o app para IOS, abrindo o Simulador do Xcode, e o servidor Metro.

### `yarn test`

Executa as rotinas de teste da aplicação.

### `yarn start`

Inicia somente o servidor da aplicação, utilizado, maioria dos casos, quando a aplicação já está instalada no dispositivo ou emulador.

### `yarn lint`

Este comando executar o Linter instalado no projeto. Neste caso, foi aplicado o Eslint em conjunto com o Prettier.

## Organização do projeto

### Principais pastas dentro de ./src

 - /assets
	 - Armazena recursos da aplicação como imagens e ícones.
 - /components
	 - Armazena os principais componentes da aplicação, que podem ser utilizados em outras páginas
- /pages
	- Armazena as telas da aplicação
- /routes
	- Armazena os componentes de navegação da aplicação, utilizando neste caso, react-navigation.





