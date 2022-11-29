import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom'

import { theme } from '../src/styles/styles';
import { GlobalStyle } from './styles/global/global';
import { Router } from './Router/Router';
import {BagProvider} from './hooks/bag'


export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BagProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      </BagProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}