"use client";
import React, { useState } from "react";
import { Brain, Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle, Shield, Sparkles, Star, Users } from "lucide-react";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert("Login successful!");
      router.push("/dashboard"); // ✅ now works

    } catch (error) {
      console.error("Login failed:", error);
      alert("Something went wrong, please try again.");
    } finally {
      setIsLoading(false);
    }
  };



  const features = [
    { icon: <Brain className="w-5 h-5" />, text: "AI-Powered Matching" },
    { icon: <Star className="w-5 h-5" />, text: "Personalized Results" },
    { icon: <Users className="w-5 h-5" />, text: "Expert Community" },
    { icon: <Shield className="w-5 h-5" />, text: "Secure Platform" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '3s' }}></div>
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
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Brand & Welcome */}
          <div className="text-center lg:text-left space-y-8">
            {/* Brand Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
                <Brain className="w-5 h-5 text-blue-400" />
                <span className="text-white/90 text-sm font-medium">Welcome Back!</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
                Sign In
              </h1>
              
              <p className="text-xl text-white/80 max-w-2xl mx-auto lg:mx-0">
                Continue your career journey and unlock new opportunities with personalized recommendations
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

            {/* Success Stats */}
            <div className="flex justify-center lg:justify-start gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-white/70 text-sm">Happy Users</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-white/70 text-sm">Career Options</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-white/70 text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              
              {/* Form Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-white/70">Sign in to continue your career journey</p>
              </div>

              <div className="space-y-6">
                {/* Email Field */}
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

                {/* Password Field */}
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
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded border-2 transition-all duration-300 ${
                        formData.rememberMe
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-600 border-blue-400'
                          : 'border-white/30 bg-white/5'
                      }`}>
                        {formData.rememberMe && (
                          <CheckCircle className="w-3 h-3 text-white absolute top-0.5 left-0.5 transform scale-75" />
                        )}
                      </div>
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

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 group"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Signing In...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                {/* Divider */}
                <div className="relative">
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
  {/* Google */}
  <button
    type="button"
    className="flex items-center justify-center gap-3 py-3 px-4 bg-white/5 border border-white/20 rounded-2xl text-white/90 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group backdrop-blur-sm"
  >
    <FaGoogle className="text-red-500 w-5 h-5" />
    <span className="font-medium group-hover:text-white">Google</span>
  </button>

  {/* GitHub */}
  <button
    type="button"
    className="flex items-center justify-center gap-3 py-3 px-4 bg-white/5 border border-white/20 rounded-2xl text-white/90 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group backdrop-blur-sm"
  >
    <FaGithub className="text-gray-300 w-5 h-5" />
    <span className="font-medium group-hover:text-white">GitHub</span>
  </button>

  {/* LinkedIn */}
  <button
    type="button"
    className="flex items-center justify-center gap-3 py-3 px-4 bg-white/5 border border-white/20 rounded-2xl text-white/90 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group backdrop-blur-sm"
  >
    <FaLinkedin className="text-blue-500 w-5 h-5" />
    <span className="font-medium group-hover:text-white">LinkedIn</span>
  </button>
</div>


                {/* Switch to Signup */}
                <div className="text-center mt-8">
  <p className="text-white/70">
    Don't have an account?{" "}
    <Link
      href="/signup"
      className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
    >
      Sign up here
    </Link>
  </p>
</div>

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
      <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '2s' }}>
        <Star className="w-5 h-5 text-purple-400/30" />
      </div>
      <div className="absolute top-1/2 right-10 animate-float" style={{ animationDelay: '4s' }}>
        <Brain className="w-7 h-7 text-cyan-400/30" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
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