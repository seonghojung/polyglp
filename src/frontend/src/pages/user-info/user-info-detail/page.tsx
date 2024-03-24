import { Await, LoaderFunction, defer, useLoaderData } from "react-router-dom";
import { BASE_URL, language } from "../../../Types";
import { Suspense, useState } from "react";
import styled from "styled-components";
import Template from "../../components/Template";
import { FormLabel, InputLabel, Box, Radio, RadioGroup, FormControlLabel, MenuItem, FormControl, TextField } from "@mui/material";
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

const Wrap = styled.div``;
const Form = styled.form``;
const FormControlStyle = styled(FormControl)``;
const Label = styled.label``;
const Input = styled.input``;
const Text = styled(TextField)`
  font-size: 20px;
`;
const Test1 = styled(FormLabel)``;
const Test2 = styled(FormControlLabel)``;

interface IMenuItemFunc {
  index: number;
  value: string;
  text: string;
}

// Iterator Component
const MenuItemFunc = ({ index, value, text }: IMenuItemFunc) => {
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

  const genderRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender((event.target as HTMLInputElement).value);
  };
  const languageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  // 사이드바 메뉴
  const menuItems: IMenuItemFunc[] = [
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
            <div>
              <Template title="회원 정보 상세">
                <Wrap>
                  <Form>
                    {/* 닉네임 */}
                    <FormControl>
                      <TextField label="닉네임" variant="outlined" defaultValue={user.displayName} color="secondary" inputProps={{ style: { fontSize: "20px" } }} />
                    </FormControl>
                    {/* 아이디 */}
                    <FormControl>
                      <TextField label="아이디" variant="filled" value={user.id} color="secondary" inputProps={{ style: { fontSize: "20px" } }} disabled />
                    </FormControl>
                    {/* 이메일 */}
                    <FormControl>
                      <TextField label="이메일" variant="filled" value={user.email} color="secondary" inputProps={{ style: { fontSize: "20px" } }} disabled />
                    </FormControl>
                    {/* 비밀번호 */}
                    <FormControl>
                      <TextField type="password" label="비밀번호" variant="outlined" color="secondary" inputProps={{ style: { fontSize: "20px" } }} />
                      <TextField type="password" label="비밀번호 확인" variant="outlined" color="secondary" inputProps={{ style: { fontSize: "20px" } }} />
                    </FormControl>
                    {/* 성별 */}
                    <FormControl>
                      <FormLabel id="demo-controlled-radio-buttons-group" color="secondary">
                        성별
                      </FormLabel>
                      <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" value={gender} onChange={genderRadioChange}>
                        <FormControlLabel value="female" control={<Radio color="secondary" />} label="여자" />
                        <FormControlLabel value="male" control={<Radio color="secondary" />} label="남자" />
                      </RadioGroup>
                    </FormControl>
                    {/* 언어 */}
                    {/* <FormControl> */}
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">언어</InputLabel>
                        <Select value={language} label="언어" onChange={languageChange}>
                          {menuItems.map(MenuItemFunc)}
                        </Select>
                      </FormControl>
                    </Box>
                    {/* </FormControl> */}
                    {/* 구독 */}
                    <FormControl>
                      <Label>구독</Label>
                      <Input value="thor@naver.com" readOnly></Input>
                    </FormControl>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Form>
                </Wrap>
              </Template>
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
}
