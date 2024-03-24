import * as echarts from "echarts/core";
import { GridComponentOption, LegendComponentOption, TitleComponentOption, TooltipComponentOption } from "echarts/components";
import { LineSeriesOption, PieSeriesOption } from "echarts/charts";
import EChartsReact from "echarts-for-react";

import "react-datepicker/dist/react-datepicker.css";

import SubscribedUserChart from "./SubscribedUserChart";
import { languageOption, BusinessOption, RandomOption } from "./chartOptions";

export type EChartsOption = echarts.ComposeOption<
  GridComponentOption | LineSeriesOption | TitleComponentOption | TooltipComponentOption | LegendComponentOption | PieSeriesOption
>;
export default function DashBoardPage() {
  // 아트보드 : 0. 대시보드
  // WBS : 대시보드

  // @TODO: 당일부터 3개월까지의 집계 쿼리를 서버에서 받아올 것
  const startDate = "2023-12-22T00:00:00.591Z";
  const endDate = "2024-03-22T00:00:00.591Z";

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <SubscribedUserChart startDate={startDate} endDate={endDate} />
        </div>
        <div style={{ flex: 1 }}>
          <EChartsReact option={languageOption} opts={{ renderer: "canvas", width: "auto", height: "auto" }} />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <EChartsReact option={BusinessOption} opts={{ renderer: "canvas", width: "auto", height: "auto" }} />
        </div>
        <div style={{ flex: 1 }}>
          <EChartsReact option={RandomOption} opts={{ renderer: "canvas", width: "auto", height: "auto" }} />
        </div>
      </div>
    </div>
  );
}
