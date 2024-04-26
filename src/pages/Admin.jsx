import UploadImageForm from "../components/UploadImageForm";

const Admin = () => {
  return (
    <div>
      <h2>Admin</h2>
      <div className="splitFlexContainer">
        <div className="left" ><UploadImageForm /></div>
        <div className="right" ></div>
      </div>
    </div>
  )
};

export default Admin;
