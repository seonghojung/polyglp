// 전역 상태는 여기에 넣으시오

import { atom } from 'recoil';

interface IRecoilStateSample {}
export const RecoilStateSample = atom<IRecoilStateSample>({
  key: 'RecoilStateSample',
  default: {},
});

export const isSidebarCollapsedAtom = atom({
  key: 'isSidebarCollapsedAtom',
  default: false,
});
