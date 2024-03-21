import { router } from "./Router";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";

export const BASE_URL = process.env.REACT_APP_MODE === "dev" ? "http://localhost:8080" : "";
function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
