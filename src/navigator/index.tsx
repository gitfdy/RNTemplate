import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
  TransitionPresets,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '@pages/auth/Login';
import Home from '@pages/Home';
import Mine from '@pages/Mine';
import Detail from '@pages/Detail';
import Found from '@pages/Found';

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
      <TabStack.Screen
        options={(props) => {
          return {
            // @ts-ignore
            tabBarVisible: !props.route.state || props.route.state.index === 0,
          };
        }}
        name="Home"
        component={Home}
      />
      <TabStack.Screen name="Mine" component={Mine} />
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
      <RootStack.Screen
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
        name={'Login'}
        component={Login}
      />
      <RootStack.Screen name={'Detail'} component={Detail} />
      <RootStack.Screen name={'Found'} component={Found} />
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
