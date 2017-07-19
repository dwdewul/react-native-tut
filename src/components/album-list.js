import React, { Component } from 'react';
import { View } from 'react-native';
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

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />);
    }

    // render the component to the screen upon calling this class
    render() {
        console.log(this.state);
        return (
            <View>
                { this.renderAlbums() }
            </View>
        );
    }
}

export default AlbumList;
