import React from 'react';
import Svg, { Rect, Polyline, Path, Circle, Text } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */
/*
  <title>Example cubic01- cubic Bézier commands in path data</title>
  <desc>
    Picture showing a simple example of path data
    using both a "C" and an "S" command,
    along with annotations showing the control points
    and end points
  </desc>
*/
const SvgComponent = props => (
  <Svg width="5cm" height="4cm" viewBox="0 0 500 400" {...props}>
    <Rect
      x={1}
      y={1}
      width={498}
      height={398}
      fill="none"
      stroke="blue"
      strokeWidth={1}
    />
    <Polyline
      points="100,200 100,100"
      fill="none"
      stroke="rgb(136, 136, 136)"
      strokeWidth={2}
    />
    <Polyline
      points="250,100 250,200"
      fill="none"
      stroke="rgb(136, 136, 136)"
      strokeWidth={2}
    />
    <Polyline
      points="250,200 250,300"
      fill="none"
      stroke="rgb(136, 136, 136)"
      strokeWidth={2}
    />
    <Polyline
      points="400,300 400,200"
      fill="none"
      stroke="rgb(136, 136, 136)"
      strokeWidth={2}
    />
    <Path
      d="M100,200 C100,100 250,100 250,200
         S400,300 400,200"
      fill="none"
      stroke="red"
      strokeWidth={5}
    />
    <Circle
      cx={100}
      cy={200}
      r={10}
      fill="none"
      stroke="rgb(136, 136, 136)"
      strokeWidth={2}
    />
    <Circle
      cx={250}
      cy={200}
      r={10}
      fill="none"
      stroke="rgb(136, 136, 136)"
      strokeWidth={2}
    />
    <Circle
      cx={400}
      cy={200}
      r={10}
      fill="none"
      stroke="rgb(136, 136, 136)"
      strokeWidth={2}
    />
    <Circle cx={100} cy={100} r={10} fill="rgb(136, 136, 136)" stroke="none" />
    <Circle cx={250} cy={100} r={10} fill="rgb(136, 136, 136)" stroke="none" />
    <Circle cx={400} cy={300} r={10} fill="rgb(136, 136, 136)" stroke="none" />
    <Circle cx={250} cy={300} r={9} fill="none" stroke="blue" strokeWidth={4} />
    <Text x={25} y={70} fontFamily="Verdana">
      {'M100,200 C100,100 250,100 250,200'}
    </Text>
    <Text x={325} y={350} fontFamily="Verdana" textAnchor="middle">
      {'S400,300 400,200'}
    </Text>
  </Svg>
);

export default SvgComponent;
