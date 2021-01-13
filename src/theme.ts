// theme.ts
import { DefaultTheme } from 'styled-components/native';

export const defaultTheme: DefaultTheme = {
  colors: {
    common: {
      red: '#f00',
      white: '#ffffff',
      gray: '#333',
      black: '#000',
    },
    primary: {
      main: '#f00',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
      contrastText: '#000',
    },
  },
};
