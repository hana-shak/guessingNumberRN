import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const MainButton = props => {
    return( <TouchableOpacity onPress={props.onPress} >
             <View style={styles.buttonContainer}>
                 <Text style={styles.ButtonText}>
                     {props.children}
                 </Text>
             </View>
           </TouchableOpacity>
    )}; 

const styles = StyleSheet.create({
      buttonContainer:{
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
      },
      ButtonText:{
        color: 'white',
        fontFamily: 'inter-black',
        fontSize: 18
      },
});

export default MainButton; 
