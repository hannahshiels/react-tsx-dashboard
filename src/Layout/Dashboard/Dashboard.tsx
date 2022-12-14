import DashboardItems from "./components/DashboardItems/DashboardItems";
import { useState } from "react";
import { DashboardItemsState } from "@interfaces/interfaces";

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
    hideMusicPlayerItem: false,
    hidePokemonItem: false,
    hideRPSItem: false,
  });

  return (
    <div className="dashboard">
      <DashboardItems
        setDashboardItems={setDashboardItems}
        display={dashboardItems}
      />
    </div>
  );
};

export default Dashboard;
