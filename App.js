/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Image,
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
} from 'react-native';
import iconHome from './icon/home.png';
import iconHomeActive from './icon/home-active.png';
import iconOrder from './icon/order.png';
import iconHelp from './icon/help.png';
import iconInbox from './icon/inbox.png';
import iconAccount from './icon/account.png';

import search from './icon/search.png';
import promo from './icon/promo.png';

import logo from './icon/gopay.png';
import pay from './icon/pay.png';
import nearbay from './icon/nearby.png';
import topup from './icon/topup.png';
import more from './icon/more.png';

import goride from './icon/go-ride.png';
import gocar from './icon/go-car.png';
import gobluebird from './icon/go-bluebird.png';
import gosend from './icon/go-send.png';
import godeals from './icon/go-deals.png';
import gopulsa from './icon/go-pulsa.png';
import gofood from './icon/go-food.png';
import gomore from './icon/go-more.png';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={{flex: 1, paddingTop: 15}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          {/* search bar */}
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
                source={search}
                style={{position: 'absolute', top: 7, left: 10}}
              />
            </View>
            <View
              style={{
                width: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={promo} />
            </View>
          </View>
          {/* gopay */}
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
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={pay} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  Pay
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={nearbay} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  Nearby
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={topup} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  Top Up
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={more} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  More
                </Text>
              </View>
            </View>
          </View>
          {/* main feature */}
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
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={goride} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-RIDE
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={gocar} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-CAR
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={gobluebird} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-BLUEBIRD
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={gosend} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-SEND
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
              }}>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={godeals} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  GO-DEALS
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={gopulsa} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  GO-PULSA
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={gofood} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  GO-FOOD
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={gomore} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  MORE
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* bottom navigation */}
        <View
          style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={iconHomeActive} style={{width: 26, height: 26}} />
            <Text style={{fontSize: 10, color: '#43AB4A', marginTop: 4}}>
              Home
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={iconOrder} style={{width: 26, height: 26}} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Orders
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={iconHelp} style={{width: 26, height: 26}} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Help
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={iconInbox} style={{width: 26, height: 26}} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Inbox
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={iconAccount} style={{width: 26, height: 26}} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Account
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default App;
