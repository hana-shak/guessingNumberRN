import  PartOfApp  from './PartOfApp';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen.js';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createNativeStackNavigator();
// 500 - #c30b64
//100 - #f9beda
function AuthStack(){
  return(
    <Stack.Navigator 
       screenOptions={{
         headerStyle:{ backgroundColor: '#c30b64'},
         headerTintColor: 'white',
         contentStyle: { backgroundColor: '#f9beda'}
       }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />

    </Stack.Navigator>
  )
};

function AuthenticatedStack(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerStyle:{ backgroundColor: '#c30b64'},
      headerTintColor: 'white',
      contentStyle: { backgroundColor: '#f9beda'}
    }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  )
};

function Navigation(){
  return(
    <NavigationContainer>
      <AuthStack /> 
    </NavigationContainer>
  )
}



export default function App() {
  return (
     //<Par<View> 
     
      <Navigation /> 
    
         );
}; 


