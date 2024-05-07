import { signOut } from "firebase/auth";
import { auth } from "../data/firebase"

function logout() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Signed out successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}

export { logout };