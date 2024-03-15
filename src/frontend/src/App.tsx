import { router } from "./Router";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
