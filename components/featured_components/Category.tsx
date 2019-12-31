import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";
import { Button } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class Category extends Component {
	public props: any;

    render() {
        return (
           <View style={{ height: 135, width: 135, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd', paddingTop: 10 }}>
                <Button style={{ flex: 2, width: null, height: null }}
                  onPress = {() => this.props.navigation.navigate('Featured_Order')}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius: 50 }}
                    />
                </Button>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
});
