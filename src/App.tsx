// import useBearStore from "@/libs/store/bearStore";

// import viteLogo from "/vite.svg";

// import reactLogo from "./assets/react.svg";

import { ConfigProvider } from "antd";
import "./App.css";
import RootLayout from "@/components/layouts/RootLayout";

function App() {
  // const bears = useBearStore(state => state.bears);
  // const increasePopulation = useBearStore(state => state.increasePopulation);

  return (
    <ConfigProvider>
      <RootLayout />
    </ConfigProvider>
  );
}

export default App;
