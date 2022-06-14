import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const Card = props => {
    return(
    <View style={{...styles.card, ...props.style}}>
         {props.children}
   </View>
   
)};

const widthDevices = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card:{
          shadowColor:'black',
          shadowOffset: {width: 0 ,height:2},
          shadowRadius:6,
          shadowOpacity:0.3,
          elevation:8,
          backgroundColor:'white',
          padding: widthDevices < 380 ? 10 : 20,
          margin: widthDevices < 380 ? 5 : 10,
          borderRadius:10,
        }
});

export default Card; 