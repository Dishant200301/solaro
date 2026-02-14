import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "SERVICES", path: "/services" },
  { label: "BLOG", path: "/blog" },
  { label: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

  const linkStyles = `font-body text-sm font-medium uppercase tracking-[2px] transition-colors hover:text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <header className="w-full pt-6 px-5 md:px-8 lg:px-16 xl:px-28">
      <div className="max-w-[1400px] mx-auto border border-border rounded-lg h-16 flex items-center justify-between px-6 lg:px-8 relative bg-[#fbf4ef] backdrop-blur-sm">
        {/* Desktop Nav - Visible only min-1400px */}
        <nav className="hidden min-[1400px]:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${linkStyles} ${location.pathname === link.path ? "text-foreground" : "text-muted-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logo - Center Desktop (min-1400px), Left Mobile */}
        <Link
          to="/"
          className="flex items-center min-[1400px]:absolute min-[1400px]:left-1/2 min-[1400px]:-translate-x-1/2 min-[1400px]:top-1/2 min-[1400px]:-translate-y-1/2 min-[1400px]:h-10 min-[1400px]:px-8 min-[1400px]:border-l min-[1400px]:border-r min-[1400px]:border-[#9f2b2b]/30"
        >
          <Logo className="h-8 w-auto" />
        </Link>

        {/* Desktop CTA - Right - Visible only min-1400px */}
        <div className="hidden min-[1400px]:flex items-center gap-6">
          <Link
            to="/book-appointment"
            className="font-body text-sm font-semibold uppercase tracking-[1px] bg-primary text-primary-foreground px-6 py-2.5 btn-radius transition-colors hover:bg-primary/90"
          >
            Book a Appointment
          </Link>
        </div>

        {/* Mobile hamburger - Hidden min-1400px */}
        <button
          className="min-[1400px]:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="min-[1400px]:hidden max-w-[1400px] mx-auto mt-2 border border-border rounded-lg bg-card p-6 animate-fade-in-up">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`${linkStyles} ${location.pathname === link.path ? "text-foreground" : "text-muted-foreground"} w-fit`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/book-appointment"
              onClick={() => setMobileOpen(false)}
              className="font-body text-sm font-semibold uppercase tracking-[1px] bg-primary text-primary-foreground px-6 py-3 btn-radius text-center transition-colors hover:bg-primary/90 mt-2"
            >
              Book a Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
