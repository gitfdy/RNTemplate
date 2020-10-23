import React from 'react';
import {View, StatusBar} from 'react-native';
import {RootSiblingParent} from 'react-native-root-siblings';
import * as Sentry from '@sentry/react-native';
import Navigator from '@navigator/index';
Sentry.init({
  dsn:
    'https://896be92c508d4c1ca3ffc26772898b98@o466067.ingest.sentry.io/5479863',
});
export default class extends React.PureComponent {
  componentDidMount() {
    // eslint-disable-next-line no-unreachable
    // Sentry.nativeCrash();
  }

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
