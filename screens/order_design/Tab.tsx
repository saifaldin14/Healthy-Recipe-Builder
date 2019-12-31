import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

interface Tab {
  id: number;
  name: string;
  thumbnail: number;
}

export const TAB_COLUMNS = 2;
export const TAB_SIZE = Dimensions.get("window").width / TAB_COLUMNS;
export const tabs: Tab[] = [
  {
    id: 0,
    name: "Lemonade",
    thumbnail: require('../../assets/featured/drinks/featured_lemonade.jpg')
  },
  {
    id: 1,
    name: "Macchiato",
    thumbnail: require('../../assets/featured/drinks/featured_macchiato.jpg')
  },
  {
    id: 2,
    name: "Tea",
    thumbnail: require('../../assets/featured/drinks/featured_veggie_tea.jpg')
  },
  {
    id: 3,
    name: "Burger",
    thumbnail: require("../../assets/featured/foods/burger.jpg")
  },
  {
    id: 4,
    name: "Sandwhich",
    thumbnail: require("../../assets/featured/foods/sandwhich.jpg")
  },
  {
    id: 5,
    name: "Pizza",
    thumbnail: require("../../assets/featured/foods/pizza.jpg")
  }
];
const styles = StyleSheet.create({
  container: { width: TAB_SIZE, height: TAB_SIZE },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderRadius: 16,
    margin: 16
  }
});

export interface TabProps {
  tab: Tab;
}

export default ({ tab: { thumbnail } }: TabProps) => {
  return (
    <View style={styles.container}>
      <Image source={thumbnail} style={styles.image} />
    </View>
  );
};
