import React from "react";

interface DataPoint {
  name: string;
  current: boolean;
}

interface IProps {
  selectedTabIdx: number;
  // eslint-disable-next-line no-unused-vars
  setSelectedTabIdx: (toggle: number) => void;
  data: DataPoint[];
}

const Tabs = ({ setSelectedTabIdx, selectedTabIdx, data }: IProps) => {
  return (
    <nav
      className="flex items-center gap-2.5 overflow-auto AtScrollHide"
      aria-label="Tabs"
    >
      {data?.map((tab, i) => (
        <a
          key={tab.name}
          className={`
                ${i === selectedTabIdx ? "bg-[#F1F1F2]" : "bg-white"}
                cursor-pointer whitespace-nowrap px-5 py-3.5 text-center text-sm font-bold rounded-lg text-[#7E8299] focus:outline-none`}
          onClick={() => setSelectedTabIdx(i)}
        >
          {tab.name}
        </a>
      ))}
    </nav>
  );
};
export default Tabs;
