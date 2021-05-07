import firebase from "firebase/app"; 
import "firebase/firestore"; 
import "firebase/auth"; 

const config = {
    apiKey: "AIzaSyDgu3dYgb5hT8LKtz2KVpGVTzycC8-lm80",
    authDomain: "cake-app-22705.firebaseapp.com",
    projectId: "cake-app-22705",
    storageBucket: "cake-app-22705.appspot.com",
    messagingSenderId: "1001982007137",
    appId: "1:1001982007137:web:4291a1295975b4c55a1720"
};


firebase.initializeApp(config); 


export const createUserProfileDocument = async (userAuth, additionalData) => { 
    if(!userAuth) return; 
    
    const userRef = firestore.doc(`users/${userAuth.uid}`); 

    const snapShot = await userRef.get(); 
    
    if(!snapShot.exists) {
        const { displayName, email, photoURL } = userAuth; 
        const createdAt = new Date(); 
        try {
            await userRef.set({
                displayName, 
                email, 
                photoURL,
                createdAt, 
                ...additionalData
            })
        } catch(error) {
            console.log("Error creating user", error.message); 
        }
    } 

    return userRef;

}

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

const googleProvider = new firebase.auth.GoogleAuthProvider(); 
const facebookProvider = new firebase.auth.FacebookAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account"}); 
facebookProvider.setCustomParameters({'display': 'popup'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider); 
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export default firebase; 