import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#232733] pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold tracking-tight text-white block">
              Auto<span className="text-[#f97316]">Fix</span>Pro
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Professional car repair and maintenance services. Quality spare parts and expert technicians you can trust.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-[#f97316] text-xs font-semibold uppercase tracking-wider mb-6">SERVICES</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/#services" className="hover:text-white transition-colors">Engine Repair</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Brake Service</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Oil Change</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Spare Parts</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-[#f97316] text-xs font-semibold uppercase tracking-wider mb-6">COMPANY</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/career" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/login" className="hover:text-white transition-colors">Login</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-[#f97316] text-xs font-semibold uppercase tracking-wider mb-6">CONTACT</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li>123 Garage Street</li>
              <li><a href="mailto:contact@autofixpro.com" className="hover:text-white transition-colors">contact@autofixpro.com</a></li>
              <li><a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            &copy; 2026 AutoFixPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;