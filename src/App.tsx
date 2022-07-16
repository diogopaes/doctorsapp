import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Schedules } from './screens/Schedules';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Schedules />
        </ThemeProvider>
    );
};

export default App;
