import React from 'react';
import { Text } from 'react-native';
import Card from './card';
import CardDetail from './card-detail';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardDetail>
                <Text>{props.album.title}</Text>
            </CardDetail>
        </Card>
    );
};

export default AlbumDetail;
