import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const GoNews = (props) => {
  return (
    <View
      style={{
        paddingTop: 16,
        paddingHorizontal: 16,
        paddingBottom: 20,
      }}>
      <View style={{position: 'relative'}}>
        <Image
          source={props.banner}
          style={{
            height: 170,
            width: '100%',
            borderRadius: 7,
          }}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: 'black',
            opacity: 0.26,
            borderRadius: 6,
          }}
        />
        <View
          style={{
            height: 15,
            width: 55,
            position: 'absolute',
            top: 10,
            left: 16,
          }}>
          <Image
            source={props.logo}
            style={{
              width: undefined,
              height: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
          />
        </View>
      </View>
      <View
        style={{
          paddingBottom: 20,
          borderBottomColor: '#E8E9ED',
          borderBottomWidth: 1,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#1C1C1C',
            marginTop: 16,
          }}>
          GO-NEWS
        </Text>
        <Text style={{fontSize: 14, color: '#7A7A7A', marginBottom: 11}}>
          Dimas Drajat selamatkan penalti, Timnas U-23 kalahkan Brunei
        </Text>
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
            READ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GoNews;
