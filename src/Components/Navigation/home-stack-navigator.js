import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from '../Screens/home-screen';
import ShowDetailsScreen from '../Screens/show-details-screen';

const HomeStackNavigator = StackNavigator(
  {
    Main: { screen: HomeScreen },
    ShowDetails: { screen: ShowDetailsScreen },
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  },
);

export default HomeStackNavigator;
