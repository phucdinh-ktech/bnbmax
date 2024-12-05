// import useBearStore from "@/libs/store/bearStore";

// import viteLogo from "/vite.svg";

// import reactLogo from "./assets/react.svg";

import { Toaster } from "react-hot-toast";

import { AppRouter } from "../src/router/AppRouter";
import "./App.css";

function App() {
  // const bears = useBearStore(state => state.bears);
  // const increasePopulation = useBearStore(state => state.increasePopulation);

  return (
    <>
      <AppRouter />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "14px",
            background: "rgba(0, 0, 0, 1)",
            color: "#ffffff",
            border: "0.2px solid #6b6969",
          },
        }}
      />
    </>
  );
}

export default App;
