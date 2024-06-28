import SideLinks from "@/components/SideLinks";
import GamesCategory from "@/components/category/GamesCategory";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className='containers'>
        <div>
          <div>{children}</div>
        </div>
      </div>
      <Footer />
      <SideLinks />
    </>
  );
};

export default SearchLayout;
