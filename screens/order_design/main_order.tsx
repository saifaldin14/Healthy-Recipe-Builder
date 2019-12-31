import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, AsyncStorage, Alert } from "react-native";
import Animated from "react-native-reanimated";
import Icon from "react-native-vector-icons";
import { tabs, TAB_SIZE, TAB_COLUMNS } from "../../screens/order_design/Tab";
import SortableTab from "./Sortable_Tab";
import { createStackNavigator, createAppContainer, withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1d1e"
  }
});
const { Value } = Animated

//export default () => {
class Main_Order extends Component {

  constructor(props) {
    super(props);
    this.state = {
      l : [],
      t : []
    }

  }
  async componentDidMount() {
    g = [0,1,2,3, 4]
    h = []
    try {
      let value = await AsyncStorage.getItem('0')
      for (let i in value) {
        h.push(Number(value[i]))
      }
    } catch (error) {
      console.log(error)
    }
    if (h === undefined || h.length == 0) {
      g = [0,1,2,3, 4]
    } else {
      g = h
    }
    this.setState({ l : g })
  }
  render () {
    const arr = tabs.map((tab, index) => {

      val = 0;
      Alert.alert("Processing Order", "Your order will appear momentarily")
      if (this.state.l.includes(index)) {
        val = tab;
      }
      return val;
    });

    const offsets = arr.map((tab, index) => ({
        x: new Value(index % TAB_COLUMNS === 0 ? 0 : TAB_SIZE),
        y: new Value(Math.floor(index / TAB_COLUMNS) * TAB_SIZE)
    }));
    return (
        <View style={styles.container}>
          {arr.map((tab, index) => (
              <SortableTab key={tab.id} {...{ tab, index, offsets }} />
          ))}
        </View>
    );
  }
}
export default withNavigation(Main_Order);
