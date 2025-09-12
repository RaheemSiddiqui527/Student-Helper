"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Shield,
  ArrowRight,
  RefreshCw,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

// ✅ Email Masking Function
const maskEmail = (email) => {
  if (!email) return "";
  const [user, domain] = email.split("@");
  if (!user || !domain) return email;
  if (user.length <= 3) {
    return user[0] + "******@" + domain;
  }
  return user.slice(0, 3) + "******" + user.slice(-3) + "@" + domain;
};

export default function OTPVerification() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [isResending, setIsResending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const inputRefs = useRef([]);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // ✅ Original email (for API)
  const email =
    typeof window !== "undefined" ? localStorage.getItem("userEmail") : null;

  // ✅ Masked email (for UI)
  const maskedEmail = maskEmail(email);

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // Handle OTP input change
  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");
    if (value && index < 5) inputRefs.current[index + 1]?.focus();
  };

  // Handle backspace
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    const newOtp = [...otp];
    for (let i = 0; i < pastedData.length; i++) {
      if (i < 6 && /^\d$/.test(pastedData[i])) {
        newOtp[i] = pastedData[i];
      }
    }
    setOtp(newOtp);
    const lastFilledIndex = newOtp.findLastIndex((digit) => digit !== "");
    if (lastFilledIndex < 5) inputRefs.current[lastFilledIndex + 1]?.focus();
  };

  // Verify OTP
  const handleVerifyOTP = async () => {
    const otpString = otp.join("");
    if (otpString.length !== 6) {
      setError("Please enter all 6 digits");
      return;
    }

    setIsVerifying(true);
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp: otpString, email }), // ✅ Use original email
      });

      let data;
      try {
        data = await res.json();
      } catch {
        const text = await res.text();
        console.error("Non-JSON response:", text);
        throw new Error("Invalid server response");
      }

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        setSuccess(true);
        setTimeout(() => router.push("/dashboard"), 1500);
      } else {
        setError(data.message || "Invalid OTP. Please try again.");
      }
    } catch (err) {
      setError("Verification failed. Please try again.");
      console.error(err);
    } finally {
      setIsVerifying(false);
    }
  };

  // Resend OTP
  const handleResendOTP = async () => {
    if (!email) {
      setError("Email not found. Please login again.");
      return;
    }

    setIsResending(true);
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/auth/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }), // ✅ Use original email
      });

      let data;
      try {
        data = await res.json();
      } catch {
        const text = await res.text();
        console.error("Non-JSON response:", text);
        throw new Error("Invalid server response");
      }

      if (res.ok) {
        setTimeLeft(300);
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
        alert("✅ New OTP sent to your email!");
      } else {
        setError(data.message || "Failed to resend OTP.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to resend OTP. Please try again.");
    } finally {
      setIsResending(false);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Success screen
  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center px-6">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white">
            Verification Successful!
          </h2>
          <p className="text-white/70">Redirecting to your dashboard...</p>
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  // OTP Input UI
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Verify Your Account
              </h2>
              <p className="text-white/70 text-sm">
                We've sent a 6-digit verification code to your email:
              </p>
              {maskedEmail && (
                <p className="text-white text-sm font-semibold mt-2">
                  {maskedEmail}
                </p>
              )}
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <label className="text-white/90 text-sm font-medium block text-center">
                  Enter Verification Code
                </label>
                <div
                  className="flex justify-center gap-3"
                  onPaste={handlePaste}
                >
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) =>
                        handleOtpChange(
                          index,
                          e.target.value.replace(/\D/g, "")
                        )
                      }
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className={`w-12 h-12 text-center text-xl font-bold bg-white/5 border-2 rounded-2xl text-white focus:outline-none transition-all duration-300 backdrop-blur-sm ${
                        error
                          ? "border-red-400 focus:border-red-400"
                          : "border-white/20 focus:border-blue-400 focus:bg-white/10"
                      }`}
                      placeholder="0"
                    />
                  ))}
                </div>
                {error && (
                  <div className="flex items-center gap-2 text-red-400 text-sm justify-center">
                    <AlertCircle className="w-4 h-4" /> {error}
                  </div>
                )}
              </div>

              <div className="text-center">
                {timeLeft > 0 ? (
                  <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
                    <Clock className="w-4 h-4" /> Code expires in{" "}
                    {formatTime(timeLeft)}
                  </div>
                ) : (
                  <p className="text-red-400 text-sm font-medium">
                    Code expired
                  </p>
                )}
              </div>

              <button
                onClick={handleVerifyOTP}
                disabled={isVerifying || otp.join("").length !== 6}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 group"
              >
                {isVerifying ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Verifying...
                  </>
                ) : (
                  <>
                    Verify Code
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>

              <div className="text-center">
                <p className="text-white/70 text-sm mb-3">
                  Didn't receive the code?
                </p>
                <button
                  onClick={handleResendOTP}
                  disabled={timeLeft > 0 || isResending}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300 hover:underline disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto disabled:no-underline"
                >
                  {isResending ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />{" "}
                      Resending...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-4 h-4" />
                      {timeLeft > 0
                        ? `Resend in ${formatTime(timeLeft)}`
                        : "Resend Code"}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 space-y-2">
            <p className="text-white/50 text-xs">
              Check your spam folder if you don't see the email
            </p>
            <button
              onClick={() => router.back()}
              className="text-blue-400 hover:text-blue-300 text-sm underline transition-colors duration-300"
            >
              ← Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
