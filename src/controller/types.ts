export type User = {
    name: string;
    lastname: string;
    email: string;
    phone: string;
  };
  
export type Workout = {
    date: string;
    duration: number; // in minutes
    exercises: string[]; // list of exercises
    notes?: string;
};
