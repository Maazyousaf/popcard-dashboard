import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  series: [12799, 50779, 25567, 27891],
  chart: {
    width: 300,
    type: "donut",
  },
  labels: ["Target 1", "Target 2", "Target 3", "Target 4"],
  colors: ["#FB923C", "#FFC700", "#A78BFA", "#5EEAD4"],
  dataLabels: {
    enabled: true,
  },
  legend: {
    show: true,
    position: "bottom",
    labels: {
      colors: ["#1F1F1F"],
    },
    formatter: function (val: string, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex];
    },
   
    fontSize: "14px",
    fontFamily: "Helvetica, Arial",
    fontWeight: 400,
    markers: {
      width: 20,
      height: 20,
    },
  },

  plotOptions: {
    pie: {
      donut: {
        size: "58%",
        labels: {
          show: true,
          value: {
            show: true,
            fontSize: "26px",
            color: "#1F1F1F",
            fontWeight: 600,
          },
          total: {
            show: true,
            label: "Average range",
            color: "#7D7D7D",
            formatter: function (w) {
              return w.globals.seriesTotals.reduce((a: number, b: number) => {
                return a + b;
              }, 0);
            },
          },
        },
      },
      startAngle: -90,
      endAngle: 270,
    },
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

const GradientDonutChart: React.FC = () => {
  return (
    <ReactApexChart
      options={options}
      series={options.series}
      type="donut"
      height={330}
    />
  );
};

export default GradientDonutChart;
