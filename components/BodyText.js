import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default BodyText = props =>( 
           <Text style={{...styles.bodyText, ...props.style}}>
                       {props.children}
           </Text>
           
); 

const styles = StyleSheet.create({
    bodyText:{
        fontFamily:'inter-extrabold', 
        color:'red',
        fontSize:18
    }
})