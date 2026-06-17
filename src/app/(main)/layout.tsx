import BottomNav from "@/src/components/layout/BottomNav";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import SideNav from "@/src/components/layout/SideNav";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen overflow-x-hidden">
      <SideNav />
      <div className="relative flex min-h-screen min-w-0 flex-1 flex-col pb-17.25 lg:ml-64 lg:pb-0">
        <Header />
        <div className="min-w-0 flex-1 overflow-x-hidden">{children}</div>
        <Footer />
      </div>
      <BottomNav />
    </div>
  );
};

export default MainLayout;
