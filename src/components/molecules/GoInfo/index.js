import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const GoInfo = (props) => {
  return (
    <View style={{paddingHorizontal: 16}}>
      <View
        style={{
          height: 15,
          width: 60,
          marginLeft: -4,
        }}>
        <Image
          source={props.logo}
          style={{
            height: undefined,
            width: undefined,
            resizeMode: 'contain',
            flex: 1,
          }}
        />
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 17,
          color: '#1C1C1C',
          marginTop: 15,
          marginBottom: 20,
        }}>
        Complete your profile
      </Text>
      <View style={{flexDirection: 'row', marginBottom: 16}}>
        <View>
          <Image source={props.facebookLogo} />
        </View>
        <View style={{marginLeft: 16, flex: 1}}>
          <Text style={{fontSize: 15, color: '#4A4A4A', fontWeight: 'bold'}}>
            Connect with Facebook
          </Text>
          <Text
            style={{
              color: '#4A4A4A',
              fontSize: 14,
              fontWeight: 'normal',
              width: '70%',
            }}>
            Log in faster without verification code
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#61A756',
          paddingHorizontal: 12,
          paddingVertical: 11,
          alignSelf: 'flex-end',
          borderRadius: 4,
        }}>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
          }}>
          CONNECT
        </Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: '#E8E9ED',
          borderBottomWidth: 1,
          marginBottom: 20,
          marginTop: 16,
        }}
      />
    </View>
  );
};

export default GoInfo;
