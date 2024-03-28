import styled from 'styled-components';
import { Header, Title } from '../components/Template';
import SubscribedUserChart from '../dashboard/SubscribedUserChart';
import { Inner, Wrap } from '../dashboard/page';
import { BusinessOption, RandomOption } from '../dashboard/chartOptions';
import EChartsReact from 'echarts-for-react';

export const StaticInner = styled(Inner)`
  width: 500px;
`;

const Subtitle = styled.p`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 34px;
  white-space: nowrap;
`;

const ChartTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 34px;
  text-align: center;
  &.pieChart {
    margin-bottom: 65px;
  }
`;

const ChartWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  column-gap: 129px;
  row-gap: 35px;
`;

export default function StaticsPage() {
  // 아트보드 : 3. 통계 지표
  // WBS : 통계 지표

  // @TODO: 당일부터 3개월까지의 집계 쿼리를 서버에서 받아올 것
  const startDate = '2023-12-22T00:00:00.591Z';
  const endDate = '2024-03-22T00:00:00.591Z';

  return (
    <>
      <Header>
        <Title>통계지표</Title>
      </Header>
      <ChartWrap>
        <Chart title="구독자 트렌드" chartTitle="구독자 수 변화 그래프(월별)">
          <SubscribedUserChart startDate={startDate} endDate={endDate} />
        </Chart>
        <Chart title="언어 매칭 트렌드(Conference Call)" chartTitle="비지니스 채팅" isPieChart>
          <EChartsReact option={BusinessOption} opts={{ renderer: 'canvas', width: 'auto', height: 'auto' }} />
        </Chart>
        <Chart title="월별 통화 시간 트렌드" chartTitle="월별 통화 시간 트렌드">
          <SubscribedUserChart startDate={startDate} endDate={endDate} />
        </Chart>
        <Chart title="언어 매칭 트렌드(Random Chat)" chartTitle="랜덤 채팅" isPieChart>
          <EChartsReact option={RandomOption} opts={{ renderer: 'canvas', width: 'auto', height: 'auto' }} />
        </Chart>
      </ChartWrap>
    </>
  );
}

//------ component

interface IChart {
  title: string;
  chartTitle: string;
  isPieChart?: boolean;
  children: React.ReactNode;
}

const Chart = ({ title, chartTitle, children, isPieChart }: IChart) => {
  return (
    <Wrap>
      <Subtitle>{title}</Subtitle>
      <StaticInner>
        <div style={{ flex: 1 }}>
          <ChartTitle className={isPieChart ? 'pieChart' : ''}>{chartTitle}</ChartTitle>
          {children}
        </div>
      </StaticInner>
    </Wrap>
  );
};
