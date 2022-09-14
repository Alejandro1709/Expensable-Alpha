import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as session from '../services/session-services';
import * as users from '../services/user-services';
import { getUser } from '../services/user-services';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getUser()
      .then((u) => {
        setUser(u);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  function login(credentials) {
    return session.login(credentials).then((u) => {
      navigate('categories');
      setUser(u);
    });
  }

  function register(credentials) {
    return users.createUser(credentials).then((u) => {
      navigate('categories');
      setUser(u);
    });
  }

  function logout() {
    return session.logout().then((u) => {
      navigate('login');
      setUser(u);
    });
  }

  if (loading) return <p>Loading...</p>;

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
