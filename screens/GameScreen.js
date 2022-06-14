import React,{useState} from 'react';
import {View,
        StyleSheet, 
        Text, 
        TextInput, 
        Button, 
        TouchableWithoutFeedback,
        Keyboard, 
        Alert,
        Image
      } from 'react-native';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import anything from '../constants/Colors';
import Input from '../components/Input' ;
import NumberContainer from '../components/NumberContainer';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import BodyText from '../components/BodyText';
import defaultstyle from '../constants/DefaultStyleSheet';

const GameScreen = props => {
  const [enterVal, setEnterVal] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedVal, setSelectedVal] = useState(); 

  const inputHandler = (enteredInput) => {
    return(
      setEnterVal((enteredInput.replace(/[^0-9]/g , '' )))
    )
  };

  const resetHandler = () => {
    setEnterVal('')
    setConfirmed(false);
  };
  
  
  
  const confirmHandler = () => {
    const choosenVal = parseInt(enterVal); 
    if(isNaN(choosenVal)  || choosenVal <= 0 || choosenVal > 99 ){
      // return; this will do nothing just return to the process itself , then what i need is alert msg 
      Alert.alert('Invalid Input', 'Allowed numbers between 1 & 99', 
                   [{text:'Ok', onPress:resetHandler}]
      ) 
    }
    setSelectedVal(choosenVal);
    setEnterVal('');
    setConfirmed(true);
  };

  
  let confirmOutput ; 
  if(confirmed){ confirmOutput = 
       <Card style={styles.summaryContainer}>
         
         <Text style={styles.texting}>
           You selected
         </Text>

         <NumberContainer>
            <Text>{selectedVal}</Text>
         </NumberContainer>
        
        <Button 
           title='START GAME'
           color={Colors.accent}
           onPress={() => props.onGamingStart(selectedVal)}
        
        /> 
        {/* title={'START GAME'} also be written as title='Start game'  */}
       </Card>

    };
    
  

  return(
    
    <TouchableWithoutFeedback onPress={ Keyboard.dismiss}>
     <View style={styles.screen}>
        <Text style={styles.title}> "The Game Screen!!" </Text>
        <Card style={styles.inputContainer}>
        
            <BodyText style={styles.addedText}  style={defaultstyle.titleText}>
              "Start Your Game"</BodyText>
            <Input  
                blurOnSubmit={false}
                keyboardAppearance='default'
                autoCapitalize='none'
                keyboardType="numeric"              
                maxLength={2}
                onChangeText={inputHandler}
                value={enterVal}

            />
            <View style={styles.buttonContainer}>

              <View style={styles.Button}>
                <Button 
                   title="Reset" 
                   //color="red" 
                   onPress={resetHandler} 
                   color={anything.accent}
                />
              </View>

              <View style={styles.Button}>
                <Button  
                   title="Accept" 
                   //color="blue" 
                   onPress={confirmHandler} 
                   color={anything.primary}
                /> 
              </View>

            </View>
        </Card>  
            {confirmOutput}
        <View style={styles.imageContainer}> 
        <Image 
             source={{uri:'https://image.shutterstock.com/image-vector/purple-1980s-vintage-cyberpunk-neon-600w-1991209949.jpg'}}
          // source={require('../assets/neon.jpg')}
             style={styles.imageSize}
        /> 
        </View>
      </View>
      </TouchableWithoutFeedback>
  )
};
 
const styles = StyleSheet.create({
      screen:{
          flex:1,
          padding:10,
          alignItems:'center',
      },
      title:{
          fontSize:18,
          marginVertical:10,
          fontFamily:'inter-black',
      },
      inputContainer:{
          width:300,
          maxWidth:'80%',
          alignItems:'center',
      },
      buttonContainer:{
          flexDirection:'row',
          width:'100%',
          justifyContent:'space-between',
          paddingHorizontal:15,

      },
      button:{
        width:100,
      },
      summaryContainer:{
        marginTop:5, 
        alignItems:'center', // this could make the box just exactly around the number nothing added nothing less
      },
      texting:{
        alignItems:'center',
      },
      addedText:{
       color:'yellow' 
      },
      imageContainer:{
           width:300,
           height:300,
           borderColor:'green',
           borderRadius:150,
           borderWidth:3,
           marginVertical:5,
           overflow:'hidden'
      }, 
      imageSize:{
        width: '100%' , 
        height: '100%'
      }

});

export default GameScreen; 