/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput, Image} from 'react-native';

const SearchBar = (props) => {
  return (
    <View style={{marginHorizontal: 17, flexDirection: 'row'}}>
      <View style={{position: 'relative', flex: 1}}>
        <TextInput
          placeholder="What do you want to eat? "
          style={{
            borderWidth: 1,
            borderColor: '#E8E8E8',
            borderRadius: 25,
            height: 40,
            fontSize: 13,
            paddingLeft: 45,
            paddingRight: 20,
            backgroundColor: 'white',
            marginRight: 18,
          }}
        />
        <Image
          source={props.searchIcon}
          style={{position: 'absolute', top: 7, left: 10}}
        />
      </View>
      <View
        style={{
          width: 35,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={props.promoIcon} />
      </View>
    </View>
  );
};

export default SearchBar;
