/* eslint-disable @typescript-eslint/no-explicit-any */
import auth from '@react-native-firebase/auth';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const register = async (email: string, password: string): Promise<FirebaseAuthTypes.UserCredential | void> => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    console.log('User registered:', userCredential.user);
    return userCredential;
  } catch (error: any) {
    console.error('Registration Error:', error.message);
  }
};

export const login = async (email: string, password: string): Promise<FirebaseAuthTypes.UserCredential | void> => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    console.log('User logged in:', userCredential.user);
    return userCredential;
  } catch (error: any) {
    console.error('Login Error:', error.message);
  }
};

// Logout
export const logout = async (): Promise<void> => {
  try {
    await auth().signOut();
    console.log('User signed out');
  } catch (error: any) {
    console.error('Logout Error:', error.message);
  }
};