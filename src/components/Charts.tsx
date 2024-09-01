import React, { useEffect, useRef } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";
import TitilePage from "./TitilePage";

interface ChartsProps {
  className?: string;
}

function Charts({ className }: ChartsProps) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  let chartInstance: Chart<"bar"> | null = null;

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const data = {
          labels: ["January", "February", "March", "April", "May"],
          datasets: [
            {
              label: "Appontment",
              data: [50, 60, 70, 80, 90],
              backgroundColor: "rgba(54, 162, 235, 0.5)", // Blue color with transparency
              borderColor: "rgba(54, 162, 235, 1)", // Blue color
              borderWidth: 1,
            },
          ],
        };

        const options: ChartConfiguration<"bar">["options"] = {
          responsive: true,
          scales: {
            x: {
              title: {
                display: false,
                text: "Month",
              },
            },
            y: {
              title: {
                display: false,
                text: "Sales",
              },
            },
          },
        };

        chartInstance = new Chart(ctx, {
          type: "bar",
          data: data,
          options: options,
        });
      }
    }

    return () => {
      // Clean up chart instance on component unmount
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      <div
        className={
          className +
          " bg-white p-4 rounded-lg shadow-sm shadow-shadowDark overflow-hidden md:p-6 h-full"
        }
      >
        <h1 className='text-lg font-semibold mb-4'>Activity</h1>
        <hr className='mb-4 -mx-8' />
        <canvas ref={chartRef} />
      </div>
    </>
  );
}

export default Charts;
