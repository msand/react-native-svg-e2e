import React from 'react';
import Svg, { G, Path, Text } from 'react-native-svg';

const SvgComponent = props => (
  <Svg width={300} height={100} {...props}>
    <G fill="none" stroke="#000" strokeWidth={3}>
      <Path d="M0 1.5h300M1.5 0v100" />
    </G>
    <G fill="red">
      <Path d="M0 0h3v3H0zM297 0h3v3h-3zM0 97h3v3H0z" />
    </G>
    <G fontSize={14} fontFamily="Verdana">
      <Text x={10} y={20}>
        {'(0,0)'}
      </Text>
      <Text x={240} y={20}>
        {'(300,0)'}
      </Text>
      <Text x={10} y={90}>
        {'(0,100)'}
      </Text>
    </G>
  </Svg>
);

export default SvgComponent;
