import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
const db = getFirestore();
const auth = getAuth();

const signOut = async () => {
    try {
        await signOut(auth)
        return true
    } catch (error) {
        return false
    }
};