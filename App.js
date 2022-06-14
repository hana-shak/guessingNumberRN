import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGame from './screens/StartGame';
import GameOver from './screens/GameOverScreen';
import { useFonts } from 'expo-font';


export default function App() {

  const [userNum, setUserNum] = useState();
  const [rounds, setRound] = useState(0); 

  const [fontsLoaded] = useFonts({
    'inter-black': require('./assets/fonts/Inter-BlackItalic.otf'),
    'inter-extrabold': require('./assets/fonts/Inter-ExtraBold.otf'),
    'inter-v': require('./assets/fonts/Inter-V.ttf')

  }); 

  if(!fontsLoaded){ return <AppLoading  /> ;}


  const setUserNumHandler = selectNum => {
    setUserNum(selectNum);
    setRound(0);
  };

  const gameoverHandler = numofrounds => {
    setRound(numofrounds); 
  }; 

  const startAgainHandler = () => {
    setUserNum('');
    setRound(0);
  }; 
  
let content = <GameScreen  onGamingStart={setUserNumHandler } />;

  if(userNum && rounds <= 0 ){
     content = <StartGame userChoice={userNum}  onGameOver={gameoverHandler} /> 
  } else if(rounds > 0 ){
    content = <GameOver 
                    RoundsNum ={rounds} 
                    RealNum={userNum}   
                    starting={startAgainHandler}   
                        /> 
  }
  
  
 
  return (
    <View style={styles.screen}>
     <Header title="Guess A Number" /> 
       {content}
    </View>
  );
 
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    
  },
});
