import React, { Component } from "react";
import { View, Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { theme } from "../constants";


const { WIDTH, HEIGHT } = Dimensions.get('window');

export default class Divider extends Component {
  render() {
    const {
      color,
      margin,
      width,
      height,
      style,
      ...props
    } = this.props;

    const blockStyles = [
      styles.divider,
      margin && {margin: margin},
      width && {width: WIDTH * width},
      height && {height: HEIGHT * height},
      color && {backgroundColor: color}, // custom backgroundColor
    ];

    return (
      <View
        style={blockStyles}
        {...props}
      />
    );
  }
}

export const styles = StyleSheet.create({
  divider:{
    backgroundColor: '#C5CCD6',
    height: 1.5,
    width: 300,
    margin: 10,
  },  
});
