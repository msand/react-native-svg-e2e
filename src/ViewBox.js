import React from 'react';
import Svg, { Path, Text } from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={300}
    height={200}
    viewBox="0 0 1500 1000"
    preserveAspectRatio="none"
    {...props}
  >
    <Path fill="#ff0" stroke="#00f" strokeWidth={12} d="M0 0h1500v1000H0z" />
    <Path fill="red" d="M750 100L250 900h1000z" />
    <Text x={100} y={600} fontSize={200} fontFamily="Verdana">
      {'Stretch to fit'}
    </Text>
  </Svg>
);

export default SvgComponent;
