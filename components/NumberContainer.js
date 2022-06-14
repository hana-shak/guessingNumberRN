import React from 'react';
import { View, StyleSheet, useWindowDimensions , Text} from 'react-native';
import Colors from '../constants/Colors';

const NumberContainer = props => {

    const { height} = useWindowDimensions(); 
    //const marginHeightChanges = height < 100 && width > 300 ? 3 : 30 
    const paddingChanges = height <= 414 ? 0 : 30 

    return (
        <View style={[styles.container, {padding : paddingChanges}]} >
           {/* style={[styles.container, {margin : marginHeightChanges}]} */}
           {/* <Text>{height}</Text> */}
           {props.children}
          
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:Colors.accent,
        //padding:5,
        borderRadius:10,
        marginVertical:5,
        alignItems:'stretch',
        justifyContent:'center',

    },
    number:{
        color:Colors.primary,
        fontSize:15, 
    }
});

export default NumberContainer; 