import React, { useState } from "react";
import Tabs from "../Tabs";
import DatePickerCalendar from "../Calendar";

const tabs = [
  { name: "7 Days", current: true },
  { name: "1 Month", current: true },
  { name: "3 Months", current: true },
  { name: "1 Year", current: true },
];

const Banner = () => {
  const [selectedTabIdx, setSelectedTabIdx] = useState(3);

  return (
    <div
      className="flex justify-between gap-5 2xl:items-center 2xl:flex-row flex-col w-full sticky top-0 bg-[#F6F5EE] z-30 pb-4"
      aria-hidden="true"
    >
      <div>
        <h1 className="text-primary font-bold text-2xl sm:text-[2rem]">Dashboard</h1>
        <p className="text-base text-[#475569]">January 1 - 30, 2023</p>
      </div>
      <div className="flex md:flex-row flex-col md:items-center gap-3">
        <Tabs
          setSelectedTabIdx={setSelectedTabIdx}
          selectedTabIdx={selectedTabIdx}
          data={tabs}
        />
        <DatePickerCalendar />
      </div>
    </div>
  );
};

export default Banner;
