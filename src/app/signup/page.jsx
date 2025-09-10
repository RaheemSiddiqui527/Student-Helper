"use client";
import React, { useState } from "react";
import { Brain, User, Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle, Shield, Sparkles, Star, Users, Target, PenTool } from "lucide-react";
import Link from "next/link";
export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    if (!formData.agreeTerms) {
      alert('Please agree to terms and conditions');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    
    // Handle success
    alert('Account created successfully!');
  };

  const benefits = [
    { icon: <Target className="w-5 h-5" />, text: "Personalized Career Paths" },
    { icon: <Brain className="w-5 h-5" />, text: "AI-Driven Insights" },
    { icon: <Users className="w-5 h-5" />, text: "Professional Network" },
    { icon: <PenTool className="w-5 h-5" />, text: "Skill Development" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(18)].map((_, i) => (
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
          
          {/* Left Side - Brand & Benefits */}
          <div className="text-center lg:text-left space-y-8">
            {/* Brand Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-white/90 text-sm font-medium">Start Your Journey Today</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                Join Us
              </h1>
              
              <p className="text-xl text-white/80 max-w-2xl mx-auto lg:mx-0">
                Create your account and unlock a world of career opportunities tailored specifically for you
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <span className="text-white/90 text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white/80 text-sm italic mb-3">
                "Career Matcher helped me transition from marketing to data science. The personalized recommendations were spot on!"
              </p>
              <div className="text-white/60 text-xs">
                - Priya Sharma, Data Scientist
              </div>
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              
              {/* Form Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Create Account</h2>
                <p className="text-white/70">Join thousands of successful professionals</p>
              </div>

              <div className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="text-white/90 text-sm font-medium flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

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
                    className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
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
                      className="w-full px-4 py-4 pr-12 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Create a strong password"
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

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <label className="text-white/90 text-sm font-medium flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 pr-12 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="flex items-start gap-3">
                  <div className="relative mt-1">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      required
                      className="sr-only"
                      id="terms"
                    />
                    <label htmlFor="terms" className="cursor-pointer">
                      <div className={`w-5 h-5 rounded border-2 transition-all duration-300 ${
                        formData.agreeTerms
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600 border-purple-400'
                          : 'border-white/30 bg-white/5 hover:border-white/50'
                      }`}>
                        {formData.agreeTerms && (
                          <CheckCircle className="w-3 h-3 text-white absolute top-0.5 left-0.5 transform scale-75" />
                        )}
                      </div>
                    </label>
                  </div>
                  <label htmlFor="terms" className="text-white/70 text-sm cursor-pointer hover:text-white transition-colors duration-300">
                    I agree to the{' '}
                    <span className="text-purple-400 hover:text-purple-300 underline">Terms of Service</span>
                    {' '}and{' '}
                    <span className="text-purple-400 hover:text-purple-300 underline">Privacy Policy</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 group"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create Account
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
                      Or sign up with
                    </span>
                  </div>
                </div>

                {/* Social Signup */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-3 py-3 px-4 bg-white/5 border border-white/20 rounded-2xl text-white/90 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group backdrop-blur-sm"
                  >
                    <div className="w-5 h-5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      G
                    </div>
                    <span className="font-medium group-hover:text-white transition-colors duration-300">Google</span>
                  </button>
                  
                  <button
                    type="button"
                    className="flex items-center justify-center gap-3 py-3 px-4 bg-white/5 border border-white/20 rounded-2xl text-white/90 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group backdrop-blur-sm"
                  >
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      Li
                    </div>
                    <span className="font-medium group-hover:text-white transition-colors duration-300">LinkedIn</span>
                  </button>
                </div>

                {/* Switch to Login */}
                <div className="text-center mt-8">
  <p className="text-white/70">
    Already have an account?{" "}
    <Link
      href="/login"
      className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200"
    >
      Sign in here
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
                  256-bit SSL encryption protects your data
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="w-6 h-6 text-purple-400/30" />
      </div>
      <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '2s' }}>
        <Star className="w-5 h-5 text-pink-400/30" />
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