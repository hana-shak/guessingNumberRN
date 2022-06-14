import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet,Text,Button, Alert, ScrollView, FlatList, useWindowDimensions } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Ionicons from '@expo/vector-icons/Ionicons';
import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';

const renderListItem = (numOfRound, itemData) => (
          <View style={styles.listItem}>
              <BodyText> #{numOfRound - itemData.index} </BodyText>
              <BodyText> {itemData.item} </BodyText>
          </View>
      );


       

const generateRandomBetween = (min, max, exclude) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      const rndNum = Math.floor(Math.random() * (max - min)) + min; 
      if(rndNum === exclude){
          return generateRandomBetween(min, max, exclude);
      }else{
          return rndNum; 
      }
}; 


const StartGame = props => {
    const intialGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(intialGuess);

    //const [numofrounds, setNumofRounds] = useState(0); 
    const [pasGuess, setPassGuess] = useState([intialGuess.toString()]);

    let currentLower = useRef(1);
    let currentGreater = useRef(100);

    const {onGameOver , userChoice} = props; 

    const { width, height} = useWindowDimensions(); 

    const marginHeightChanges = height < 380 ? 3 : 6 ; 

    useEffect(()=> {
        if(currentGuess === userChoice){
           // onGameOver(numofrounds);
            onGameOver(pasGuess.length);
        }
    } ,[onGameOver, currentGuess, userChoice]);
        // 'lower' means if u pressed the lower one, 
    const computerguessHandler = direction => {
       
        if((direction === 'lower' && currentGuess < props.userChoice) || 
           (direction === 'greater' && currentGuess > props.userChoice) ){
               Alert.alert('Don\'t lie', 'Not matching guessing', 
               [{text: "Cancel", style: "cancel"}]);
               return;
           }

        if(direction === 'lower'){
            currentGreater.current = currentGuess ; 
           
        } else{
            currentLower.current = currentGuess; 
            
        } 
        const nextGuess = generateRandomBetween(currentLower.current, currentGreater.current, currentGuess); 
        setCurrentGuess(nextGuess); 
        //will change this to currPastGuess
        //setNumofRounds(currentRound => currentRound + 1);
        setPassGuess(currpasguess => [nextGuess.toString(), ...currpasguess]);
        
    };
    

    
  

    return(
        <View style={styles.screen}>
            <Text>Opponent Guess</Text>
        
            <NumberContainer>
            <Text>{currentGuess} </Text>
            </NumberContainer>
           
            
          <Card style={styles.buttonContainer}>
              <MainButton onPress={computerguessHandler.bind(this,'lower')} > 
              <Ionicons name="remove" size={24} color="black" /> 
              </MainButton>
             {/* <Button title="LOWER" 
                     onPress={computerguessHandler.bind(this,'lower')} 
             /> */}
 
           <MainButton onPress={computerguessHandler.bind(this,'greater')}>
           <Ionicons name="add" size={24} color="black" />
           </MainButton>
             {/* <Button title="GREATER" 
                     onPress={computerguessHandler.bind(this,'greater')} 
             /> */}
          </Card>
          <View style={styles.listContainer}>

         {/* Using FlatList */}
          <FlatList 
             
              data={pasGuess}
              renderItem={renderListItem.bind(this, pasGuess.length)}
              keyExtractor={(item) => item}
              
           
          />

          


          {/* <ScrollView> */}
            {/* <Text>{pasGuess}</Text> thius led to be shown in one line */}
           {/* { pasGuess.map( (guess,index) => renderItem(guess, pasGuess.length - index)   )}  */}
         {/* </ScrollView> */}
          </View>
         

        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        width:300,
        maxWidth:'80%',
        justifyContent:'center',
        marginTop:20,
        alignItems:'center',
       

    },
    listContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'80%'


    },
    listItem:{
        borderColor:'#ccc',
        borderWidth:3, 
        marginVertical:10,
        padding:15,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        // width:'80%',

    }

});

export default StartGame; 