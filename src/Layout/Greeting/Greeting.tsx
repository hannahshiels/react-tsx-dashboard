import { PageHeader } from "antd";
import { useEffect, useState } from "react";
import Text from "@constants/Text";

const Greeting = () => {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const getTime = (ms: number) => {
    const date = new Date(ms);
    let hour: string | number = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    let min: string | number = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    return `${hour}:${min}`;
  };

  const getTimeOfDay = () => {
    const date = new Date();
    const hour = date.getHours();
    let timeOfDay = "";
    if (hour < 12) {
      timeOfDay = Text.MorningMessage;
    } else if (hour < 17) {
      timeOfDay = Text.AfternoonMessage;
    } else {
      timeOfDay = Text.NightMessage;
    }
    return timeOfDay;
  };

  const getDate = () => {
    const date = new Date();

    let year = date.getFullYear();

    let month: string | number = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    let day: string | number = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return `${day}/${month}/${year}`;
  };

  const timeOfDay = getTimeOfDay();
  const date = getDate();
  const currentTime = getTime(time);

  const renderContent = () => {
    return (
      <div className="mlAuto"> {`${date} ${currentTime}`}  </div>
    )
  }

  return (
    <PageHeader className="header" ghost title={timeOfDay} extra={renderContent()}/>
  );
};

export default Greeting;
