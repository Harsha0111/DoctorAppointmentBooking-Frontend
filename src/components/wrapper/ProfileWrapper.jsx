import React from "react";

import Lottie from "react-lottie";
import animationData from "../../asset/animations/63004-profile-password-unlock.json";

const ProfileWrapper = ({ children }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="container rounded border bg-white mt-5">
      <div className="row">
        <div className="col-md-4 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <Lottie options={defaultOptions} height={270} width={400} />
          </div>
        </div>
        <div className="col-md-8">{children}</div>
      </div>
    </div>
  );
};

export default ProfileWrapper;
