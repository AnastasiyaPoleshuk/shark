import { Outlet } from "react-router-dom";
import "./Layout.scss";
import { Menu } from "../../components/Menu/Menu";

export const Layout = () => {
  return (
    <div className="layout">
      {/* <Header /> */}
      <div className="app">
        <Menu />
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};
