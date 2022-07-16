import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';
import theme from './theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
    );
};

export default App;
