// import { useEffect } from "react";
import UploadImageForm from "../components/UploadImageForm";
import Logout from "../components/Logout";

const Admin = () => {
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // eslint-disable-next-line no-unused-vars
  //       const uid = user.uid;
  //     } else {
  //       console.log("user is logged out");
  //     }
  //   });
  // }, []);

  return (
    <div>
      <h2>Admin</h2>
      <div className="splitFlexContainer">
        <div className="left">
          <UploadImageForm />
        </div>
        <div className="right" style={{ flexDirection: "column" }}>
          <Logout />
          <div>
            <p>
              Upload the image, for best results have it as small and compressed
              as you&apos;re comfortable with.
            </p>
            <p>
              The filename will automatically adjust to fix any spaces and capitalization when saving. 
              You can name them however you want.
            </p>
            <p>
              Height and Width are the ratio sizes you want. Such as 4:3.
            </p>
            <p>
              Name, size, medium, and date are what will show up in the captions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
