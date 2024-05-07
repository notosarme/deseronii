import { auth } from "../../api/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

// Sign In with Email and Password
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);
    if (userCredential.user) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};

// Sign Out
export const logout = async () => {
  try {
    await auth.signOut();
    return true;
  } catch (error) {
    console.error("Error signing out:", error.message);
    return false;
  }
};