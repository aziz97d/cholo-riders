import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { googleSignInHandler, signInUserNameAndPassword, signUpEmailAndPassword } from './FirebasePartial';
import './Login.css';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation();
    const history = useHistory();
    const {form} = location.state || {form: {pathname:"/"}};
    const [isNewUser,setIsNewUser] = useState(false)
    const [userInfo, setUserInfo] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    const checkValidation = (e) =>{
        let isFormValid = true;
        const inputName = e.target.name;
        if(inputName === "name"){
        console.log(e.target.value)
        isFormValid = true;;
        
        }
        if(inputName === "email"){
        console.log(e.target.value)
        const isEmailValid =  /\S+@\S+\.\S+/.test(e.target.value)
        isFormValid = isEmailValid;
        }
        if(inputName === "password"){
        console.log(e.target.value)
        const passwordIsValid = e.target.value.length>6;
        const passwordHasNumber = /\d{1}/.test(e.target.value);
        isFormValid = passwordIsValid && passwordHasNumber;
        }
        // if(inputName === "confirmPassword"){
        //     console.log(e.target.value)
        //     const passwordIsValid = e.target.value.length>6;
        //     const passwordHasNumber = /\d{1}/.test(e.target.value);
        //     isFormValid = passwordIsValid && passwordHasNumber;
        // }
        if(isFormValid){
        let newUser = {...userInfo};
        newUser[e.target.name] = e.target.value;
        setUserInfo(newUser)
        }
    }
    const googleSignIn = async () => {
        
        googleSignInHandler().then(res => setLoggedInUser(res)).then(history.replace(form))
        

    }
    const formSubmitHandle = (e) =>{
        const {name,email,password} = userInfo;
        if(isNewUser && name && email && password){
            signUpEmailAndPassword(email,password,name).then(res => setLoggedInUser(res))
            history.replace(form)
        }
        if(!isNewUser && email && password){

            signInUserNameAndPassword(email,password).then(res => setLoggedInUser(res)).then(history.replace(form))
            
        }
        
        e.preventDefault();
    }
    const haveAccountHandler = (e) =>{
        setIsNewUser(!isNewUser)
    }
    return (
        <div className="login-form">
            {
                isNewUser && <p>Create Account</p>
            }
            {
                !isNewUser && <p>Login</p>
            }
            <form onSubmit={formSubmitHandle}>
                { isNewUser && <input type="text" autoComplete="off" onBlur={checkValidation} className="input-field" name="name" placeholder="Name" id=""/>}
                <input type="text" autoComplete="off" required onBlur={checkValidation} className="input-field" name="email" placeholder="Username or Email" id=""/>
                
                <input type="password" onBlur={checkValidation} required className="input-field" name="password" placeholder="Password" id=""/>
                {isNewUser && <input type="password" onBlur={checkValidation} className="input-field" name="confirmPassword" placeholder="Confirm Password" id=""/>}
                {isNewUser && <input type="submit" className="submit-button"  value="Create an Account"/>}
                {!isNewUser && <input type="submit" className="submit-button"  value="Sign In"/>}
            </form>
            
            {isNewUser && <span className="already-account-span">Already Account ? <strong onClick={haveAccountHandler}>Login</strong></span>}
            {!isNewUser && <span className="already-account-span">Don't Have Account ? <strong onClick={haveAccountHandler}>Create</strong></span>}
            <button onClick={googleSignIn} className="thirdParty-button">Continue with Google</button>
            <button className="thirdParty-button">Continue with Facebook</button>
        </div>
    );
};

export default Login;