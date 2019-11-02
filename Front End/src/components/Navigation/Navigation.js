import React from "react";
import Logo from "../logo/logo";
const Navigation = ({ onRouteChange, isSignedIn }) => {
  // if (isSignedIn) {
  //   return (
  //     <nav style={{ display: "flex", justifyContent: "flex-end" }}>
  //       <p
  //         onClick={() => onRouteChange("signout")}
  //         className="f3 link dim black underline pa3 pointer"
  //       >
  //         Sign Out
  //       </p>
  //       <p
  //       onClick ={()=> onRouteChange("AlbumList")}
  //       className = "f3 link dim black underline pa3 pointer"
  //       >
  //         Album List
  //       </p>
  //     </nav>
  //   );
  // } else {
  //   return (
  //     <nav style={{ display: "flex", justifyContent: "flex-end" }}>
  //       <p
  //         onClick={() => onRouteChange("signin")}
  //         className="f3 link dim black underline pa3 pointer"
  //       >
  //         Sign In
  //       </p>
  //       <p
  //         onClick={() => onRouteChange("register")}
  //         className="f3 link dim black underline pa3 pointer"
  //       >
  //         Register
  //       </p>
  //     </nav>
  //   );
  // }

  return (
    <nav className="db dt-l w-100 border-box pa3 ph5-l">
      <Logo />
      <div className="" display="inline-block">
        <a
          onClick={() => onRouteChange("signin")}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign In
        </a>
        <a
          onClick={() => onRouteChange("register")}
          className="f3 link dim black underline pa3 pointer"
        >
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
