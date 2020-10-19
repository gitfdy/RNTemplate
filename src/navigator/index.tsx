import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
  TransitionPresets,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '@pages/auth/Login';
import {Pages, Tabs} from '@navigator/pages';

const TabStack = createBottomTabNavigator();
const RootStack = createStackNavigator();
const screenOptions = {
  headerTitleAlign: 'center',
  gestureEnabled: true,
  headerTintColor: '#333',
  headerBackTitleVisible: false,
};
type RootStackParamList = {
  [routerName: string]: undefined;
};
export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

function TabStackScreen() {
  return (
    <TabStack.Navigator>
      {Object.entries({
        ...Tabs,
      }).map(([name, component]) => (
        <TabStack.Screen
          key={name}
          options={component.options ? component.options : {}}
          name={name}
          component={component.screen}
        />
      ))}
    </TabStack.Navigator>
  );
}

function RootStackScreen() {
  return (
    // @ts-ignore
    <RootStack.Navigator headerMode={'float'} screenOptions={screenOptions}>
      <RootStack.Screen
        options={{headerShown: false}}
        name={'Tab'}
        component={TabStackScreen}
      />

      {Object.entries({
        ...Pages,
      }).map(([name, component]) => (
        <RootStack.Screen
          key={name}
          options={
            component.options
              ? component.options
              : {
                  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
                }
          }
          name={name}
          component={component.screen}
        />
      ))}
    </RootStack.Navigator>
  );
}

export default class extends React.PureComponent {
  render() {
    return (
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    );
  }
}
