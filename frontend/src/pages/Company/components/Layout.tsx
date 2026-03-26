import Header from "./Header";
import Footer from "./Footer";
import "@/company.css";

const Layout = ({ children, showFooter = true }: { children: React.ReactNode; showFooter?: boolean }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 pt-16 md:pt-20">{children}</main>
    {showFooter && <Footer />}
  </div>
);

export default Layout;
