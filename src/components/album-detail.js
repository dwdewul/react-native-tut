import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './card';
import CardDetail from './card-detail';
import Button from './button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    //optional refactor
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        titleTextStyle,
        albumImageStyle,
        buttonStyle,

    } = styles;
    return (
        <Card>
            <CardDetail>
                <View style={thumbnailContainerStyle}>
                    { /* Images do not fill their containers by default*/ }
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={titleTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardDetail>

            <CardDetail>
                <Image
                style={albumImageStyle}
                source={{ uri: image }}
                />
            </CardDetail>

            <CardDetail>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy {title}
                </Button>
            </CardDetail>
        </Card>
    );
};

const styles = {
        headerContentStyle: {
            flexDirection: 'column',
            justifyContent: 'space-around',
        },
        thumbnailStyle: {
            height: 50,
            width: 50,
        },
        titleTextStyle: {
            fontSize: 18,
        },
        thumbnailContainerStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 10,
        },
        albumImageStyle: {
            height: 300,
            flex: 1,
            width: null
        },
        // buttonStyle: {
        //     flexDirection: 'row',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        // },
};

export default AlbumDetail;
