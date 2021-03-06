import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import coco from '../constants/Colors';

const Header = props => {
    return (
          <View style={styles.header}>
            <Text style={styles.headerTitle}> {props.title}</Text>
         </View>
)};

const styles = StyleSheet.create({
     header:{
         width:'100%',
         height:90,
         paddingTop:5,
         backgroundColor:coco.primary,
         alignItems:'center',
         justifyContent:'center',
     },

     headerTitle:{
        color:'blue',
        fontSize:18,
    }

});

export default Header; 