import { useEffect } from "react";
import UploadImageForm from "../components/UploadImageForm";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../data/firebase";
import Logout from "../components/Logout";

const Admin = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // eslint-disable-next-line no-unused-vars
        const uid = user.uid;
      } else {
        console.log("user is logged out");
      }
    });
  }, []);

  return (
    <div>
      <h2>Admin</h2>
      <div className="splitFlexContainer">
        <div className="left">
          <UploadImageForm />
        </div>
        <div className="right">
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Admin;
