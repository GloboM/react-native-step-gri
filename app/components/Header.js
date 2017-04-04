
import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>

  )
}

const styles = {
  viewStyle: {
    height: 60,
    //padding: 20,
    paddingTop:17,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    //borderBottomWidth:2,
    //borderBottomColor: '#F3F3F3'
    shadowColor: 'black',
    shadowOffset: { width:0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 23
  }
}

export default Header;
