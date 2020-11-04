import React from 'react';
import {View, Image, Text} from 'react-native';

const BottomNav = (props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={props.icon} style={{width: 26, height: 26}} />
      <Text
        style={{
          fontSize: 10,
          color: props.active ? '#43AB4A' : '#545454',
          marginTop: 4,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default BottomNav;
