import InputField from './InputField';

const LoginForm = () => {
  return (
    <form className="mt-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-5">
        <InputField
          label="Email"
          type="email"
          placeholder="you@example.com"
          required
        />
        <InputField
          label="Password"
          isPassword
          placeholder="••••••••"
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
          />
          <span className="text-sm text-slate-500">Remember me</span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 text-white font-semibold py-3.5 rounded-xl hover:bg-orange-600 transition-colors hover:shadow-lg active:scale-95 cursor-pointer"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
