import React from 'react'
import Chart from "react-apexcharts";
import { styled } from "styled-components";

const StyledGraph = styled.div`
  border: 2px solid #e8e9ed;
`;

const CustomGraph = ({data}) => {
    console.log(data)
    const s = data.map((e) =>({name:e.officer_name,data:e.status}));
    console.log(s)
    const series = [
      {
        name: "Series 1",
        data: [
          {
            x: "2:30 pm",
            y: 1,
          },
          {
            x: "9:30 am",
            y: 11,
          },
          {
            x: "11:00 am",
            y: 18,
          },
          {
            x: "4:30 pm",
            y: 29,
          },
          {
            x: "5:00 pm",
            y: 47,
          },
          {
            x: "1:00 pm",
            y: 65,
          },
          {
            x: "7:30 pm",
            y: 70,
          },
          {
            x: "1:30 pm",
            y: 26,
          },
          {
            x: "1:00 pm",
            y: 100,
          },
          {
            x: "4:30 pm",
            y: 40,
          },
          {
            x: "7:00 pm",
            y: 83,
          },
          {
            x: "2:00 pm",
            y: 89,
          },
          {
            x: "3:30 pm",
            y: 5,
          },
          {
            x: "5:30 pm",
            y: 49,
          },
          {
            x: "5:00 pm",
            y: 100,
          },
          {
            x: "2:30 pm",
            y: 74,
          },
          {
            x: "2:00 pm",
            y: 82,
          },
        ],
      },
      {
        name: "Series 2",
        data: [
          {
            x: "W1",
            y: 43,
          },
          {
            x: "W2",
            y: 43,
          },
          {
            x: "W3",
            y: 43,
          },
          {
            x: "W4",
            y: 43,
          },
        ],
      },
    ];
    const options = {
      chart: {
        type: "heatmap",
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        labels: {
          align: "center",
          style: {
            fontSize: "12px",
            fontWeight: 400,
          },
        },
        axisBorder: {
          show: true,
          color: "#e8e9ed",
          offsetX: 0,
          offsetY: 0,
        },
      },
      grid: {
        show: false,
        borderColor: "#90A4AE",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 30,
        },
      },
      plotOptions: {
        heatmap: {
          colorScale: {
            ranges: [
              {
                from: 0,
                to: 10,
                color: "#FFFFFF",
              },
              {
                from: 11,
                to: 29,
                color: "#C6F1F1",
              },
              {
                from: 31,
                to: 79,
                color: "#63D9D9",
              },
              {
                from: 80,
                to: 100,
                color: "#022121",
              },
            ],
          },
        },
      },
      legend: {
        show: false,
      },
    };
  return (
    <StyledGraph>
        <Chart options={options} series={s} type="heatmap" height={"300px"} />
    </StyledGraph>
  )
}

export default CustomGraph