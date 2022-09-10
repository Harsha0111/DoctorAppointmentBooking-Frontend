import React from "react";
import AppBarComponent from "../components/common/AppBarComponent";
import FooterComponent from "../components/common/FooterComponent";
import MainHistoryComponent from "../components/main/MainHistoryComponent";

const HistoryPage = () => {
  return (
    <div>
      <AppBarComponent />
      <MainHistoryComponent />
      <FooterComponent />
    </div>
  );
};

export default HistoryPage;
