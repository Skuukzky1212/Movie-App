import { Outlet } from "react-router-dom";
import Header from "@components/Header";
import { Suspense } from "react";
import Loading from "@components/Loading";
import ScrollToHashElement from "@components/ScrollToHashElement";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
        <ScrollToHashElement />
        <Outlet />
      </Suspense>
    </div>
  );
};

export default RootLayout;
