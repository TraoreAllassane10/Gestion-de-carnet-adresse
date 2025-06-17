import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });
      setUser(res.data.data);
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/users/register", { name, email, password });
      setUser(res.data.data);
      localStorage.setItem("token", res.data.token);

    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
};

