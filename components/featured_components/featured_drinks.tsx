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
    Button,
    TouchableOpacity
} from "react-native";
//import { Button } from 'native-base';
import { createStackNavigator, createAppContainer, withNavigation } from 'react-navigation';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
//import {drinkType} from '../../screens/featured_screens/featured_orders';

const { height, width } = Dimensions.get('window')
//global.drinkType = "Coffee"

//<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 10, paddingTop: 10, paddingBottom: 10}}>
//    <Image source={require('../../assets/featured/drinks/featured_lemonade.jpg')}
//        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: width - 70, height: 85, resizeMode: 'cover', borderRadius: 50}}
//    />
//    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
//      <Text>Centered text</Text>
//    </View>
//</View>
class Featured_Drinks extends Component {
	public state: any;
	public props: any;
	public navigate: any;

  constructor(props) {
    super(props);
    global.drinkType = 'Coffee';
    this.state = {
    };
  }

  navButton(drink_type) {
    switch (drink_type){
      case 'Ice Cold Lemonade':
        global.drinkType = "Lemonade";
        break;
      case 'Homemade Brew Macchiato':
        global.drinkType = "Coffee";
        break;
      case 'Fresh Veggie Tea':
        global.drinkType = "Tea"
        break;
    }
    //global.drinkType = drink_type
    //console.log(global.drinkType)
    this.props.navigation.navigate('Featured_Order');
  }
    render() {
      const { navigate } = this.props.navigation;
        return (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 10, paddingBottom: 10}}>
          <TouchableOpacity style = {{backgroundColor: 'transparent', width: '100%', height: '100%'}} onPress={() => {this.navButton(this.props.description)}}>
            <ImageBackground source={this.props.imagePath} style={{width: '100%', height: '100%'}}>
                <View style={{position: 'absolute', top: 115, left: 0, right: 0, bottom: 0, alignItems:'center'}}>
                   <Text style={{fontSize: 22, fontWeight: 'bold', backgroundColor: 'rgba(10, 10, 10, 0.5)', color: 'rgba(255, 255, 255, 1)'}}>
                    {this.props.description}
                  </Text>
                </View>
            </ImageBackground>
            </TouchableOpacity>
          </View>
        );
    }
}
export default withNavigation(Featured_Drinks);
const styles = StyleSheet.create({
});
