import SideLinks from "@/components/SideLinks";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className='containers'>
        <div className='flex gap-x-3 mt-4'>
          <div className=' w-[804px] '>{children}</div>
          <div className='h-full w-[326px] '>
            <Hero />
          </div>
        </div>
      </div>
      <Footer />
      <SideLinks />
    </>
  );
};

export default MainLayout;
