import { NavLink } from "react-router";
import { useAuth } from "../store/authStore";
import { primaryBtn, secondaryBtn, pageBackground } from "../styles/common.js";

function Home() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);

  return (
    <div className={`${pageBackground} relative overflow-hidden flex flex-col items-center justify-center py-16 sm:py-24 px-4`}>
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden" aria-hidden="true">
        <div className="w-[420px] h-[420px] sm:w-[600px] sm:h-[600px] rounded-full bg-gradient-to-br from-violet-400/30 to-indigo-400/20 dark:from-violet-600/20 dark:to-indigo-600/10 blur-3xl -translate-y-1/3" />
      </div>

      <div className="relative max-w-3xl text-center space-y-6 sm:space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0f172a] dark:text-white tracking-tight leading-tight">
          Welcome to <span className="text-violet-600 dark:text-violet-400">SocialApp</span>
        </h1>

        <p className="text-base sm:text-xl text-[#64748b] dark:text-[#94a3b8] leading-relaxed max-w-2xl mx-auto">
          Share your moments, follow the people you love, and discover posts that inspire you.
          Your feed, your community.
        </p>

        {!isAuthenticated && (
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
            <NavLink to="/register" className={`${primaryBtn} text-center`}>
              Get Started
            </NavLink>
            <NavLink to="/login" className={`${secondaryBtn} text-center`}>
              Sign In
            </NavLink>
          </div>
        )}

        {isAuthenticated && (
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
            <NavLink to="/feed" className={`${primaryBtn} text-center`}>
              View Feed
            </NavLink>
            <NavLink to="/explore" className={`${secondaryBtn} text-center`}>
              Explore
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
