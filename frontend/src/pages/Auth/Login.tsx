import { Link } from 'react-router-dom';
import loginBg from '../../assets/hero-repair.jpg';
import LoginForm from './components/LoginForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex bg-slate-50">
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 bg-slate-900">
        <img 
          src={loginBg} 
          alt="Mechanic working on car engine" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        
        <Link to="/" className="relative z-10 text-2xl font-bold tracking-tight text-white mb-auto inline-block">
          Auto<span className="text-orange-500">Fix</span>Pro
        </Link>

        <div className="relative z-10 mt-auto max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Welcome Back
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Access your account to manage appointments, track repairs, and view service history.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24">
        <div className="w-full max-w-md space-y-8">
          
          <div className="lg:hidden mb-8">
            <Link to="/" className="text-3xl font-bold tracking-tight text-slate-900">
              Auto<span className="text-orange-500">Fix</span>Pro
            </Link>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-slate-900">Sign In</h1>
            <p className="mt-3 text-slate-500">
              Enter your credentials to access your account
            </p>
          </div>

          <LoginForm />

          <p className="text-center text-sm text-slate-500 mt-8">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-orange-500 hover:text-orange-600 transition-colors">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
