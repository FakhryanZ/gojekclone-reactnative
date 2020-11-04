import React, {Component} from 'react';
import {View} from 'react-native';
import MainFeature from '../../../components/molecules/MainFeature';

import goride from '../../../assets/icon/go-ride.png';
import gocar from '../../../assets/icon/go-car.png';
import gobluebird from '../../../assets/icon/go-bluebird.png';
import gosend from '../../../assets/icon/go-send.png';
import godeals from '../../../assets/icon/go-deals.png';
import gopulsa from '../../../assets/icon/go-pulsa.png';
import gofood from '../../../assets/icon/go-food.png';
import gomore from '../../../assets/icon/go-more.png';

class HomeMainFeature extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 18,
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginBottom: 18,
          }}>
          <MainFeature featureName="GO-RIDE" featureIcon={goride} />
          <MainFeature featureName="GO-CAR" featureIcon={gocar} />
          <MainFeature featureName="GO-BLUEBIRD" featureIcon={gobluebird} />
          <MainFeature featureName="Go-SEND" featureIcon={gosend} />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}>
          <MainFeature featureName="Go-DEAlS" featureIcon={godeals} />
          <MainFeature featureName="Go-PULSA" featureIcon={gopulsa} />
          <MainFeature featureName="Go-FOOD" featureIcon={gofood} />
          <MainFeature featureName="MORE" featureIcon={gomore} />
        </View>
      </View>
    );
  }
}

export default HomeMainFeature;
