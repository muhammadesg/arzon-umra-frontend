import React, { ReactNode, useEffect } from 'react';
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import "aos/dist/aos.css";
import AOS from "aos";
import { SiteSettingsInterface } from '../Types';

interface ILayoutsProps {
  children: ReactNode;
  siteSettings: SiteSettingsInterface;
}

const Layout = ({ children, siteSettings }: ILayoutsProps) => {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <Navbar/>
      <main>{children}</main>
      <Footer data={siteSettings}/>
    </>
  )
}

export default Layout