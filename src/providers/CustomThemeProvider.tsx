import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useTheme } from '@theme/index';

interface Props {
    // reverse?: boolean;
}

export const CustomThemeProvider: React.FC<Props> = ({children}) => {
    const theme = useTheme();

    return (
        <ThemeProvider
            theme={theme}>
            {children}
        </ThemeProvider>
    );
};
