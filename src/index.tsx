import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/global.scss'
import './services/firebase';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);