import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
// We pull the name of the Fat-Arrow function we declare in the button
// instantiation inside the album-detail
const Button = ({ onPress, children }) => {
    const { buttonStyle, buttonTextStyle } = styles;
    return (
        <TouchableOpacity
        /* we use onPress to handle 'click' events
         * and use the name of the Fat-Arrow function
         */
        onPress={onPress}
        style={buttonStyle}
        >
            <Text style={buttonTextStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonTextStyle: {
        alignSelf: 'center',
        color: '#007AFF',
        fontSize: 16,
        fontWeight: '500',
        padding: 10,
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#000',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007AFF',
        marginLeft: 5,
        marginRight: 5,
    }
};

export default Button;
