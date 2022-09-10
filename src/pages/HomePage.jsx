import React from "react";
import AppBarComponent from "../components/common/AppBarComponent";
import FooterComponent from "../components/common/FooterComponent";
import MainHomeComponent from "../components/main/MainHomeComponent";

const HomePage = () => {
  return (
    <div>
      <AppBarComponent />
      <MainHomeComponent />
      <FooterComponent />
    </div>
  );
};

export default HomePage;
