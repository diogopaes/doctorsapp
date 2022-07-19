import React from 'react';
import Toast from 'react-native-toast-message';

import { ThemeProvider } from 'styled-components';
import { SchedulesProvider } from './hooks/Schedules';
import { Routes } from './routes';
import theme from './theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <SchedulesProvider>
                <Routes />
                <Toast />
            </SchedulesProvider>
        </ThemeProvider>
    );
};

export default App;
