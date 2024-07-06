import { Outlet } from "react-router-dom";
import { Text } from "./Typography";

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen just-between">
      <Header />
      <div className="mb-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

const Header = () => {
  return (
    <>
    </>
  )
}

const Footer = () => {
  return (
    <div className="bg-[#20232a] flex items-center justify-center">
      <Text>Critter Sheets is a free service.</Text>
    </div>
  )
}