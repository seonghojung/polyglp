import EChartsReact from "echarts-for-react";
import ReactDatePickerComponent from "react-datepicker";
import { useEffect, useState } from "react";
import { SubscribedUserOptions } from "./chartOptions";
import { Button } from "@mui/material";

const converToISO = (e: Date): string => {
  e.setHours(e.getHours() + 9);
  const isoString = e.toISOString();
  return isoString;
};

const formatDate = (isoString?: string) => {
  if (!isoString) return "오류가 발생했습니다.";
  const dateObject = new Date(isoString);
  // 연도, 월, 일 추출
  const year = dateObject.getFullYear().toString().slice(2);
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObject.getDate().toString().padStart(2, "0");

  // YY년 MM월 DD일 형식으로 조합하여 반환
  return `${year}년 ${month}월 ${day}일`;
};

const SubscribedUserChart = ({ startDate, endDate }: { startDate: string; endDate: string }) => {
  const [StartDate, setStartDate] = useState<string>(startDate);
  const [EndDate, setEndDate] = useState<string>(endDate);

  useEffect(() => {
    console.log(StartDate);
    console.log(EndDate);
  }, [StartDate, EndDate]);

  return (
    <div>
      <EChartsReact option={SubscribedUserOptions} opts={{ renderer: "canvas", width: "auto", height: "auto" }} />
      <div style={{ display: "flex" }}>
        <div>
          <ReactDatePickerComponent
            onChange={(e) => {
              if (!e) return;
              setStartDate(converToISO(e));
            }}
            value={formatDate(StartDate)}
          />
        </div>
        <div>
          <ReactDatePickerComponent
            onChange={(e) => {
              if (!e) return;
              setEndDate(converToISO(e));
            }}
            value={formatDate(EndDate)}
          />
        </div>
        <Button size="small" variant="contained">
          sex
        </Button>
      </div>
    </div>
  );
};

export default SubscribedUserChart;
