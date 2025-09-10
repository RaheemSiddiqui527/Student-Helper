"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  User,
  Home,
  Building,
  Briefcase,
  DollarSign,
  LogIn,
} from "lucide-react";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  // ✅ Load login state from localStorage on mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // ✅ Handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true"); // persist login
    setShowLoginModal(false);
  };

  // ✅ Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { to: "/", label: "Dashboard", icon: Home, protected: false },
    { to: "/colleges", label: "Colleges", icon: Building, protected: true },
    { to: "/careers", label: "Careers", icon: Briefcase, protected: true },
    { to: "/scholarships", label: "Scholarships", icon: DollarSign, protected: true },
    { to: "/about", label: "About", icon: User, protected: false },
    ...(isLoggedIn
      ? [{ to: "/profile", label: "Profile", icon: User, protected: true }]
      : []),
  ];

  const handleNavClick = (e, item) => {
    if (item.protected && !isLoggedIn) {
      e.preventDefault();
      if (!showLoginModal) setShowLoginModal(true); // show modal only if not already open
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white shadow-lg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 cursor-pointer">
              <div className="text-2xl animate-pulse">🎓</div>
              <h1 className="font-bold text-xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Student Helper
              </h1>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    href={item.to}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 hover:bg-white/10 hover:backdrop-blur-sm ${
                      isActive
                        ? "bg-white/20 shadow-md border border-white/30 scale-105"
                        : "hover:scale-105"
                    }`}
                  >
                    <IconComponent size={18} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center space-x-4">
              {!isLoggedIn ? (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 flex items-center space-x-2"
                >
                  <LogIn size={18} /> <span>Login</span>
                </button>
              ) : (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                >
                  Logout
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 px-4 pb-4 space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.to}
                  href={item.to}
                  onClick={(e) => handleNavClick(e, item)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10"
                >
                  <IconComponent size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <div className="pt-2 border-t border-white/20">
              {!isLoggedIn ? (
                <button
                  onClick={() => {
                    setShowLoginModal(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 py-2 rounded-lg"
                >
                  <LogIn size={18} /> Login
                </button>
              ) : (
                <button
                  onClick={handleLogout}
                  className="w-full bg-white/10 hover:bg-white/20 py-2 rounded-lg"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
          <div className="bg-gradient-to-br from-slate-900/95 via-indigo-900/95 to-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md p-8 border border-white/20 relative">
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all duration-200 z-10"
              onClick={() => setShowLoginModal(false)}
            >
              <X size={20} />
            </button>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <LogIn className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-sm text-white/70 mb-4">
                  New user?{" "}
                  <button
                    onClick={() => {
                      setShowLoginModal(false);
                      router.push("/signup");
                    }}
                    className="text-blue-400 hover:text-blue-300 font-medium underline transition-colors duration-300"
                  >
                    Register Now
                  </button>
                </p>
              </div>

              {/* Social Login */}
              <div className="space-y-3 mb-6">
                <button className="w-full flex items-center justify-center gap-3 bg-red-500/10 hover:bg-red-500/20 border border-red-400/20 hover:border-red-400/40 text-red-300 hover:text-red-200 py-3 rounded-2xl font-medium transition-all duration-300">
                  <FaGoogle size={20} /> Continue with Google
                </button>
                <button className="w-full flex items-center justify-center gap-3 bg-gray-700/20 hover:bg-gray-700/30 border border-gray-500/20 hover:border-gray-500/40 text-gray-300 hover:text-gray-200 py-3 rounded-2xl font-medium transition-all duration-300">
                  <FaGithub size={20} /> Continue with GitHub
                </button>
                <button className="w-full flex items-center justify-center gap-3 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-400/20 hover:border-blue-400/40 text-blue-300 hover:text-blue-200 py-3 rounded-2xl font-medium transition-all duration-300">
                  <FaLinkedin size={20} /> Continue with LinkedIn
                </button>
              </div>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white/70">
                    or continue with email
                  </span>
                </div>
              </div>

              {/* Login Form */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Username or Email"
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300"
                />

                <div className="flex justify-between items-center text-sm">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="sr-only" />
                    <div className="w-5 h-5 rounded border-2 border-white/30 bg-white/5"></div>
                    <span className="text-white/70">Remember me</span>
                  </label>

                  <button
                    onClick={() => {
                      setShowLoginModal(false);
                      router.push("/forgot-password");
                    }}
                    className="text-blue-400 hover:text-blue-300 underline text-sm font-medium"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogin();
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 group"
                >
                  Sign In
                  <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
