import { useState } from 'react';
import AuthContent from '../components/auth/AuthContent';
import  {createUser } from '../utils/auth';
import LoadingOverlay  from '../components/ui/LoadingOverlay';
function SignupScreen(){
    const [isAuthenticating, setIsAuthernticating] = useState(false);
    
    async function signupHandler({ email, password}){
       setIsAuthernticating(true);
       await createUser({ email, password})
       setIsAuthernticating(false);
    };
    if(isAuthenticating){
        <LoadingOverlay  message = "Loading..." />
    }

    return <AuthContent onAuthenticate={signupHandler} />
}

export default SignupScreen;