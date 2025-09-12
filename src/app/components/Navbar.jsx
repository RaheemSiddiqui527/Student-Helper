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

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  // ✅ Load login state from localStorage on mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

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
      router.push("/login"); // agar protected aur not logged in hai to login page par bhejo
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
                  onClick={() => router.push("/login")}
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
                    setIsMobileMenuOpen(false);
                    router.push("/login");
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
    </>
  );
}
