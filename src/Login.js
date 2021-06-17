import React from 'react';
import {GoogleLogin} from 'react-google-login';
import GoogleButton from 'react-google-button';

//google responce 
const responseGoogle = (response) =>{
    console.log(response);
  }

const Login = () =>{
    return(
        <div>
        <GoogleLogin 
          clientId ="623446224587-m0lgj84js7ajoqj4bk150grdt2ja7vfj.apps.googleusercontent.com"
          buttonText = "Login"
          onSuccess ={responseGoogle}
          onFailure ={responseGoogle}
          cookiePolicy = {'single_host_origin'}
          render={renderProps => (
            <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</GoogleButton>
    )}
        />
        </div>
    );
}
export default Login;


