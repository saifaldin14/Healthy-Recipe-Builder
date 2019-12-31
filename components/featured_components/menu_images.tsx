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
    ImageBackground
} from "react-native";
import { Button } from 'native-base';
import { createStackNavigator, createAppContainer, withNavigation } from 'react-navigation';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import Featured_Drinks from './featured_drinks';

class Menu_Image extends Component {

    render() {
        return (
          <View>
            <IndicatorViewPager
                style={{height:200}}
                indicator={this._renderDotIndicator()}>
                <View>
                  <Featured_Drinks imagePath = {require('../../assets/featured/drinks/featured_veggie_tea.jpg')}
                    description = "Fresh Veggie Tea"/>
                </View>
                <View>
                  <Featured_Drinks imagePath = {require('../../assets/featured/drinks/featured_macchiato.jpg')}
                    description = "Homemade Brew Macchiato"/>
                </View>
                <View>
                  <Featured_Drinks imagePath = {require('../../assets/featured/drinks/featured_lemonade.jpg')}
                    description = "Ice Cold Lemonade"/>
                </View>

            </IndicatorViewPager>
          </View>
        );
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }
}
export default withNavigation(Menu_Image);

const styles = StyleSheet.create({
});
