import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { createStackNavigator, createAppContainer, withNavigation } from 'react-navigation';
import Menu_Image from '../../components/featured_components/menu_images';
import * as dataJSON from '../../jSON_data/drinks.json';
//import {drinkType} from '../../components/featured_components/featured_drinks';
const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

const word = dataJSON.Lemonade.Calories

class Featured_Order extends React.Component  {
	public state: any;
	public props: any;
	public refs: any;
	public onScroll: any;

  constructor(props) {
    super(props);
    this.state =  {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows([
        'Calories',
        'Nutritional Information',
        'Ingredients',
        'Locations',
        'Price',
        'Deals',
      ]),

      drink : global.drinkType
    };

    console.log(this.state.drink)
  }

  getImage(name) {
    switch (name) {
      case "Lemonade":
        return require('../../assets/featured/drinks/featured_lemonade.jpg');
      case "Coffee":
        return require('../../assets/featured/drinks/featured_macchiato.jpg');
      case "Tea":
        return require('../../assets/featured/drinks/featured_veggie_tea.jpg');
    }
  }

  //console.log(this.state.drink)

  render() {
    const { onScroll = () => {} } = this.props;
    return (
      <ListView
        ref="ListView"
        style={styles.container}
        dataSource={ this.state.dataSource }
        renderRow={(rowData) => (
          <View key={rowData} style={ styles.row }>
            <Text style={ styles.rowText }>
              { rowData } :
            </Text>
            <Text style={ styles.itemText }>
              {dataJSON[this.state.drink][rowData]}
            </Text>
          </View>
         )}
        renderScrollComponent={props => (
          <ParallaxScrollView
            onScroll={onScroll}

            headerBackgroundColor="#333"
            stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
            parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
            backgroundSpeed={10}

            renderBackground={() => (
              <View key="background">
                <Image style = {{width: window.width, height: PARALLAX_HEADER_HEIGHT}}
                                source={ this.getImage (this.state.drink) }/>
                <View style={{position: 'absolute',
                              top: 0,
                              width: window.width,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                              height: PARALLAX_HEADER_HEIGHT}}/>
              </View>
            )}

            renderForeground={() => (
              <View key="parallax-header" style={ styles.parallaxHeader }>
                <Text style={ styles.sectionSpeakerText }>
                  {dataJSON[this.state.drink].Name}
                </Text>
                <Text style={ styles.sectionTitleText }>
                  {dataJSON[this.state.drink].Message}
                </Text>
              </View>
            )}

            renderStickyHeader={() => (
              <View key="sticky-header" style={styles.stickySection}>
                <Text style={styles.stickySectionText}>{dataJSON[this.state.drink].Name}</Text>
              </View>
            )}

            renderFixedHeader={() => (
              <View key="fixed-header" style={styles.fixedSection}>
                <Text style={styles.fixedSectionText}
                      onPress={() => this.refs.ListView.scrollTo({ x: 0, y: 0 })}>
                  Scroll to top
                </Text>
              </View>
            )}/>
        )}
      />
    );
  }
} export default withNavigation(Featured_Order);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    justifyContent: 'flex-end'
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20
  },
  itemText: {
    fontSize: 15,
    color: "gray"
  }
});
