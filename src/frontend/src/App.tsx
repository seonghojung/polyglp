import { router } from "./Router";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
