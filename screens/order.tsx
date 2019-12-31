import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import { Button } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import Menu_Image from '../components/featured_components/menu_images';

const { height, width } = Dimensions.get('window')

export default class Order extends React.Component  {
	public state: any;
	public startHeaderHeight: any;

  constructor(props) {
    super(props);
    this.state = {
    };

  }

  componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

  render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView
                    scrollEventThrottle={16}>
                    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>

                        <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                            What can we help you find?
                        </Text>
                        <Text style={{ fontWeight: '100', marginTop: 10 }}>
                            Browse our featured drinks to view
                            nutritional information, price, etc.
                        </Text>

                        <Menu_Image/>
                      </View>

                      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 24, fontWeight: '700' }}>
                            Create Order Menu
                        </Text>
                        <Text style={{ fontWeight: '100', marginTop: 10 }}>
                            Design and create your own order and set the items you want.
                            Click to design your order
                        </Text>
                        <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                          <TouchableOpacity style = {{backgroundColor: 'transparent', width: '100%', height: '100%'}} onPress={() => {this.props.navigation.navigate('MakeOrder');}}>
                            <Image
                                style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 30, borderWidth: 1, borderColor: '#dddddd' }}
                                source={require('../assets/featured/menu/menu.jpg')}
                              />
                          </TouchableOpacity>
                        </View>

                        <Text style={{ fontSize: 24, fontWeight: '700' }}>
                            Customize order of your purchases!
                        </Text>
                        <Text style={{ fontWeight: '100', marginTop: 10 }}>
                            View your order. Drage the items to customize the order of your dishes!
                        </Text>
                        <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                          <TouchableOpacity style = {{backgroundColor: 'transparent', width: '100%', height: '100%'}} onPress={() => {this.props.navigation.navigate('Main_Order');}}>
                            <Image
                                style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 30, borderWidth: 1, borderColor: '#dddddd' }}
                                source={require('../assets/featured/menu/restaurant.jpg')}
                              />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
});
