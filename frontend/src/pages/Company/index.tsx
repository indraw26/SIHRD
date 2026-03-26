import { Link } from "react-router-dom";
import { Wrench, ShieldCheck, Clock, Settings } from "lucide-react";
import Layout from "./components/Layout";
import heroImg from "../../assets/hero-repair.jpg";
import sparepartsImg from "../../assets/spareparts.jpg";
import garageImg from "../../assets/garage.jpg";

const services = [
  { icon: Wrench, title: "Engine Repair", desc: "Full diagnostics and engine overhaul by certified mechanics." },
  { icon: ShieldCheck, title: "Brake Service", desc: "Brake pad replacement, rotor resurfacing, and system inspection." },
  { icon: Clock, title: "Oil Change", desc: "Quick and affordable oil changes with premium synthetic options." },
  { icon: Settings, title: "Spare Parts", desc: "Genuine OEM parts and quality aftermarket alternatives." },
];

const HomePage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-screen min-h-screen flex items-center -mt-20">
      <img src={heroImg} alt="Car repair workshop" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative z-10 pt-20">
        <div className="max-w-2xl animate-fade-in">
          <p className="text-orange-500 font-semibold text-xs md:text-sm uppercase tracking-widest mb-4">
            Expert Auto Care
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Precision Repair.<br />Trusted Service.
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            From routine maintenance to complex repairs &mdash; our certified team keeps your vehicle running at peak performance.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/about" className="px-8 py-3.5 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
              Learn More
            </Link>
            <Link to="/login" className="px-8 py-3.5 border hover:border-white border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Services */}
    <section id="services" className="py-24 bg-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-xs uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white border hover:border-orange-500/20 border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                <s.icon className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">{s.title}</h3>
              <p className="text-base text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Grid */}
    <section className="py-24 bg-slate-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden min-h-96 group cursor-pointer">
            <img src={sparepartsImg} alt="Car spare parts" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={1280} height={960} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="relative z-10 p-10 flex flex-col justify-end h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Quality Spare Parts</h3>
              <p className="text-white/80">Genuine OEM and premium aftermarket components for every make and model.</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden min-h-96 group cursor-pointer">
            <img src={garageImg} alt="Professional auto garage" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={1280} height={960} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="relative z-10 p-10 flex flex-col justify-end h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">State-of-the-Art Facility</h3>
              <p className="text-white/80">Modern equipment and certified technicians delivering exceptional results.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default HomePage;
