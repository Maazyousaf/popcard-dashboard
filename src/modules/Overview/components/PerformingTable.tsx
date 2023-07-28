import React from "react";
import FormCheck from "@/components/Forms/FormCheck";
import ImageComponent from "@/components/ImageComponent";

const PerformingTable = () => {
  const Explore = [
    {
      name: "Brooklyn Simmons",
      src: "/assets/images/performing/1.png",
      desi: "Sales",
      target: "2500",
      status: "On hold",
      last: "3 minutes ago",
      hour: "4",
      days: "Last 7 Days",
    },
    {
      name: "Brooklyn Simmons",
      src: "/assets/images/performing/2.png",
      desi: "Sales",
      target: "2500",
      status: "Completed",
      last: "3 minutes ago",
      hour: "4",
      days: "Last 7 Days",
    },
    {
      name: "Brooklyn Simmons",
      src: "/assets/images/performing/3.png",
      desi: "Sales",
      target: "2500",
      status: "In active",
      last: "3 minutes ago",
      hour: "4",
      days: "Last 7 Days",
    },
    {
      name: "Brooklyn Simmons",
      src: "/assets/images/performing/4.png",
      desi: "Sales",
      target: "2500",
      status: "In process",
      last: "3 minutes ago",
      hour: "4",
      days: "Last 7 Days",
    },
  ];

  const heading =
    "font-semibold text-secondary px-5 text-sm text-left tracking-wider whitespace-nowrap pb-6 text-center";
  return (
    <div className="flex flex-col mt-8">
      <div className="overflow-x-auto">
        <div className="align-middle inline-block min-w-full">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr className="pb-6">
                  <th scope="col" className={`${heading} !px-0 !text-left`}>
                    User
                  </th>
                  <th scope="col" className={heading}>
                    Target
                  </th>
                  <th scope="col" className={heading}>
                    STATUS
                  </th>
                  <th scope="col" className={heading}>
                    Last Scanned
                  </th>
                  <th scope="col" className={heading}>
                    Scans per hour
                  </th>
                  <th scope="col" className={`${heading} !px-0 !text-right`}>
                    Last 7 Days
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {Explore.map((item, i) => (
                  <tr
                    key={i}
                    className={`${
                      i == Explore.length - 1 ? "" : " border-b"
                    }  border-borderColor border-dashed`}
                  >
                    <td className="py-3.5 whitespace-nowrap xl:w-[50%] pr-6">
                      <div className="flex gap-3 items-center w-[14rem] sm:w-[16rem] truncate">
                        <FormCheck
                          label=""
                          type="radio"
                          name="perform"
                          className="flex-shrink-0"
                          checkClass="!border-transparent"
                        />
                        <ImageComponent
                          src={item.src}
                          height={50}
                          width={50}
                          className="object-cover"
                          figClassName="flex-shrink-0"
                        />
                        <div>
                          <p className="text-sm font-semibold text-primary">
                            {item.name}
                          </p>

                          <p className="font-semibold text-secondary">
                            {item.desi}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-2.5 whitespace-nowrap text-center text-[#5E6278] text-base font-semibold">
                      {item.target}
                    </td>
                    <td className="px-5 py-2.5 whitespace-nowrap text-center">
                      <p
                        className={`${
                          item.status == "On hold"
                            ? "bg-[#FFF8DD] text-[#F6C000]"
                            : item.status == "Completed"
                            ? "bg-[#E8FFF3] text-[#50CD89]"
                            : item.status == "In active"
                            ? "bg-[#FEE2E2] text-[#DC2626]"
                            : item.status == "In process"
                            ? "bg-[#EEF6FF] text-[#3E97FF]"
                            : ""
                        } inline-block px-2 py-1 rounded-[4px]`}
                      >
                        {item.status}
                      </p>
                    </td>
                    <td className="px-5 py-2.5 whitespace-nowrap text-center text-[#5E6278] text-base font-semibold">
                      {item.last}
                    </td>
                    <td className="px-5 py-2.5 whitespace-nowrap text-center text-[#5E6278] text-base font-semibold">
                      {item.hour}
                    </td>
                    <td className="text-center pt-2.5 whitespace-nowrap text-[#5E6278] text-base font-semibold">
                      <ImageComponent
                        src="/assets/images/performing/card.svg"
                        height={30}
                        width={92}
                        className="object-cover"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformingTable;
