import {StackNavigationProp} from '@react-navigation/stack';

export interface NavigationModel {
  screen: string;
  params?: NavigationModel | object;
}

export const NavigationUtils = {
  resetGlobalStackWithScreen(
    navigation?: StackNavigationProp<any, any>,
    parentNavigationName?: string,
    params?: any,
  ) {
    if (parentNavigationName) {
      navigation?.navigate(parentNavigationName, params);
    }
  },

  navigate<RouteName extends string>(
    navigation?: StackNavigationProp<any, any>,
    screenName?: RouteName | any,
    args?: any,
  ) {
    if (screenName) {
      return navigation?.navigate(screenName, args);
    }
  },

  push<RouteName extends string>(
    navigation?: StackNavigationProp<any, any>,
    screenName?: RouteName,
    args?:  any,
  ) {
    if (screenName) {
      return navigation?.push(screenName, args);
    }
  },

  goBack(navigation?: StackNavigationProp<any, any>) {
    if (navigation?.canGoBack) {
      navigation?.goBack();
    }
  },
};
