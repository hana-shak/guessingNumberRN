import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
//since its a component not called as a screen I can only use hook useNavigator 
import { useNavigation } from '@react-navigation/native';

import FlatButton from '../ui/FlatButton';
import AuthForm from './AuthForm';

function AuthContent({ isLogin, onAuthenticate}){

    const navigation = useNavigation();
    const [credentialsInvalid, setCredentialsInvalid] = useState({
          email:false,
          password:false,
          confirmEmail:false,
          confirmPassword:false
    });

    //Switch between screens Login and Create new user 
    function switchAuthModeHandler(){
        if(isLogin){
            navigation.replace('Signup')
        }else{
            navigation.replace('Login')

        }
    };

    function submitHandler(credentials){
        let { email, confirmEmail, password, confirmPassword } = credentials;

        email = email.trim();
        password = password.trim();

        const emailIsValid = email.includes('@');
        const passwordIsValid = password.length > 6 ;
        const emailsAreEqual = email === confirmEmail;
        const passwordAreEqual = password === confirmPassword;
        
        if(
            !emailIsValid || !passwordIsValid
            || (!isLogin && (!emailsAreEqual || !passwordAreEqual))
        ){
            Alert.alert('Invalid Input', 'Please check your entered credentials.');
            setCredentialsInvalid({
                email:!emailIsValid,
                password:!passwordIsValid,
                confirmEmail:!emailIsValid || !emailsAreEqual,
                confirmPassword:!passwordIsValid || !passwordAreEqual
            });
            console.log(email, password, confirmEmail, confirmPassword);
            return;
        }

        onAuthenticate({ email, password });
        console.log(email, password); 
    }

    return(
       <View style={styles.authContent}>
           <AuthForm
              isLogin={isLogin}
              onSubmit={submitHandler}
              credentialsInvalid={credentialsInvalid}
           />
           <View style={styles.buttons}>
               <FlatButton onPress={switchAuthModeHandler}>
                   {isLogin ? 'Create a new user' : 'Log in instead'}

               </FlatButton>
           </View>
       </View>
    );
};

const styles = StyleSheet.create({
    authContent: {
        marginTop: 64,
        marginHorizontal: 32,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#610440',
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.35,
        shadowRadius: 4,
      },
      buttons: {
        marginTop: 8,
      },
})

export default AuthContent;