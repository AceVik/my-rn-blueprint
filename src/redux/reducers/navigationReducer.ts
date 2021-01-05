import { getType } from 'typesafe-actions';
import { copyObject } from '../../utils';
import { NavigationContainerRef } from '@react-navigation/native';
import {
  initNavigation,
  NavigationAction
} from '../actions';

export interface NavigationState {
  navigator: NavigationContainerRef | null;
}

export const INITIAL_NAVIGATION_STATE: NavigationState = {
  navigator: null
};

export const navigationReducer = (
  state: NavigationState = copyObject(INITIAL_NAVIGATION_STATE),
  action: NavigationAction
): NavigationState => {
  switch (action.type) {
    case getType(initNavigation):
      return { ...state, navigator: action.payload };

    default:
      return state;
  }
};