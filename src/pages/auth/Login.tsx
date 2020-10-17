import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '@navigator/index';
interface IProps {
  navigation: RootStackNavigation;
}
export default class extends React.PureComponent<IProps> {
  toBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };
  render() {
    return (
      <View>
        <Text>Login</Text>
        <Button title={'恢复'} onPress={this.toBack} />
      </View>
    );
  }
}
