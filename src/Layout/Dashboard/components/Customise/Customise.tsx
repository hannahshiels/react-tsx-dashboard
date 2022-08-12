import Button from "antd/lib/button";
import { useState } from "react";
import Text from "Constants/Text";
import CustomiseModal from "./components/CustomiseModal/CustomiseModal";
import { DashboardItemsState } from "Types/types";

interface CustomiseProps {
  setDashboardItems:(dashboardItems: DashboardItemsState) => void;
  dashboardItems: DashboardItemsState;
}

const Customise = (props:CustomiseProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <>
      <Button
        onClick={showModal}
        className="button"
        type="primary"
        style={{ zIndex:10000, position: "fixed", bottom: 0, right: 0, margin: "1rem" }}
      >
        {Text.CustomiseMessage}
      </Button>
      <CustomiseModal dashboardItems={props.dashboardItems} isVisible={isVisible} setState={props.setDashboardItems} closeModal={closeModal}/>
    </>
  );
};

export default Customise;
