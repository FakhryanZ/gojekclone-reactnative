/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, View, ScrollView} from 'react-native';

import search from './src/assets/icon/search.png';
import promo from './src/assets/icon/promo.png';

import bannerSepakBola from './src/assets/dummy/sepak-bola.jpg';
import bannerFood from './src/assets/dummy/food-banner.jpg';

import logoWhite from './src/assets/logo/white.png';
import logoGoFood from './src/assets/logo/go-food.png';
import logoGojek from './src/assets/logo/gojek.png';
import facebookConnet from './src/assets/dummy/facebook-connect.png';

import goFoodKfc from './src/assets/dummy/go-food-kfc.jpg';
import goBakmi from './src/assets/dummy/go-food-gm.jpg';
import goOrins from './src/assets/dummy/go-food-orins.jpg';
import goBanka from './src/assets/dummy/go-food-banka.jpg';
import goAyamBoss from './src/assets/dummy/go-food-pak-boss.jpg';

import SearchBar from './src/components/molecules/SearchBar';
import GoNews from './src/components/molecules/GoNews';
import GoInfo from './src/components/molecules/GoInfo';
import GoBanner from './src/components/molecules/GoBanner';
import ScrollableProduct from './src/containers/organisms/ScrollableProduct';
import Navbar from './src/containers/organisms/Navbar';
import HomeGopay from './src/containers/organisms/HomeGopay';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={{flex: 1, paddingTop: 15}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/* search bar */}
          <SearchBar searchIcon={search} promoIcon={promo} />
          {/* gopay */}
          <HomeGopay />
          {/* main feature */}
          <HomeMainFeature />
          {/* barrier */}
          <View
            style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}}
          />
          {/* news section */}
          <GoNews banner={bannerSepakBola} logo={logoWhite} />
          {/* interal information section */}
          <GoInfo logo={logoGojek} facebookLogo={facebookConnet} />
          {/* gofood banner */}
          <GoBanner banner={bannerFood} logo={logoGoFood} />
          {/* nearby go-food */}
          <ScrollableProduct
            logo={logoGoFood}
            food1={goFoodKfc}
            food2={goBakmi}
            food3={goOrins}
            food4={goBanka}
            food5={goAyamBoss}
          />
        </ScrollView>

        {/* bottom navigation */}
        <Navbar />
      </View>
    </>
  );
};

export default App;
