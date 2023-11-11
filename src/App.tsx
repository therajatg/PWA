import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import {
  SignIn,
  SignUp,
  ConfirmEmail,
  SetNewPassword,
  ResetPassword,
} from "./components/index";
import { AuthScreen } from "./pages/AuthScreen";

export const App = () => {
  return (
    <div className="w-full p-4">
      <input value="dewfewf" className="bg-red-200 text-red-600" />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<AuthScreen />}>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/confirmEmail" element={<ConfirmEmail />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/setNewPassword" element={<SetNewPassword />} />
        </Route>
      </Routes>
    </div>
  );
};
