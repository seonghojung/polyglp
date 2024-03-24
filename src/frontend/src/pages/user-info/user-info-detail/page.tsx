import { Await, LoaderFunction, defer, useLoaderData } from "react-router-dom";
import { BASE_URL, language } from "../../../Types";
import { Suspense, useState } from "react";
import styled from "styled-components";
import Template from "../../components/Template";
import { Stack, Button, FormLabel, InputLabel, Box, Radio, RadioGroup, FormControlLabel, MenuItem, FormControl, TextField } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export interface IUser {
  id: number;
  sns: string;
  snsId: string;
  password: string | null;
  email: string | null;
  loginToken: string | null;
  displayName: string;
  language: keyof typeof language;
  gender: "female" | "male";
  photo: string | null;
  block_start: string | null;
  block_end: string | null;
  location: string | null;
  timez: string | null;
  online: 0 | 1 | 2; //	0:off, 1:대기실, 2:채팅방
  issubscription: boolean; // 구독여부
  isdel: boolean; // 	탈퇴여부
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
}
export const loadUserData: LoaderFunction = async ({ request, params }) => {
  const id = params.userID;
  if (typeof id === "undefined") throw new Error();

  const response = await fetch(`${BASE_URL}/user/findOne/${id}`);
  if (!response.ok) throw new Error();
  const user = await response.json();
  return defer({ data: user[0] as IUser });
};

interface IData {
  data: IUser;
}

const Wrap = styled.div`
  padding: 30px 0;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const FormControlWrap = styled(FormControl)`
  &:not(:first-child) {
    margin-top: 40px;
  }
  display: flex !important;
  align-items: center;
  flex-direction: row !important;
`;
const RadioGroupWrap = styled(RadioGroup)`
  display: flex !important;
  align-items: center;
  flex-direction: row !important;
`;

const TextFieldWrap = styled(TextField)`
  min-width: 150px;
  max-width: 50%;
  font-size: 20px;
  &:first-child {
    margin-right: 20px;
  }
`;

interface ILanguageItemFunc {
  index: number;
  value: string;
  text: string;
}

// Iterator Component
const languageItemFunc = ({ index, value, text }: ILanguageItemFunc) => {
  return (
    <MenuItem key={index} value={value}>
      {text}
    </MenuItem>
  );
};

export default function UserInfoDetailPage() {
  // 아트보드 : 1.1 회원 정보 상세
  // WBS : 회원정보상세
  const { data } = useLoaderData() as IData;
  const [gender, setGender] = useState("female");
  const [language, setLanguage] = useState("");
  const [subscription, setSubscription] = useState("");
  const [displayName, setDisplayName] = useState(""); // 닉네임
  const [isDuplicate, setIsDuplicate] = useState(false); // 중복 체크 결과

  const checkDisplayNameDuplicateFunc = async () => {
    // API 컨트롤러의 특정 함수를 호출합니다.
    const response = await fetch(`${BASE_URL}/api/check-displayName-duplicate`, { method: "POST", credentials: "include" });
    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
    }
  };

  const genderRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender((event.target as HTMLInputElement).value);
  };

  const languageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  const subscriptionChange = (event: SelectChangeEvent) => {
    setSubscription(event.target.value);
  };

  // 사이드바 메뉴
  const languageItems: ILanguageItemFunc[] = [
    { index: 1, value: "ko", text: "한국어" },
    { index: 2, value: "en", text: "영어" },
    { index: 3, value: "sp", text: "스페인어" },
    { index: 4, value: "gr", text: "그리스어" },
    { index: 5, value: "po", text: "폴란드어" },
    { index: 6, value: "tk", text: "터키어" },
    { index: 7, value: "zh-cn", text: "중국어" },
    { index: 8, value: "fr", text: "프랑스어" },
    { index: 9, value: "it", text: "이탈리아어" },
    { index: 10, value: "ru", text: "러시아어" },
    { index: 11, value: "ar", text: "아랍어" },
    { index: 12, value: "zhs", text: "중국어간체" },
    { index: 13, value: "zht", text: "중국어번체" },
  ];

  return (
    <Suspense fallback={<p>로딩중입니다...</p>}>
      <Await resolve={data}>
        {(user: IUser) => {
          return (
            <Template title="회원 정보 상세">
              <Wrap>
                <Form>
                  {/* 아이디 / 이메일 */}
                  <FormControlWrap>
                    <TextFieldWrap label="아이디" variant="filled" value={user.id} color="secondary" inputProps={{ style: { fontSize: "20px" } }} disabled />
                    <TextFieldWrap label="이메일" variant="filled" value={user.email} color="secondary" inputProps={{ style: { fontSize: "20px" } }} disabled />
                  </FormControlWrap>
                  {/* 닉네임 */}
                  <FormControlWrap>
                    <TextFieldWrap label="닉네임" variant="outlined" defaultValue={user.displayName} color="secondary" inputProps={{ style: { fontSize: "20px" } }} />
                    <Button color="inherit" variant="contained" onClick={checkDisplayNameDuplicateFunc}>
                      중복확인
                    </Button>
                    <TextFieldWrap type="checkbox" name="isDuplicated" />
                  </FormControlWrap>
                  {/* 비밀번호 */}
                  <FormControlWrap>
                    <TextFieldWrap type="password" label="비밀번호" variant="outlined" color="secondary" inputProps={{ style: { fontSize: "20px" } }} />
                    <TextFieldWrap type="password" label="비밀번호 확인" variant="outlined" color="secondary" inputProps={{ style: { fontSize: "20px" } }} />
                  </FormControlWrap>
                  {/* 성별 */}
                  <FormControlWrap>
                    <RadioGroupWrap aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" value={gender} onChange={genderRadioChange}>
                      <FormControlLabel value="female" control={<Radio color="secondary" />} label="여자" />
                      <FormControlLabel value="male" control={<Radio color="secondary" />} label="남자" />
                    </RadioGroupWrap>
                  </FormControlWrap>
                  {/* 언어 / 구독*/}
                  <FormControlWrap>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControlWrap fullWidth>
                        <InputLabel id="demo-simple-select-label">언어</InputLabel>
                        <Select defaultValue={user.language} label="언어" onChange={languageChange}>
                          {languageItems.map(languageItemFunc)}
                        </Select>
                      </FormControlWrap>
                    </Box>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControlWrap fullWidth>
                        <InputLabel id="demo-simple-select-label">구독</InputLabel>
                        <Select defaultValue={user.issubscription ? "구독 중" : "구독취소"} label="구독" onChange={subscriptionChange}>
                          <MenuItem value={"구독 중"}>구독 중</MenuItem>
                          <MenuItem value={"구독취소"}>구독취소</MenuItem>
                        </Select>
                      </FormControlWrap>
                    </Box>
                  </FormControlWrap>
                  <FormControlWrap>
                    <Stack spacing={2} direction="row">
                      <Button type="button" color="success" variant="contained">
                        수정 완료
                      </Button>
                      {/* TODO: 차단처리시 어떤 값을 변경해야하는지 */}
                      <Button color="error" variant="contained">
                        차단 처리
                      </Button>
                      {/* TODO: 링크 처리를 해야할것으로 판단 */}
                      <Button color="inherit" variant="contained">
                        뒤로가기
                      </Button>
                    </Stack>
                  </FormControlWrap>
                </Form>
              </Wrap>
            </Template>
          );
        }}
      </Await>
    </Suspense>
  );
}
