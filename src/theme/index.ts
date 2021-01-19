import baseStyled from 'styled-components/native';
import {ReactNativeStyledInterface} from 'styled-components/native';
import { useSelector } from 'react-redux';
import { StateType } from "@redux/index";

type Color = string;

export interface Theme {
    // ts theme definition
    examplePropColor: Color;
}

export const swkLightTheme: Theme =  {
    // light theme props
    examplePropColor: '#ffffff',
};

export const swkDarkTheme: Theme =  {
    // dark theme props
    examplePropColor: '#000000',
};

export type ThemeType = 'light' | 'dark';
export const styled = baseStyled as ReactNativeStyledInterface<Theme>;

export const useTheme = (): Theme => {
    const themeType = useSelector<StateType>(state => state.theme.selectedTheme);

    switch (themeType) {
        case 'light':
            return swkLightTheme;

        case 'dark':
        default:
            return swkDarkTheme;
    }
};

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}