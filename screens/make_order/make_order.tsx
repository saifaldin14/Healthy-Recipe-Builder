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
    TouchableOpacity,
    AsyncStorage,
    Alert
} from "react-native";
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Left, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createAppContainer, withNavigation } from 'react-navigation';
import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import Menu_Image from '../components/featured_components/menu_images';
import Button from 'react-native-button';

const cards = [
  {
    text: 'Lemonade',
    id: "0",
    name: 'Lemonade',
    image: require('../../assets/featured/drinks/featured_lemonade.jpg'),
  },
  {
    text: 'Macchiato',
    id: "1",
    name: 'Macchiato',
    image: require('../../assets/featured/drinks/featured_macchiato.jpg'),
  },
  {
    text: 'Veggie Tea',
    id: "2",
    name: 'Veggie Tea',
    image: require('../../assets/featured/drinks/featured_veggie_tea.jpg'),
  },
  {
    text: 'Burger',
    id: "3",
    name: 'Burger',
    image: require("../../assets/featured/foods/burger.jpg"),
  },
  {
    text: 'Sandwich',
    id: "4",
    name: 'Sandwich',
    image: require("../../assets/featured/foods/sandwhich.jpg"),
  },
  {
    text: 'Pizza',
    id: "5",
    name: 'Pizza',
    image: require("../../assets/featured/foods/pizza.jpg"),
  },
];

class MakeOrder extends React.Component  {

  constructor(props) {
    super(props);
    this.state =  {

    };

  }

  list = ""
  makeList (id) {
    this.list += id
    Alert.alert("Updated order!")
  }

  onSave = async () => {
    try {
      AsyncStorage.setItem("0", this.list)
      //AsyncStorage.setItem(id, id);
      Alert.alert("Thank you for your purchase!", "See the customize tab to change the order of your purchase")
    } catch (error) {
      console.log(error);
    }

  }

  //console.log(this.state.drink)

  render() {
    const { onScroll = () => {} } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
          <ScrollView
              scrollEventThrottle={16}>
              <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                    Choose your order
                </Text>
              </View>
              <View>
              <Button
                containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
                disabledContainerStyle={{backgroundColor: 'grey'}}
                style={{fontSize: 20,}}
                onPress = {() => this.onSave()}>
                Done!
              </Button>
                <DeckSwiper
                  dataSource={cards}
                  renderItem={item =>
                    <Card style={{ elevation: 3 }}>
                      <CardItem>
                        <Left>
                          <Thumbnail source={item.image} />
                          <Body>
                            <Text>{item.text}</Text>
                            <Text note>Browse Our Menu!</Text>
                          </Body>
                        </Left>
                      </CardItem>
                      <CardItem cardBody>
                        <Image style={{ height: 300, flex: 1 }} source={item.image} />
                      </CardItem>
                      <CardItem>
                        <Icon.Button
                            name="plus-circle"
                            backgroundColor="#3b5998"
                            onPress = {() => this.makeList(item.id)}>
                            {"Add "+ item.name+ "to menu"}
                        </Icon.Button>
                      </CardItem>
                    </Card>
                  }
                />
              </View>
          </ScrollView>
      </SafeAreaView>
    );
  }
} export default withNavigation(MakeOrder);

const styles = StyleSheet.create({

});
