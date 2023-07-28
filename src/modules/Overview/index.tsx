import ActivityChart from "@/components/ActivityChart";
import Banner from "@/components/Banner";
import GradientDonutChart from "@/components/GradientDonutChart";
import { ActivityChartData } from "@/data/BarChartData";
import React, { useState } from "react";
import Performing from "./components/Performing";
import { Button } from "@/components/Button";
import Tabs from "@/components/Tabs";
import ArrowUp from "@/components/Icons/ArrowUp";

const tabs = [
  { name: "2020", current: true },
  { name: "2021", current: true },
  { name: "Months", current: true },
];

const Overview = () => {
  const [selectedTabIdx, setSelectedTabIdx] = useState(2);
  return (
    <div>
      <Banner />
      <div className="flex 2xl:flex-row flex-col gap-8 items-center mt-4 mb-8">
        <div className="w-full 2xl:w-[70%] pt-6 h-[480px] overflow-hidden md:h-[420px] border border-borderColor rounded-xl bg-white">
          <div className="flex px-8 mb-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-5">
              <div className="flex items-center gap-5 w-1/2">
                <div>
                  <p className="text-sm">Activity</p>
                  <h3 className="text-primary text-lg sm:text-[22px] font-semibold whitespace-nowrap">
                    Online Scans
                  </h3>
                </div>
                <p className="text-2xl sm:text-3xl md:text-[2.125rem] font-semibold text-primary">
                  635
                </p>
                <Button size="sm" className="flex-shrink-0">
                  <ArrowUp />
                  21.01%
                </Button>
              </div>
              <div className="md:w-1/2 flex justify-end">
                <Tabs
                  setSelectedTabIdx={setSelectedTabIdx}
                  selectedTabIdx={selectedTabIdx}
                  data={tabs}
                />
              </div>
            </div>
          </div>
          <ActivityChart data={ActivityChartData} />
        </div>
        <div className="w-full 2xl:w-[30%] h-[420px] p-8 border border-borderColor rounded-xl bg-white">
          <p>Statistics</p>
          <h3 className="text-primary text-[22px] font-semibold">
            Scans per target
          </h3>
          <div className="flex items-start">
            <GradientDonutChart />
          </div>
        </div>
      </div>
      <Performing />
    </div>
  );
};

export default Overview;
