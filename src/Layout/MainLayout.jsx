import { Outlet } from "react-router-dom";
import { Navigation } from "../Components/Navigation/Navigation";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";

export const MainLayout = () => {
  return (
    <>
      <main>
          <Navigation />
          <Outlet />
      </main>
    </>
    )
}