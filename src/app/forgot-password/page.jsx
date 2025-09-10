"use client";
import { useState } from "react";
import { Brain, Mail, ArrowLeft, CheckCircle, Shield, Sparkles, Star, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("Email address is required");
      setIsLoading(false);
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const goToLogin = () => {
    window.location.href = '/login';
  };

  const features = [
    { icon: <Brain className="w-5 h-5" />, text: "AI-Powered Security" },
    { icon: <Star className="w-5 h-5" />, text: "Quick Recovery" },
    { icon: <Users className="w-5 h-5" />, text: "24/7 Support" },
    { icon: <Shield className="w-5 h-5" />, text: "Secure Process" }
  ];

  if (isSubmitted) {
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
            
            {/* Left Side - Success Message */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 backdrop-blur-lg rounded-full border border-green-400/20">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 text-sm font-medium">Email Sent Successfully!</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent leading-tight">
                  Check Email
                </h1>
                
                <p className="text-xl text-white/80 max-w-2xl mx-auto lg:mx-0">
                  We've sent a password reset link to <span className="font-semibold text-green-400">{email}</span>
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
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <span className="text-white/90 text-sm font-medium group-hover:text-white transition-colors duration-300">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-center lg:text-left">
                <p className="text-white/60 text-sm mb-4">
                  Didn't receive the email? Check your spam folder or contact support.
                </p>
              </div>
            </div>

            {/* Right Side - Actions */}
            <div className="w-full max-w-md mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl text-center">
                
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4">Reset Link Sent!</h2>
                <p className="text-white/70 mb-8">Follow the instructions in your email to reset your password</p>
                
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setEmail("");
                    }}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 group"
                  >
                    Send Another Email
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <button
                    onClick={goToLogin}
                    className="w-full bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/30 text-white font-medium py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group backdrop-blur-sm"
                  >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                    Back to Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="w-6 h-6 text-green-400/30" />
        </div>
        <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '2s' }}>
          <Star className="w-5 h-5 text-blue-400/30" />
        </div>
        <div className="absolute top-1/2 right-10 animate-float" style={{ animationDelay: '4s' }}>
          <CheckCircle className="w-7 h-7 text-green-400/30" />
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
              <button
                onClick={goToLogin}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5 text-blue-400" />
                <span className="text-white/90 text-sm font-medium">Back to Login</span>
              </button>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
                Reset Password
              </h1>
              
              <p className="text-xl text-white/80 max-w-2xl mx-auto lg:mx-0">
                Don't worry! Enter your email address and we'll send you a link to reset your password
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
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-white/70 text-sm">Uptime</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">&lt;1min</div>
                <div className="text-white/70 text-sm">Email Delivery</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-white/70 text-sm">Secure</div>
              </div>
            </div>
          </div>

          {/* Right Side - Reset Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              
              {/* Form Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Forgot Password?</h2>
                <p className="text-white/70">Enter your email to receive a reset link</p>
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
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your email address"
                    disabled={isLoading}
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-500/10 p-3 rounded-2xl border border-red-400/20">
                    <span className="text-sm">{error}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 group"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending Reset Link...
                    </>
                  ) : (
                    <>
                      Send Reset Link
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                {/* Back to Login */}
                <div className="text-center">
                  <p className="text-white/70">
                    Remember your password?{" "}
                    <Link
  href="/signup"
  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300 hover:underline"
>
  Signup
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
        <Mail className="w-7 h-7 text-cyan-400/30" />
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