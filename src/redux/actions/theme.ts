import { ActionType, createAction } from 'typesafe-actions';
import { ThemeType } from '../../theme';

export const switchTheme = createAction('@@THEME/SWITCH')<ThemeType>();

export type ThemeAction = ActionType<
    typeof switchTheme
>;