import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import GopayFeature from '../../../components/molecules/GopayFeature';

import logo from '../../../assets/icon/gopay.png';
import pay from '../../../assets/icon/pay.png';
import nearbay from '../../../assets/icon/nearby.png';
import topup from '../../../assets/icon/topup.png';
import more from '../../../assets/icon/more.png';

class HomeGopay extends Component {
  render() {
    return (
      <View style={{marginHorizontal: 17, marginTop: 8}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#2C5FB8',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            padding: 14,
          }}>
          <Image source={logo} />
          <Text style={{fontWeight: 'bold', fontSize: 17, color: 'white'}}>
            Rp. 50.000
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 20,
            paddingBottom: 14,
            backgroundColor: '#2F65BD',
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
          }}>
          <GopayFeature title="Pay" icon={pay} />
          <GopayFeature title="Nearby" icon={nearbay} />
          <GopayFeature title="Top Up" icon={topup} />
          <GopayFeature title="More" icon={more} />
        </View>
      </View>
    );
  }
}

export default HomeGopay;
