import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { navigationRef } from '../navigate/root-utils';

export type RootStackParamsList = {
    MainNavigation: {};
};

const RootStack = createStackNavigator<RootStackParamsList>();

interface LoadingProps {
    show: () => void
    hide: () => void
}

declare global {
    interface Window {
        connection: any;
        _store: any;
        loadingIndicator: LoadingProps;
    }
}

export function RootNavigation(params?: {}) {

    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer ref={navigationRef}>
                <RootStack.Navigator
                    initialRouteName={'MainNavigation'}
                    screenOptions={{
                        headerShown: false,
                        gestureEnabled: false,
                    }}>
                    <RootStack.Screen name={'MainNavigation'} component={MainNavigation} />
                </RootStack.Navigator>
            </NavigationContainer>
        </View>
    );
}
