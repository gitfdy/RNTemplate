import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '@navigator/index';
interface IProps {
  navigation: RootStackNavigation;
}
export default class extends React.PureComponent<IProps> {
  _to = (routerName: string) => {
    const {navigation} = this.props;
    navigation.navigate(routerName);
  };
  render() {
    return (
      <View>
        <Text style={{marginTop: 200}}>详情</Text>
        <Button title={'跳转到登录'} onPress={() => this._to('Login')} />
        <Button title={'跳转到发现'} onPress={() => this._to('Found')} />
      </View>
    );
  }
}
