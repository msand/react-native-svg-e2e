import React from 'react';
import Svg, { G, Rect } from 'react-native-svg';

const SvgComponent = props => (
  <Svg width="5cm" height="5cm" {...props}>
    <G fill="red">
      <Rect x="1cm" y="1cm" width="1cm" height="1cm" />
      <Rect x="3cm" y="1cm" width="1cm" height="1cm" />
    </G>
    <G fill="#00f">
      <Rect x="1cm" y="3cm" width="1cm" height="1cm" />
      <Rect x="3cm" y="3cm" width="1cm" height="1cm" />
    </G>
    <Rect
      x=".01cm"
      y=".01cm"
      width="4.98cm"
      height="4.98cm"
      fill="none"
      stroke="#00f"
      strokeWidth=".02cm"
    />
  </Svg>
);

export default SvgComponent;
