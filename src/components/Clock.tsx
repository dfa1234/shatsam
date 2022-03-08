import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HCMore from "highcharts/highcharts-more";
import HCExportData from "highcharts/modules/export-data";
import HCExportingInit from "highcharts/modules/exporting";
import HCOffline from "highcharts/modules/offline-exporting";
import HCSolidGauge from "highcharts/modules/solid-gauge";
import React, { useEffect, useRef } from "react";
import { easeOutBounce } from "../utils/animations/easeOutBounce";

if (typeof Highcharts === "object") {
  HCExportingInit(Highcharts);
  HCOffline(Highcharts);
  HCExportData(Highcharts);
  HCMore(Highcharts);
  HCSolidGauge(Highcharts);
}

const getNow = () => {
  var now = new Date();

  return {
    hours: now.getHours() + now.getMinutes() / 60,
    minutes: (now.getMinutes() * 12) / 60 + (now.getSeconds() * 12) / 3600,
    seconds: (now.getSeconds() * 12) / 60,
  };
};


var now = getNow();

const options: Highcharts.Options = {
  chart: {
    type: "gauge",
    plotBackgroundColor: 'transparent',
    plotBackgroundImage: 'blue',
    plotBorderWidth: 0,
    plotShadow: false,
    height: 300,
    backgroundColor:'transparent'
  },

  credits: {
    enabled: false,
  },

  title: {
    text: undefined,
  },

  pane: {
    background: [
      {
        // default background
      },
      {
        backgroundColor: {
          radialGradient: {
            cx: 0.5,
            cy: -0.4,
            r: 1.9,
          },
          stops: [
            [0.5, "rgba(255, 255, 255, 0.2)"],
            [0.5, "rgba(200, 200, 200, 0.2)"],
          ],
        },
      },
    ],
  },

  tooltip:{
    formatter: ()=>null
  },
  yAxis: {
    labels: {
      distance: -20,
    },
    min: 0,
    max: 12,
    lineWidth: 0,
    showFirstLabel: false,

    minorTickInterval: "auto",
    minorTickWidth: 1,
    minorTickLength: 5,
    minorTickPosition: "inside",
    minorGridLineWidth: 0,
    minorTickColor: "#666",

    tickInterval: 1,
    tickWidth: 2,
    tickPosition: "inside",
    tickLength: 10,
    tickColor: "#666",
    title: {
      text: null,
      style: {
        color: "#BBB",
        fontWeight: "normal",
        fontSize: "8px",
        lineHeight: "10px",
      },
      y: 10,
    },
  },
  
  series: [
    {
      type: "gauge",
      data: [
        {
          id: "hour",
          y: now.hours,
          dial: {
            radius: "60%",
            baseWidth: 4,
            baseLength: "95%",
            rearLength: "0",
          },
        } as Highcharts.PlotGaugeOptions as Highcharts.PointOptionsObject,
        {
          id: "minute",
          y: now.minutes,
          dial: {
            baseLength: "95%",
            rearLength: "0",
          },
        } as Highcharts.PlotGaugeOptions as Highcharts.PointOptionsObject,
        {
          id: "second",
          y: now.seconds,
          dial: {
            radius: "100%",
            baseWidth: 1,
            rearLength: "20%",
          },
        } as Highcharts.PlotGaugeOptions as Highcharts.PointOptionsObject,
      ],
      animation: false,
      dataLabels: {
        enabled: false,
      },
    },
  ],
};

const startMoving = (chart: any, millisecondInterval: number = 1000) =>
  setInterval(() => {
    now = getNow();

    if (!chart.get) {
      console.error("chart not available:", chart);
      return;
    }
    
    (Math as any).easeOutBounce = easeOutBounce;
    const animation = { easing: "easeOutBounce" };

    chart.get("hour").update(now.hours, true, animation);
    chart.get("minute").update(now.minutes, true, animation);
    chart.get("second").update(now.seconds, true, animation);
    
  }, millisecondInterval);


export const Clock = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  useEffect(() => {
    let intervalTimer: NodeJS.Timer;
    if (chartComponentRef) {
      intervalTimer = startMoving(chartComponentRef.current?.chart);
    }

    return () => {
      if (intervalTimer) {
        clearInterval(intervalTimer);
      }
    };
  }, [chartComponentRef]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      {...props}
    />
  );
};
