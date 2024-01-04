import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

function RootLayoutPage() {
  return (
    <>
     <main>
      <MainNavigation />
      <Outlet />
      </main>
    </>
  )
}
export default RootLayoutPage;