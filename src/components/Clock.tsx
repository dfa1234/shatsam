import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HCMore from "highcharts/highcharts-more";
import HCExportData from "highcharts/modules/export-data";
import HCExportingInit from "highcharts/modules/exporting";
import HCOffline from "highcharts/modules/offline-exporting";
import HCSolidGauge from "highcharts/modules/solid-gauge";
import React, { useEffect, useRef } from "react";
import { easeOutBounce } from "../utils/animations/easeOutBounce";
import "./chart.css";

HCExportingInit(Highcharts);
HCOffline(Highcharts);
HCExportData(Highcharts);
HCMore(Highcharts);
HCSolidGauge(Highcharts);

const getNow = () => {
  var now = new Date();

  return {
    hours: now.getHours() + now.getMinutes() / 60,
    minutes: (now.getMinutes() * 12) / 60 + (now.getSeconds() * 12) / 3600,
    seconds: (now.getSeconds() * 12) / 60,
  };
};

const pad = (n: number, length: number) =>
  new Array((length || 2) + 1 - String(n).length).join("0") + n;

var now = getNow();

const options: Highcharts.Options = {
  chart: {
    type: "gauge",
    plotBackgroundColor: undefined,
    plotBackgroundImage: undefined,
    plotBorderWidth: 0,
    plotShadow: false,
    height: 300,
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

  tooltip: {
    formatter: function (): string {
      //@ts-ignore
      return this.series?.chart?.tooltipText as string;
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

const move = (chart: any) =>
  setInterval(function () {
    now = getNow();

    if (chart.get) {
      var hour = chart.get("hour");
      var minute = chart.get("minute");
      var second = chart.get("second");
      // run animation unless we're wrapping around from 59 to 0
      var animation =
        now.seconds === 0
          ? false
          : {
              easing: "easeOutBounce",
            };

      // Cache the tooltip text
      chart.tooltipText =
        pad(Math.floor(now.hours), 2) +
        ":" +
        pad(Math.floor(now.minutes * 5), 2) +
        ":" +
        pad(now.seconds * 5, 2);

      hour.update(now.hours, true, animation);
      minute.update(now.minutes, true, animation);
      second.update(now.seconds, true, animation);
      //console.debug(hour, minute, second);
      console.debug();
    } else {
      console.debug("chart.get not available:", chart);
    }
  }, 1000);

(Math as any).easeOutBounce = easeOutBounce;

export const Clock = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  useEffect(() => {
    let inter: NodeJS.Timer;
    if (chartComponentRef) {
      inter = move(chartComponentRef.current?.chart);
    }

    return () => {
      if (inter) {
        clearInterval(inter);
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
