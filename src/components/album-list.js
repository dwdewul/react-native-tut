import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './album-detail';

class AlbumList extends Component {
    // set an initial state for our class
    // we can use a literal object here because we are *initializing*
    // we only use 'state' with class-based Components
    state = { albums: [] };

    // automatically fetch our JSON data
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            // we use 'setState' to modify the object instead of hardcoding
            .then(response => this.setState({ albums: response.data }));
    }

    /* map over our available data (albums) and return data
     * for each available piece of data and set the key as the title
     * we typically would use the unique ID as the key
    */
    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />);
    }

    // render the component to the screen upon calling this class
    render() {
        // console.log(this.state);

        /* This is the top level component for our list
        * and it contains all the album 'cards'
        * We must implement a *** ScrollView *** here so that
        * we can scroll through the list of albums we display
        */
        return (
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
        );
    }
}

export default AlbumList;
