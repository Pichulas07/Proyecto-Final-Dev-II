export default function Login() {
  return (
    <div className="flex items-center justify-center h-full">
      <form action="/home">
        <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl w-[350px] border border-slate-700">
          
          <h2 className="text-2xl font-semibold text-white text-center mb-6">
            Login
          </h2>

          <div className="mb-4">
            <input
              type="email"
              placeholder="EMAIL"
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="PASSWORD"
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6 text-center text-sm text-slate-300">
            <span>Don&apos;t have an account? </span>
            <a
              href="/register"
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              Register
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200"
          >
            Login
          </button>

        </div>
      </form>
    </div>
  );
}
