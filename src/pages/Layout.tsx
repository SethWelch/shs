import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="site" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <SiteHeader />
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

export default Layout;
