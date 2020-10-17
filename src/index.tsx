import React from 'react';
import {View, StatusBar} from 'react-native';
import {RootSiblingParent} from 'react-native-root-siblings';
import Navigator from '@navigator/index';
export default class extends React.PureComponent {
  render() {
    return (
      <View style={{flex: 1}}>
        <RootSiblingParent>
          <Navigator />
        </RootSiblingParent>
        <StatusBar />
      </View>
    );
  }
}
