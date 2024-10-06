/* eslint-disable @typescript-eslint/no-explicit-any */
import firestore from '@react-native-firebase/firestore';
import { User, Workout } from '../types';

// Add user data to Firestore
export const addUserData = async (uid: string, userData: User): Promise<void> => {
  try {
    await firestore().collection('users').doc(uid).set(userData);
    console.log('User data added to Firestore');
  } catch (error: any) {
    console.error('Error adding user data:', error.message);
  }
};

// Get user data from Firestore
export const getUserData = async (uid: string): Promise<User | undefined> => {
  try {
    const userDoc = await firestore().collection('users').doc(uid).get();
    if (userDoc.exists) {
      const userData = userDoc.data() as User;
      console.log('User data:', userData);
      return userData;
    } else {
      console.log('No such user!');
    }
  } catch (error: any) {
    console.error('Error getting user data:', error.message);
  }
};

// Add workout data for a user
export const addWorkout = async (uid: string, workoutData: Workout): Promise<void> => {
  try {
    await firestore().collection('users').doc(uid).collection('workouts').add(workoutData);
    console.log('Workout added for user');
  } catch (error: any) {
    console.error('Error adding workout data:', error.message);
  }
};

// Get all workouts for a user
export const getWorkouts = async (uid: string): Promise<Workout[] | undefined> => {
  try {
    const workoutsSnapshot = await firestore().collection('users').doc(uid).collection('workouts').get();
    const workouts: Workout[] = [];
    workoutsSnapshot.forEach(doc => workouts.push(doc.data() as Workout));
    console.log('Workouts:', workouts);
    return workouts;
  } catch (error: any) {
    console.error('Error fetching workouts:', error.message);
  }
};