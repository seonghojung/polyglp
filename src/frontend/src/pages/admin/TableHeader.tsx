import Box from '@mui/material/Box';
import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { Button, FormControl, TextField } from '@mui/material';
import SortBtn from '../../components/SortBtn';

const Title = styled.p`
  font-size: 22px;
  font-weight: 600;
`;

const CountWrap = styled.div`
  display: flex;
  &:nth-child(2) {
    margin-top: 20px;
  }
`;

const CountTitle = styled.div`
  width: 170px;
  font-size: 24px;
  font-weight: 500;
  text-align: left;
  color: #280559;
`;

const CountValue = styled.div`
  margin-left: 20px;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #0f0f0f;
`;

const Form = styled.form``;

const FormControlWrap = styled(FormControl)`
  &:not(:first-child) {
    margin-top: 40px;
  }
  display: flex !important;
  align-items: center;
  flex-direction: row !important;
`;

const TextFieldWrap = styled(TextField)`
  /* width: 300px; */
  /* max-width: 50%; */
  font-size: 20px;
`;

type ActiveButton = 'member' | 'freeUser' | 'all' | null;

const TableHeader = ({ setNoticeList }: { setNoticeList: Dispatch<SetStateAction<any[]>> }) => {
  const [activeButton, setActiveButton] = useState<ActiveButton>('member');

  const handleClick = (type: ActiveButton) => {
    setActiveButton(type);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        padding: '35px 0  80px ',
      }}
    >
      {/* TODO: Submit */}
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'flex-start' }}>
        <Title>관리자 정보:</Title>
        <Button
          sx={{
            width: '135px',
            height: '40px',
            marginLeft: '67px',
            backgroundColor: '#232D82',
            ':hover': { backgroundColor: '#1b2264' },
          }}
          type="button"
          variant="contained"
          size="large"
        >
          신규생성
        </Button>
      </Box>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          marginTop: '3px',
        }}
      >
        <Form>
          <FormControlWrap
            sx={{
              '& .MuiTextField-root': { width: '300px' },
            }}
          >
            <TextFieldWrap label="검색" placeholder="닉네임, 이메일 주소로 검색" variant="outlined" size="small" />
            <Button
              sx={{
                width: '135px',
                height: '40px',
                marginLeft: '40px',
                backgroundColor: '#232D82',
                ':hover': { backgroundColor: '#1b2264' },
              }}
              type="button"
              variant="contained"
              size="large"
            >
              검색
            </Button>
          </FormControlWrap>
        </Form>
      </div>
    </Box>
  );
};

export default TableHeader;

//components

interface ReportCount {
  state: 'pending' | 'complete';
  count: string;
}

const ReportCount = ({ state, count }: ReportCount) => {
  const text = state === 'pending' ? '미처리' : '처리';
  return (
    <CountWrap>
      <CountTitle>신고 건수({text})</CountTitle>
      <CountValue>{count}</CountValue>
    </CountWrap>
  );
};
