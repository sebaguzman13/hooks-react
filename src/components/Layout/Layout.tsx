import { Outlet } from "react-router-dom";
import Footer from "../main-components/Footer";
import Header from "../main-components/Header";
import NavigationRoutes from "../main-components/NavigationRoutes";

export default function Layout() {
  return (
    <>
      <Header />
      <NavigationRoutes/>
      <Outlet />
      <Footer />
    </>
  )
}