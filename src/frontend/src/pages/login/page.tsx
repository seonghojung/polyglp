export default function LoginPage() {
  return (
    <form action="https://localhost:8080/api/login" method="post">
      <div>
        <label htmlFor="userID">사용자 ID:</label>
        <input type="text" id="userID" name="userID" />
      </div>
      <div>
        <label htmlFor="password">비밀번호:</label>
        <input type="password" id="password" name="password" />
      </div>
      <div>
        <button type="submit">로그인</button>
      </div>
    </form>
  );
}
