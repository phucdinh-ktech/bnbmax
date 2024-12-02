import { Outlet } from "react-router-dom";

import Header from "@/components/layouts/Header";

const RootLayout = () => {
  return (
    <div className="">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
