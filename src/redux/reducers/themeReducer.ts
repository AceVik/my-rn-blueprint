import { getType } from 'typesafe-actions';
import { copyObject } from '@utils/index';
import { ThemeType } from '@theme/index';
import {
    switchTheme,
    ThemeAction
} from '../actions';

export interface ThemeState {
    selectedTheme: ThemeType;
}

export const INITIAL_THEME_STATE: ThemeState = {
    selectedTheme: 'light',
};

export const themeReducer = (
    state: ThemeState = copyObject(INITIAL_THEME_STATE),
    action: ThemeAction
): ThemeState => {
    switch (action.type) {
        case getType(switchTheme):
            return { ...state, selectedTheme: action.payload };

        default:
            return state;
    }
};