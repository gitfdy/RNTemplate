import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '@navigator/index';
interface IProps {
  navigation: RootStackNavigation;
}
export default class Mine extends React.PureComponent<IProps> {
  _to = (routerName: string) => {
    const {navigation} = this.props;
    navigation.navigate(routerName);
  };
  render() {
    return (
      <View>
        <Text style={{marginTop: 200}}>Mine</Text>
        <Button title={'跳转到登录'} onPress={() => this._to('Login')} />
      </View>
    );
  }
}
