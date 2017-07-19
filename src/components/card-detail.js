import React from 'react';
import { View } from 'react-native';

const CardDetail = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#FFF',
        //flex-start, flex-end, space-around, space-between, center
        justifyContent: 'flex-start',
        flexDirection: 'row', //default is 'column', 'row'=horizontal layout
        borderColor: '#DDD',
        position: 'relative',
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
};

export default CardDetail;
