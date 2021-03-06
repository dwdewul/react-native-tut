// Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/album-list';
// create a Component
const App = () => (
    //This is the root view
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums!'} />
        <AlbumList />
    </View>
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
