import Button from "antd/lib/button";
import { useState } from "react";
import Text from "@constants/Text";
import CustomiseModal from "./components/CustomiseModal/CustomiseModal";
import { DashboardItemsState } from "@models/models";

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
        className="customiseBtn"
        type="primary"
      >
        {Text.CustomiseMessage}
      </Button>
      <CustomiseModal dashboardItems={props.dashboardItems} isVisible={isVisible} setState={props.setDashboardItems} closeModal={closeModal}/>
    </>
  );
};

export default Customise;
