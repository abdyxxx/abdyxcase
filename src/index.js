import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './firebase'
import { configureStore } from '@reduxjs/toolkit';
import cartSliceReducer from './redux/cartSlice';

const store = configureStore({
  reducer: cartSliceReducer,
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#e5e5e5',
    },
    secondary: {
      main: '#000',
    },
    text: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1.25rem',
          '@media (min-width:900px)': {
            fontSize: '1.85rem',
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
