import Detail from '@pages/Detail';
import Found from '@pages/Found';
import Home from '@pages/Home';
import Mine from '@pages/Mine';
import Login from '@pages/auth/Login';
import {
  HeaderStyleInterpolators,
  TransitionPresets,
  TransitionSpecs,
} from '@react-navigation/stack';

const headerStyleInterpolator = HeaderStyleInterpolators.forUIKit;
export const Pages = {
  Detail: {
    screen: Detail,
    options: {
      title: '详情',
      headerStyleInterpolator,
    },
  },
  Found: {
    screen: Found,
    options: {
      title: '发现',
      headerStyleInterpolator,
    },
  },
  Login: {
    screen: Login,
    options: {
      title: '登录',
      ...TransitionPresets.ModalTransition,
    },
  },
};
const tabsConfig = (props: any) => {
  return {
    // @ts-ignore
    tabBarVisible: !props.route.state || props.route.state.index === 0,
  };
};
export const Tabs = {
  Home: {
    screen: Home,
    options: {
      ...tabsConfig,
      tabBarLabel: '首页',
    },
  },
  Mine: {
    screen: Mine,
    options: {
      ...tabsConfig,
      tabBarLabel: '我的',
    },
  },
};
