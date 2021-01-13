import 'styled-components/native';

interface IPalette {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      common: {
        red: string;
        white: string;
        gray: string;
        black: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
  }
}
