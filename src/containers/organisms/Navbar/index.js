import React, {Component} from 'react';
import {View} from 'react-native';
import BottomNav from '../../../components/molecules/BottomNav';

import iconHome from '../../../assets/icon/home.png';
import iconHomeActive from '../../../assets/icon/home-active.png';
import iconOrder from '../../../assets/icon/order.png';
import iconHelp from '../../../assets/icon/help.png';
import iconInbox from '../../../assets/icon/inbox.png';
import iconAccount from '../../../assets/icon/account.png';

class Navbar extends Component {
  render() {
    return (
      <View
        style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
        <BottomNav icon={iconHomeActive} title="Home" active />
        <BottomNav icon={iconOrder} title="Orders" />
        <BottomNav icon={iconHelp} title="Help" />
        <BottomNav icon={iconInbox} title="Inbox" />
        <BottomNav icon={iconAccount} title="Account" />
      </View>
    );
  }
}

export default Navbar;
