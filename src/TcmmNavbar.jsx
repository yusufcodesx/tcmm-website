import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Get Evaluated", href: "#evaluation" },
  { label: "Contact Us", href: "#contact" },
];

export default function TcmmNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#EDE4D8] shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 md:px-12 h-17 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-3 no-underline"
        >
          <div className="w-9 h-9 bg-[#C05621] rounded-md flex items-center justify-center text-white font-bold text-sm">
            TC
          </div>
          <div className="leading-tight">
            <span className="block font-bold text-[17px] text-[#1C1009]">TCMM</span>
            <span className="block text-[10px] text-[#8C7060]">Cybersecurity</span>
          </div>
        </a>

        {/* Desktop links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="text-sm font-medium px-4 py-2 rounded-md transition-all duration-150 no-underline whitespace-nowrap text-[#5C4A38] hover:text-[#C05621] hover:bg-[#FDF6EE]"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA — hidden on mobile */}
        <a
          href="#evaluation"
          onClick={(e) => handleNavClick(e, "#evaluation")}
          className="hidden md:block px-5 py-2.5 bg-[#C05621] hover:bg-[#A84A1A] text-white font-semibold text-sm rounded-md transition-all duration-200 active:scale-[0.98] whitespace-nowrap no-underline"
        >
          Start Assessment
        </a>

        {/* Hamburger — only on mobile */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col gap-1.25 p-2 rounded-md hover:bg-[#FDF6EE] transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`block w-5.5 h-0.5 bg-[#5C4A38] rounded transition-transform duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-1.75" : ""}`} />
          <span className={`block w-5.5 h-0.5 bg-[#5C4A38] rounded transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5.5 h-0.5 bg-[#5C4A38] rounded transition-transform duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-1.75" : ""}`} />
        </button>
      </nav>

      {/* Mobile dropdown — only on mobile */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#EDE4D8] bg-white">
          <div className="flex flex-col p-3 gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="flex items-center justify-between text-[15px] font-medium px-4 py-3 rounded-md no-underline transition-all duration-150 text-[#5C4A38] hover:text-[#C05621] hover:bg-[#FDF6EE]"
              >
                {label}
                <span className="text-xs opacity-50">›</span>
              </a>
            ))}
          </div>
          <div className="px-4 pb-4 pt-1 border-t border-[#EDE4D8]">
            <a
              href="#evaluation"
              onClick={(e) => handleNavClick(e, "#evaluation")}
              className="block w-full py-3.5 bg-[#C05621] hover:bg-[#A84A1A] text-white font-semibold text-[15px] rounded-md transition-all duration-200 text-center no-underline"
            >
              Start Your Assessment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}