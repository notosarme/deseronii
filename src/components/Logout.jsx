import { logout } from "../utils/accountFunctions";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      logout();
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div>
        <button className="button" onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default Logout;
