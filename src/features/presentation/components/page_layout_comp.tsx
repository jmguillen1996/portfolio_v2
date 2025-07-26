import { useState } from "react";
import HeaderComp from "./header_comp";
import HeaderDrawerComp from "./heaer_drawer_comp";
export const PageLayoutComp = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background text-white">
      <HeaderComp menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HeaderDrawerComp menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {children}
    </div>
  );
};
