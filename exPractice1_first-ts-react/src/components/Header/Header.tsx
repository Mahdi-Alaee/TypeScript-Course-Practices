import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header: React.FC = () => {
  const auth = useContext(AuthContext);

  useEffect(() => {
    auth?.setUser({ name: "mahdi", email: "xximahdixx@gmail.com" });
  }, []);

  useEffect(() => {
    console.log(auth?.user);
  }, [auth?.user]);

  return (
    <header>
      <button onClick={() => auth?.setUser(null)}>logout</button>
      <h2>{auth?.user?.name || "login"}</h2>
    </header>
  );
};

export default Header;
