import Button from '@mui/material/Button';

type ActiveButton = 'unprocessed' | 'completed' | 'all' | 'member' | 'freeUser' | 'paidUser' | 'nonPayingUser' | null;

interface ISortBtn {
  handler: () => void;
  activeButton: ActiveButton;
  type: ActiveButton; // activeButton과 type 비교 후, 일치할 떄 active 부여
  text: string; // 버튼에 표시될 텍스트
}

const SortBtn = ({ handler, activeButton, type, text }: ISortBtn) => {
  return (
    <Button
      sx={{
        height: '48px',
        backgroundColor: activeButton === type ? '#00b9fd' : '#9a9a9a',
        ':hover': { backgroundColor: activeButton === type ? '#00a0db' : '#727272' },
      }}
      type="button"
      variant="contained"
      size="large"
      onClick={handler}
    >
      {text}
    </Button>
  );
};

export default SortBtn;
