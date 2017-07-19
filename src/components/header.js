/*
* Creates a header that says "Albums"
*/

// import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// make a Component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

//declare the styles for the Component
const styles = {
    viewStyle: {
        backgroundColor: '#00FF6F',
        justifyContent: 'center', // flex-end, flex-start, center
        alignItems: 'center', // flex-end, flex-start, center
        height: 60,
        paddingTop: 15,
        // marginTop: 10,
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        // borderRadius: 5,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20,
    }
};

// make the component available to other parts of the App
export default Header;
