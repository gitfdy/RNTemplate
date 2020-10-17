/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconComponent: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M170.5 448c-11.8 0-21.3-9.6-21.3-21.3v-256c0-11.8 9.6-21.3 21.3-21.3h256c11.8 0 21.3 9.6 21.3 21.3v256c0 11.8-9.6 21.3-21.3 21.3h-256z"
        fill={getIconColor(color, 0, '#CEE8FF')}
      />
      <Path
        d="M426.5 170.7l0.1 255.9s0 0.1-0.1 0.1H170.7s-0.1 0-0.1-0.1V170.8s0-0.1 0.1-0.1h255.8m0-42.7h-256c-23.5 0-42.7 19.2-42.7 42.7v256c0 23.5 19.2 42.7 42.7 42.7h256c23.5 0 42.7-19.2 42.7-42.7v-256c0-23.5-19.2-42.7-42.7-42.7z"
        fill={getIconColor(color, 1, '#298DF7')}
      />
      <Path
        d="M170.5 874.7c-11.8 0-21.3-9.6-21.3-21.3v-256c0-11.8 9.6-21.3 21.3-21.3h256c11.8 0 21.3 9.6 21.3 21.3v256c0 11.8-9.6 21.3-21.3 21.3h-256z"
        fill={getIconColor(color, 2, '#CEE8FF')}
      />
      <Path
        d="M426.5 597.3c0 0.1 0 0.1 0 0l0.1 255.9s0 0.1-0.1 0.1H170.7s-0.1 0-0.1-0.1V597.4s0-0.1 0.1-0.1h255.8m0-42.6h-256c-23.5 0-42.7 19.2-42.7 42.7v256c0 23.5 19.2 42.7 42.7 42.7h256c23.5 0 42.7-19.2 42.7-42.7v-256c0-23.5-19.2-42.7-42.7-42.7z"
        fill={getIconColor(color, 3, '#298DF7')}
      />
      <Path
        d="M597.2 874.7c-11.8 0-21.3-9.6-21.3-21.3v-256c0-11.8 9.6-21.3 21.3-21.3h256c11.8 0 21.3 9.6 21.3 21.3v256c0 11.8-9.6 21.3-21.3 21.3h-256z"
        fill={getIconColor(color, 4, '#CEE8FF')}
      />
      <Path
        d="M853.1 597.3c0.1 0.1 0.1 0.1 0 0l0.1 255.9s0 0.1-0.1 0.1H597.3s-0.1 0-0.1-0.1V597.4s0-0.1 0.1-0.1h255.8m0.1-42.6h-256c-23.5 0-42.7 19.2-42.7 42.7v256c0 23.5 19.2 42.7 42.7 42.7h256c23.5 0 42.7-19.2 42.7-42.7v-256c0-23.5-19.2-42.7-42.7-42.7z"
        fill={getIconColor(color, 5, '#298DF7')}
      />
      <Path
        d="M789.3 144.9H661.1c-15.2 0-29.3 8.1-37 21.3L560 277.3c-7.6 13.2-7.6 29.5 0 42.7l64.1 111.1c7.6 13.2 21.7 21.3 37 21.3h128.3c15.2 0 29.3-8.1 37-21.3l64-111.1c7.6-13.2 7.6-29.5 0-42.7l-64.1-111.1c-7.6-13.1-21.7-21.3-37-21.3z"
        fill={getIconColor(color, 6, '#3C99FE')}
      />
      <Path
        d="M725.2 298.7m-85.3 0a85.3 85.3 0 1 0 170.6 0 85.3 85.3 0 1 0-170.6 0Z"
        fill={getIconColor(color, 7, '#CEE8FF')}
      />
      <Path
        d="M362.5 384h-128c-11.7 0-21.3-9.6-21.3-21.3 0-11.7 9.6-21.3 21.3-21.3h128c11.7 0 21.3 9.6 21.3 21.3 0.1 11.7-9.5 21.3-21.3 21.3z"
        fill={getIconColor(color, 8, '#3C99FE')}
      />
      <Path
        d="M362.5 810.7h-128c-11.7 0-21.3-9.6-21.3-21.3 0-11.7 9.6-21.3 21.3-21.3h128c11.7 0 21.3 9.6 21.3 21.3 0.1 11.7-9.5 21.3-21.3 21.3z"
        fill={getIconColor(color, 9, '#3C99FE')}
      />
      <Path
        d="M789.2 810.7h-128c-11.7 0-21.3-9.6-21.3-21.3 0-11.7 9.6-21.3 21.3-21.3h128c11.7 0 21.3 9.6 21.3 21.3 0 11.7-9.6 21.3-21.3 21.3z"
        fill={getIconColor(color, 10, '#3C99FE')}
      />
    </Svg>
  );
};

IconComponent.defaultProps = {
  size: 18,
};

IconComponent = React.memo ? React.memo(IconComponent) : IconComponent;

export default IconComponent;
