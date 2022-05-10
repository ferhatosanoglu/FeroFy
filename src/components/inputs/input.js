import React, { forwardRef } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Input as RNEInput } from 'react-native-elements';
const Input = forwardRef(({ inputStyle, img, ...props }, ref) => {

    return (
        <RNEInput
            {...props}
            style={inputStyle}
            leftIcon={
                <Image source={img} style={{ height: 24, width: 30 }} />}
        />
    );
},
);

export default Input;

