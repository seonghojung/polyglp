import { EChartsOption } from 'echarts-for-react';
import { addComma } from '../../utils';

// 구독자 수 변화 그래프(월별) 설정값
export const SubscribedUserOptions: EChartsOption = {
  xAxis: {
    type: 'category',
    data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [3200, 1230, 3224, 2560, 3480, 1800, 3260],
      type: 'line',
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      animation: false,
    },
    formatter: (params: any) => {
      const dataPoint = params[0];
      return `${dataPoint.axisValueLabel} : ${addComma(dataPoint.data)}명`;
    },
  },
};
// 사용자 별 언어 분포도 설정값
export const languageOption: EChartsOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}명 ({d}%)',
    position: 'top',
  },
  legend: {
    orient: 'vertical',
    right: -20,
    top: '30%',
  },
  series: [
    {
      name: '사용 언어',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: '한국어' },
        { value: 735, name: '영어' },
        { value: 580, name: '중국어(번체)' },
        { value: 484, name: '말레이 타갈로그어' },
        { value: 300, name: '히브리어' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};
// 비즈니스 채팅 설정값
export const BusinessOption: EChartsOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}명 ({d}%)',
    position: 'top',
  },
  legend: {
    orient: 'horizontal',
    right: 50,
    bottom: -8,
    itemGap: 10,
  },

  series: [
    {
      name: '사용 언어',
      type: 'pie',
      radius: '50%',
      center: ['50%', '30%'],
      data: [
        { value: 1048, name: '한국어 x 영어' },
        { value: 735, name: '영어 x 중국어(번체)' },
        { value: 580, name: '중국어(번체) x 일본어' },
        { value: 484, name: '말레이 타갈로그어 x 스와힐리어' },
        { value: 300, name: '히브리어 x 고대 이집트어' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};
// 랜덤 채팅 설정값
export const RandomOption: EChartsOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}명 ({d}%)',
    position: 'top',
  },
  legend: {
    orient: 'horizontal',
    right: 50,
    bottom: 0,
    itemGap: 10,
  },
  series: [
    {
      name: '사용 언어',
      type: 'pie',
      radius: '50%',
      center: ['50%', '30%'],
      data: [
        { value: 1048, name: '한국어 x 영어' },
        { value: 236, name: '영어 x 중국어(번체)' },
        { value: 343, name: '중국어(번체) x 일본어' },
        { value: 1525, name: '말레이 타갈로그어 x 스와힐리어' },
        { value: 347, name: '히브리어 x 고대 이집트어' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};
