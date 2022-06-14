import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MainButton from '../components/MainButton';

const GameOver = props => {
    return(
        <View style={styles.screen}> 
            <Text>GAME OVER YA BABE</Text>
            <Text>Number of rounds: {props.RoundsNum}</Text>
            <Text>Number was: {props.RealNum}</Text> 
            {/* <Button title={'Start Again'} onPress={props.starting} />  */}
            <MainButton onPress={props.starting}>Start Again</MainButton>
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center'

    }
});

export default GameOver; 