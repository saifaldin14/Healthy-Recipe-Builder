import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Order from './screens/order';
import Featured_Order from './screens/featured_screens/featured_orders';
import Featured_Drinks from './components/featured_components/featured_drinks';
import Menu_Image from './components/featured_components/menu_images';
import Main_Order from './screens/order_design/main_order';
import MakeOrder from './screeans/make_order/make_order';

const DrawerNav = createStackNavigator(
  {
    Order: Order,
    Featured_Order: Featured_Order,
    Featured_Drinks: Featured_Drinks,
    Menu_Image: Menu_Image,
    Main_Order: Main_Order,
    MakeOrder: MakeOrder
  },
  {
    initialRouteName: 'Order',
  }
);
const App = createAppContainer(DrawerNav);
export default App;
