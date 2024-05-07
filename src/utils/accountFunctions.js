import { signOut } from "firebase/auth";
import { auth } from "../data/firebase";

async function login(email, password) {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return response;
}

function checkAccount() {
  //TODO: Change this to firebase auth
  fetch("/api/isLoggedIn")
    .then((response) => {
      if (response.ok) {
        return true;
      } else {
        return false;
      }
    })
    .catch((error) => {
      console.error("Error checking authentication status:", error);
    });
  return false;
}

function logout() {
  signOut(auth)
    .then(() => {
      console.log("Signed out successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}

export { login, logout, checkAccount };
