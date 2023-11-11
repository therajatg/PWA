import { useAuth } from "../contexts/authContext";

export const SignIn = () => {
  const { authState, authDispatch } = useAuth();
  return (
    <form className="flex flex-col w-full sm:shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-w-sm">
      <div className="flex flex-col">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={authState.username}
          className="bg-red-600"
          // style={{ backgroundColor: "red" }}
          // id="username"
          onChange={(e) =>
            authDispatch({ type: USERNAME, payload: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={authState.password}
          className="border-gray-300 border-2 bg-red-600 px-1 py-1 rounded-xl"
          id="password"
          onChange={(e) =>
            authDispatch({ type: PASSWORD, payload: e.target.value })
          }
        />
      </div>
    </form>
  );
};
