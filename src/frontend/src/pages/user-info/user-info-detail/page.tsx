import { Await, LoaderFunction, defer, useLoaderData } from "react-router-dom";
import { BASE_URL, language } from "../../../Types";
import { Suspense } from "react";

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

export default function UserInfoDetailPage() {
  // 아트보드 : 1.1 회원 정보 상세
  // WBS : 회원정보상세
  const { data } = useLoaderData() as IData;
  return (
    <Suspense fallback={<p>로딩중입니다...</p>}>
      <Await resolve={data}>
        {(user: IUser) => {
          console.log(user);
          return (
            <div>
              <h1>{user.id}</h1>
              <h2>{user.email}</h2>
              <h2>{user.snsId}</h2>
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
}
