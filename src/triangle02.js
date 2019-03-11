import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';

class SvgComponent extends Component {
  state = {};
  onRef = ref => {
    if (ref && !this.state.base64) {
      ref.toDataURL(
        base64 => {
          this.setState({ base64 });
        },
        { width: 200, height: 200 },
      );
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Svg
          ref={this.onRef}
          viewBox="0 0 400 400"
          width="100%"
          {...this.props}
          height="250"
        >
          <Path fill="none" stroke="#00f" d="M1 1h398v398H1z" />
          <Path
            d="M100 100h200L200 300z"
            fill="red"
            stroke="#00f"
            strokeWidth={3}
          />
        </Svg>
        <View
          style={{
            width: '100%',
            flex: 1,
            marginTop: 5,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {this.state.base64 && (
            <Image
              source={{ uri: `data:image/png;base64,${this.state.base64}` }}
              style={{ width: 250, height: 250 }}
            />
          )}
        </View>
      </View>
    );
  }
}

export default SvgComponent;
