import { signOut } from "firebase/auth";
import { auth } from "../data/firebase"
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <button style={{width: "auto"}} onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default Logout;
