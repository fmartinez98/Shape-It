import { login, register } from "../authentication";
import { addUserData, addWorkout, getUserData } from "./response";

// Register and add user data
export const handleRegister = async () => {
    const userCredential = await register('test@example.com', 'password123');
    if (userCredential) {
      const { uid } = userCredential.user;
      await addUserData(uid, {
        name: 'John',
        lastname: 'Doe',
        email: 'test@example.com',
        phone: '123-456-7890',
      });
    }
  };
  
  // Login and fetch user data
export const handleLogin = async () => {
    const userCredential = await login('test@example.com', 'password123');
    if (userCredential) {
      const { uid } = userCredential.user;
      const userData = await getUserData(uid);
      console.log('Fetched user data:', userData);
    }
  };
  
  // Add workout for the user
export const handleAddWorkout = async (uid: string) => {
    await addWorkout(uid, {
      date: new Date().toISOString(),
      duration: 60,
      exercises: ['push-ups', 'squats', 'planks'],
    });
  };