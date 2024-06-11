import { createContext, useState, useEffect, useContext } from "react";
import { account } from "../appwirteConfig";
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";

const AuthContext = createContext();

export const AuthProvider = ({children}) => { 

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(()=> {
    setLoading();
  }, []);

  const handleUserLogin = async (e, credentials) => {
    e.preventDefault()

    try {
      const response = await account.createEmailPasswordSession(
        credentials.email,
        credentials.password
      );

      console.log('LOGGEDIN:', response);
      const accountDetails = account.get();
      setUser(accountDetails);
      navigate("/");

    }catch(error) {
      console.error(error);
    }
  };

  const contextData = {
    user,
    handleUserLogin
  }

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;