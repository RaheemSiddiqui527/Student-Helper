"use client";
import React, { useState } from "react";
import {
  Brain,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle,
  Shield,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      setIsLoading(true);

      // Step 1: Validate user credentials (simulate login validation)
      // In a real app, you would validate against your user database here
      console.log("Validating user credentials...");
      
      // For demo purposes, we'll assume validation is successful
      // You can add your actual login validation logic here
      
      // Step 2: Send OTP to the user's email
      console.log("Sending OTP to:", formData.email);
      
      const otpResponse = await fetch(`${API_URL}/api/auth/send-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      });

      let otpData;
      try {
        otpData = await otpResponse.json();
      } catch (error) {
        console.error("Error parsing OTP response:", error);
        throw new Error("Invalid server response");
      }

      if (!otpResponse.ok) {
        throw new Error(otpData.message || "Failed to send OTP");
      }

      // Step 3: Store email for OTP verification page
      localStorage.setItem("userEmail", formData.email);
      localStorage.setItem("tempUserEmail", formData.email); // Backup storage
      
      // Show success message
      toast.success("OTP sent to your email!");
      
      // Step 4: Redirect to OTP verification page after short delay
      setTimeout(() => {
        router.push("/verify-otp");
      }, 1500);

    } catch (error) {
      console.error("Login process failed:", error);
      
      // Show specific error messages
      if (error.message.includes("send OTP") || error.message.includes("Failed to send")) {
        toast.error("Failed to send verification code. Please try again.");
      } else if (error.message.includes("Invalid server response")) {
        toast.error("Server error. Please try again later.");
      } else {
        toast.error("Login failed. Please check your credentials and try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    { icon: <Brain className="w-5 h-5" />, text: "AI-Powered Matching" },
    { icon: <Star className="w-5 h-5" />, text: "Personalized Results" },
    { icon: <Users className="w-5 h-5" />, text: "Expert Community" },
    { icon: <Shield className="w-5 h-5" />, text: "Secure Platform" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Toast Provider */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/3 w-60 h-60 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-20 right-20 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Welcome */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
                <Brain className="w-5 h-5 text-blue-400" />
                <span className="text-white/90 text-sm font-medium">
                  Welcome Back!
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
                Sign In
              </h1>

              <p className="text-xl text-white/80 max-w-2xl mx-auto lg:mx-0">
                Continue your career journey and unlock new opportunities with
                personalized recommendations
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-white/90 text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Login Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Welcome Back
                </h2>
                <p className="text-white/70">
                  Sign in to continue your career journey
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-white/90 text-sm font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label className="text-white/90 text-sm font-medium flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 pr-12 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember me + Forgot */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded border-2 transition-all duration-300 ${
                        formData.rememberMe
                          ? "bg-gradient-to-r from-blue-500 to-cyan-600 border-blue-400"
                          : "border-white/30 bg-white/5"
                      }`}
                    >
                      {formData.rememberMe && (
                        <CheckCircle className="w-3 h-3 text-white absolute top-0.5 left-0.5 transform scale-75" />
                      )}
                    </div>
                    <span className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">
                      Remember me
                    </span>
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 group"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending verification code...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white/70">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-3 gap-4">
                <button className="flex items-center justify-center gap-3 py-3 px-4 bg-white/5 border border-white/20 rounded-2xl text-white/90 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group backdrop-blur-sm">
                  <FaGoogle className="text-red-500 w-5 h-5" />
                  <span className="font-medium group-hover:text-white">
                    Google
                  </span>
                </button>
                <button className="flex items-center justify-center gap-3 py-3 px-4 bg-white/5 border border-white/20 rounded-2xl text-white/90 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group backdrop-blur-sm">
                  <FaGithub className="text-gray-300 w-5 h-5" />
                  <span className="font-medium group-hover:text-white">
                    GitHub
                  </span>
                </button>
                <button className="flex items-center justify-center gap-3 py-3 px-4 bg-white/5 border border-white/20 rounded-2xl text-white/90 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group backdrop-blur-sm">
                  <FaLinkedin className="text-blue-500 w-5 h-5" />
                  <span className="font-medium group-hover:text-white">
                    LinkedIn
                  </span>
                </button>
              </div>

              {/* Signup link */}
              <div className="text-center mt-8">
                <p className="text-white/70">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/signup"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    Sign up here
                  </Link>
                </p>
              </div>
            </div>

            {/* Security Notice */}
            <div className="text-center mt-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-400/20 rounded-full">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-green-400/90 text-sm">
                  Your data is encrypted and secure
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="w-6 h-6 text-blue-400/30" />
      </div>
      <div
        className="absolute bottom-32 right-16 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <Star className="w-5 h-5 text-purple-400/30" />
      </div>
      <div
        className="absolute top-1/2 right-10 animate-float"
        style={{ animationDelay: "4s" }}
      >
        <Brain className="w-7 h-7 text-cyan-400/30" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}