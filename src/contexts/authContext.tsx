import { useContext, createContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducers/authReducer";
import { Auth } from "aws-amplify";

const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);

type AuthProviderProps = {
  children: React.ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  //   const localstoragetoken = localStorage.getItem("token");
  const [authState, authDispatch] = useReducer(authReducer, {
    user: {
      username: null,
      email: null,
      password: null,
    },
    // token: localstoragetoken ?? null,
    isLoggedIn: false,
    error: null,
  });

  const assessLoggedInState = async () => {
    try {
      const res = await Auth.currentAuthenticatedUser();
      authDispatch({ type: "IS_LOGGED_IN", payload: true });
    } catch {
      console.log("Not logged in");
      authDispatch({ type: "IS_LOGGED_IN", payload: false });
    }
  };

  useEffect(() => {
    assessLoggedInState();
  }, []);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth, AuthProvider };
