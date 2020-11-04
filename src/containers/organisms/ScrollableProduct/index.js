import React, {Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import ScrollableItem from '../../../components/molecules/ScrollableItem';

class ScrollableProduct extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            height: 15,
            width: 55,
            marginLeft: 16,
          }}>
          <Image
            source={this.props.logo}
            style={{
              width: undefined,
              height: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
            paddingHorizontal: 16,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 17, color: '#1C1C1C'}}>
            Nearby Restaurants
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>
            See All
          </Text>
        </View>
        <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
          <ScrollableItem img={this.props.food1} title="KFC Aeon Mall" />
          <ScrollableItem img={this.props.food2} title="Bakmi Aeon Mall" />
          <ScrollableItem img={this.props.food3} title="Martabak Orins" />
          <ScrollableItem img={this.props.food4} title="Martabak Banka" />
          <ScrollableItem img={this.props.food5} title="Ayam Bakar Pak Boss" />
        </ScrollView>
        <View
          style={{
            borderBottomColor: '#E8E9ED',
            borderBottomWidth: 1,
            marginBottom: 20,
            marginTop: 16,
            marginHorizontal: 16,
          }}
        />
      </View>
    );
  }
}

export default ScrollableProduct;
