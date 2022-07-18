import React from 'react';
import Toast from 'react-native-toast-message';

import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';
import theme from './theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Routes />
            <Toast />
        </ThemeProvider>
    );
};

export default App;
