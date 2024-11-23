import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function ButtonField({ style, onPress, children }) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            {children}
        </TouchableOpacity>
    );
}
