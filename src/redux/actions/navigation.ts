import { ActionType, createAction } from 'typesafe-actions';
import { NavigationContainerRef } from '@react-navigation/native';

export const initNavigation = createAction('@@INIT/NAVIGATION')<NavigationContainerRef>();

export type NavigationAction = ActionType<
    typeof initNavigation
>;