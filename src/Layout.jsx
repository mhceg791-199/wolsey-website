import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "./components/shared/Footer/Footer";
import { SidebarWithBurgerMenu } from "./components/shared/Navbar/Sidebar/Sidebar";

function Layout({ children }) {
  const location = useLocation();
  const [inHomeTop, setInHomeTop] = useState(true); 

  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setInHomeTop(scrollPosition < windowHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const navbarWhite = !isHome || !inHomeTop;

  return (
    <>
      {/* Navbar */}
      <div
        className={`flex justify-between items-center px-2 md:px-10 fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${
          navbarWhite ? "bg-white animationNavbar shadow-xl" : "bg-[rgba(0,0,0,0.5)]"
        }`}
      >
        <Link to="/" className="w-full">
          <img
            className="w-1/2 md:w-[24%] p-2 transition-all duration-300"
            src={navbarWhite ? "/images/logo.webp" : "/images/logo2.webp"}
            alt="WOLSEY STRUCTURAL ENGINEERING"
          />
        </Link>
        <SidebarWithBurgerMenu inHomePage={!navbarWhite} />
      </div>

      <main>{children}</main>

      <Footer />
    </>
  );
}

export default Layout;
