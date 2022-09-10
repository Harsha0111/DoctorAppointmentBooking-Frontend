import React from "react";
import AppBarComponent from "../components/common/AppBarComponent";
import FooterComponent from "../components/common/FooterComponent";
import MainProfileComponent from "../components/main/MainProfileComponent";

const ProfilePage = () => {
  return (
    <div>
      <AppBarComponent />
      <MainProfileComponent />
      <FooterComponent />
    </div>
  );
};

export default ProfilePage;
