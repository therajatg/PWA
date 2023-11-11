// import { logo } from "../assets/dataPartnersLogo";

import { useState } from "react";
import { SignIn } from "../components";
import { Outlet } from "react-router-dom";

export const AuthScreen = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* <div className="max-w-sm"> */}
      <img
        src="/src/assets/dataPartnersLogo.png"
        alt="logo"
        className="h-10 md:h-20"
      />
      <Outlet />
      {/* <SignUp /> */}
      {/* </div> */}
    </div>
  );
};
