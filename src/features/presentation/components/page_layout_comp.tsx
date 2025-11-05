import { useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderComp from "./header_comp";
import HeaderDrawerComp from "./heaer_drawer_comp";

export const PageLayoutComp = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  // Hide menu navigation on project pages
  const hideMenu = location.pathname.startsWith("/projects/");
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-white">
      <HeaderComp menuOpen={menuOpen} setMenuOpen={setMenuOpen} hideMenu={hideMenu} />
      <HeaderDrawerComp menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {children}
    </div>
  );
};
