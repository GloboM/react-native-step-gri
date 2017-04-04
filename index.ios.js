//
// import { AppRegistry } from 'react-native';
// import App from './app/App';
//
// AppRegistry.registerComponent('section5', () => App)


import React from 'react';
import { Text, View, AppRegistry } from 'react-native';
import Header from './app/components/Header';
import AlbumList from './app/components/AlbumList';

const App = () => (
  <View>
    <Header headerText={'Albums'}/>
    <AlbumList />
  </View>

)

 AppRegistry.registerComponent('section5', () => App)
