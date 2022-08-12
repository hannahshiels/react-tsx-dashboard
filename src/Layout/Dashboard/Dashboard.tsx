import DashboardItem from "./components/DashboardItems/components/DashboardItem/DashboardItem";
import DashboardItems from "./components/DashboardItems/DashboardItems";
import Customise from "./components/Customise/Customise";
import { useState } from "react";
import { DashboardItemsState } from "Types/types";

const Dashboard = () => {
  const [dashboardItems, setDashboardItems] = useState<DashboardItemsState>({
    hideAdviceItem: false,
    hideCatFactItem: false,
    hideYearFactItem: false,
    hideDadJokeItem: false,
    hideProgrammingItem: false,
    hideYesOrNoItem: false,
    hideLyricsItem: false,
    hideFoxItem: false,
    hideMusicPlayerItem:false,
  });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DashboardItems display={dashboardItems} />
      <Customise
        dashboardItems={dashboardItems}
        setDashboardItems={setDashboardItems}
      />
    </div>
  );
};

export default Dashboard;
