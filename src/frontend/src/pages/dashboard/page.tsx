import * as echarts from 'echarts/core';
import {
  GridComponentOption,
  LegendComponentOption,
  TitleComponentOption,
  TooltipComponentOption,
} from 'echarts/components';
import { LineSeriesOption, PieSeriesOption } from 'echarts/charts';
import EChartsReact from 'echarts-for-react';

import 'react-datepicker/dist/react-datepicker.css';

import SubscribedUserChart from './SubscribedUserChart';
import { languageOption, BusinessOption, RandomOption } from './chartOptions';
import styled from 'styled-components';
import { Header, Title } from '../components/Template';

export const Wrap = styled.div`
  margin-top: 102px;
  /* background-color: #fff; */
  /* border-radius: 10px; */
`;

export const Inner = styled.div`
  /* width: 600px; */
  background-color: #fff;
  border-radius: 10px;
  padding: 35px 42px 61px 42px;
  overflow-x: auto;
`;

const Subtitle = styled.p`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 34px;
`;

const ChartTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 34px;
  text-align: center;
`;

const TotalCountWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 28px;
`;

const BorderWrap = styled.div`
  padding: 20px 0;
  min-width: 200px;
  max-width: 423px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: solid 1px #a0a0a0;
  background-color: transparent;
`;
const AppBorderWrap = styled(BorderWrap)`
  width: 100%;
  max-width: 287px;
`;
const BorderTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #280559;
`;

const BorderDescription = styled.div`
  margin-top: 8px;
  font-size: 28px;
  font-weight: bold;
  color: #0f0f0f;
`;

const BorderAppDescription = styled(BorderDescription)`
  margin-top: 30px;
`;

const EChartsReactWrap = styled.div`
  display: flex;

  @media (max-width: 1309px) {
    flex-direction: column;
    gap: 70px;
  }
`;

const AppWrap = styled.div`
  margin-left: 67px;
  display: flex;
  gap: 28px;
`;

export type EChartsOption = echarts.ComposeOption<
  | GridComponentOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | PieSeriesOption
>;

export default function DashBoardPage() {
  // 아트보드 : 0. 대시보드
  // WBS : 대시보드

  // @TODO: 당일부터 3개월까지의 집계 쿼리를 서버에서 받아올 것
  const startDate = '2023-12-22T00:00:00.591Z';
  const endDate = '2024-03-22T00:00:00.591Z';

  return (
    <>
      <Header>
        <Title>대시보드</Title>
      </Header>

      <Wrap>
        <Inner>
          <Subtitle>통합지표 표기</Subtitle>
          <TotalCountWrap>
            <BorderWrap>
              <BorderTitle>총 영상 통화 시간</BorderTitle>
              <BorderDescription>653 Hour</BorderDescription>
            </BorderWrap>
            <BorderWrap>
              <BorderTitle>총 영상 통화 시간</BorderTitle>
              <BorderDescription>653 Hour</BorderDescription>
            </BorderWrap>
            <BorderWrap>
              <BorderTitle>총 영상 통화 시간</BorderTitle>
              <BorderDescription>653 Hour</BorderDescription>
            </BorderWrap>
            <BorderWrap>
              <BorderTitle>총 영상 통화 시간</BorderTitle>
              <BorderDescription>653 Hour</BorderDescription>
            </BorderWrap>
            <BorderWrap>
              <BorderTitle>총 영상 통화 시간</BorderTitle>
              <BorderDescription>653 Hour</BorderDescription>
            </BorderWrap>
            <BorderWrap>
              <BorderTitle>총 영상 통화 시간</BorderTitle>
              <BorderDescription>653 Hour</BorderDescription>
            </BorderWrap>
          </TotalCountWrap>
        </Inner>
      </Wrap>

      <Wrap>
        <Inner>
          <Subtitle>트렌드 지표</Subtitle>
          <EChartsReactWrap>
            <div style={{ flex: 1 }}>
              <ChartTitle>구독자 수 변화 그래프(월별)</ChartTitle>
              <SubscribedUserChart startDate={startDate} endDate={endDate} />
            </div>
            <div style={{ flex: 1 }}>
              <ChartTitle>사용자 별 언어 분포도</ChartTitle>
              <EChartsReact option={languageOption} opts={{ renderer: 'canvas', width: 'auto', height: 'auto' }} />
            </div>
          </EChartsReactWrap>
        </Inner>
      </Wrap>

      <Wrap>
        <Inner>
          <Subtitle>연어 별 매칭 통계</Subtitle>
          <EChartsReactWrap>
            <div style={{ flex: 1 }}>
              <ChartTitle>비즈니스 채팅</ChartTitle>
              <EChartsReact option={BusinessOption} opts={{ renderer: 'canvas', width: 'auto', height: 'auto' }} />
            </div>
            <div style={{ flex: 1 }}>
              <ChartTitle>랜덤 채팅</ChartTitle>
              <EChartsReact option={RandomOption} opts={{ renderer: 'canvas', width: 'auto', height: 'auto' }} />
            </div>
          </EChartsReactWrap>

          <div style={{ marginTop: '34px' }}>
            <Subtitle>APP 통계</Subtitle>
            <AppWrap>
              <AppBorderWrap>
                <BorderTitle>MAU</BorderTitle>
                <BorderAppDescription>1,000</BorderAppDescription>
              </AppBorderWrap>
              <AppBorderWrap>
                <BorderTitle>DAU</BorderTitle>
                <BorderAppDescription>1,000</BorderAppDescription>
              </AppBorderWrap>
              <AppBorderWrap>
                <BorderTitle>신고 건수(미처리)</BorderTitle>
                <BorderAppDescription>1,000</BorderAppDescription>
              </AppBorderWrap>
              <AppBorderWrap>
                <BorderTitle>신고 건수(처리)</BorderTitle>
                <BorderAppDescription>1,000</BorderAppDescription>
              </AppBorderWrap>
            </AppWrap>
          </div>
        </Inner>
      </Wrap>
    </>
  );
}
