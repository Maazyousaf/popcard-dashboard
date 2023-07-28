import { Button } from "@/components/Button";
import Search from "@/components/Forms/Search";
import Export from "@/components/Icons/Export";
import Filter from "@/components/Icons/Filter";
import React from "react";
import PerformingTable from "./PerformingTable";

const Performing = () => {
  return (
    <div className="p-8 pb-4 bg-white border border-borderColor rounded-xl mt-8">
      <div className="flex sm:flex-row flex-col gap-5 justify-between ">
        <div className="">
          <h6 className="text-primary font-semibold text-lg">
            Best Performing
          </h6>
          <p className="font-medium">100 Users in the past 7 days</p>
        </div>
        <div className="flex items-start gap-4">
          <div className="border flex-shrink-0 border-borderColor rounded-md h-10 w-10 flex justify-center items-center cursor-pointer hover:bg-secondary/10">
            <Filter />
          </div>
          <Search className="h-10 w-[256px]" />
          <Button className="text-[13px] flex items-center gap-2 h-10">
            <Export />
            Export
          </Button>
        </div>
      </div>
      <PerformingTable />
    </div>
  );
};

export default Performing;
