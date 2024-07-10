import { Outlet } from "react-router-dom";
import { Text, Title } from "./Typography";
import { Link } from "react-router-dom";

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
    <div className="flex flex-row">
      <Title>
        <Link to="/" className="hover:underline">CritterSheets</Link>
      </Title>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="bg-[#EEEEEE] flex items-center justify-center">
      <Text>CritterSheets is a free service.</Text>
    </div>
  )
}