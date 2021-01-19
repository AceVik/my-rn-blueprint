import React, { createRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { initNavigation, NavigationAction } from '@redux/actions';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { RootNavigator } from '../navigators/RootNavigator';

export const NavigationProvider: React.FC = () => {
    const dispatch = useDispatch<Dispatch<NavigationAction>>();
    const navigationRef = createRef<NavigationContainerRef>();

    useEffect(() => {
        if (navigationRef.current) {
            dispatch(initNavigation(navigationRef.current));
        }
    }, [ navigationRef, navigationRef.current ]);

    return (
        <NavigationContainer ref={navigationRef}>
            <RootNavigator />
        </NavigationContainer>
    );
};