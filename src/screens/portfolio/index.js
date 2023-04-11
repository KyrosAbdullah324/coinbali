import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import CreatePortfolioScreen from "./CreatePortfolioScreen";
import PortfolioScreen from "./PortfolioScreen";

export default () => {
  const [mode, setMode] = useState("create"); // MODE == 'create' or 'show'
  return (
    <>
      {mode == "create" && <CreatePortfolioScreen />}
      {mode == "show" && <PortfolioScreen />}
    </>
  );
};
