import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
firebase.initializeApp(firebaseConfig);


export const signUpEmailAndPassword = (email,password,name) =>{
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res) => {
      // Signed in 
      console.log("sign up")
      console.log(res.user)
      updateUserName(name)
      return res.user;
      
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
    });
}

export const signInUserNameAndPassword = (email,password) =>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((res) => {
      debugger
      // Signed in
      console.log(res.user)
       return res.user;
      // ...
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage)
    });
}

export const googleSignInHandler = () =>{
    let provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        let credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        let token = credential.accessToken;
        // The signed-in user info.
        let user = result.user;
        return user;
        // ...
    }).catch((error) => {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;
        // ...
    });
}

export const signOutHandler = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}

    const updateUserName = name =>{
        const user = firebase.auth().currentUser;
        user.updateProfile({displayName:name})
        .then(res => {
        console.log("username updated")
        })
        .catch(err => {
        console.log(err)
        })
  }