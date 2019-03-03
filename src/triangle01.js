import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = props => (
  <Svg width="4cm" height="4cm" viewBox="0 0 400 400" {...props}>
    <Path fill="none" stroke="#00f" d="M1 1h398v398H1z" />
    <Path d="M100 100h200L200 300z" fill="red" stroke="#00f" strokeWidth={3} />
  </Svg>
);

export default SvgComponent;
