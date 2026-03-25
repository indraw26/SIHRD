import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    children: [
      { label: "Engine Repair", href: "/#services" },
      { label: "Brake Service", href: "/#services" },
      { label: "Oil Change", href: "/#services" },
      { label: "Spare Parts", href: "/#services" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Career", href: "/career" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#232733]">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight text-white">
          Auto<span className="text-[#f97316]">Fix</span>Pro
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors">
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-4">
                    <div className="bg-white rounded-lg border shadow-xl min-w-[200px] py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-800 hover:bg-orange-50 hover:text-[#f97316] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            to="/login"
            className="px-6 py-2.5 bg-[#f97316] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Login
          </Link>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#232733] border-t border-white/10 pb-4">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className="flex items-center justify-between w-full px-6 py-3 text-sm font-medium text-white/80"
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === item.label && (
                  <div className="bg-black/20 px-8">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2.5 text-sm text-white/70 hover:text-[#f97316]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-3 text-sm font-medium text-white/80 hover:text-[#f97316]"
              >
                {item.label}
              </Link>
            )
          )}
          <div className="px-6 pt-2">
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="block text-center px-5 py-2.5 bg-[#f97316] text-white text-sm font-semibold rounded-lg"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
