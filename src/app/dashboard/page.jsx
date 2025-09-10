"use client";

import { useState } from "react";
import { 
  Brain, BookOpen, TrendingUp, Users, Award, Target, Calendar, Bell, 
  ArrowRight, Star, GraduationCap, Briefcase, DollarSign, 
  Clock, ChevronRight, User, Building2, Lightbulb
} from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Mock user data
  const user = {
    name: "Alex Johnson",
    avatar: "/api/placeholder/40/40",
    completedAssessments: 3,
    careerMatches: 12,
    savedColleges: 8,
  };

  // ✅ Quick stats
  const stats = [
    { icon: <Brain className="w-6 h-6" />, label: "AI Assessments", value: "3/5", color: "from-blue-500 to-cyan-600" },
    { icon: <Target className="w-6 h-6" />, label: "Career Matches", value: "12", color: "from-purple-500 to-pink-600" },
    { icon: <BookOpen className="w-6 h-6" />, label: "Saved Colleges", value: "8", color: "from-green-500 to-emerald-600" },
    { icon: <Award className="w-6 h-6" />, label: "Scholarships", value: "5", color: "from-orange-500 to-red-600" }
  ];

  // ✅ Recent activities
  const recentActivities = [
    { type: "assessment", title: "Completed Personality Assessment", time: "2 hours ago", icon: <Brain className="w-5 h-5" /> },
    { type: "college", title: "Added MIT to favorites", time: "5 hours ago", icon: <BookOpen className="w-5 h-5" /> },
    { type: "career", title: "Explored Software Engineering", time: "1 day ago", icon: <Briefcase className="w-5 h-5" /> },
    { type: "scholarship", title: "Applied for Merit Scholarship", time: "2 days ago", icon: <DollarSign className="w-5 h-5" /> }
  ];

  // ✅ Recommendations
  const recommendations = [
    { 
      title: "Complete Skills Assessment", 
      description: "Unlock personalized career recommendations", 
      icon: <Target className="w-8 h-8" />, 
      color: "from-blue-500 to-cyan-600",
      action: "Take Assessment",
      href: "/assessments"
    },
    { 
      title: "Explore Top Colleges", 
      description: "Find colleges matching your interests", 
      icon: <GraduationCap className="w-8 h-8" />, 
      color: "from-purple-500 to-pink-600",
      action: "Browse Colleges",
      href: "/colleges"
    },
    { 
      title: "Career Path Explorer", 
      description: "Discover your ideal career journey", 
      icon: <Lightbulb className="w-8 h-8" />, 
      color: "from-green-500 to-emerald-600",
      action: "Explore Careers",
      href: "/careers"
    }
  ];

  // ✅ Opportunities
  const opportunities = [
    { type: "Scholarship", title: "Tech Innovation Scholarship", amount: "$5,000", deadline: "Dec 15", applicants: "500+ applied" },
    { type: "College", title: "Stanford University", amount: "95% match", deadline: "Jan 1", applicants: "Open applications" },
    { type: "Career", title: "AI Engineer Position", amount: "$85k-120k", deadline: "Remote", applicants: "High demand" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Floating background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <div className="bg-white/5 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Welcome back, {user.name}!</h1>
                  <p className="text-white/70">Ready to continue your journey?</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Link href="/notifications" className="relative p-3 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all duration-300">
                  <Bell className="w-5 h-5 text-white/80" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                </Link>
                <Link href="/profile" className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center hover:opacity-90 transition">
                  <User className="w-6 h-6 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Section */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recommendations */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target className="w-7 h-7 text-blue-400" />
                  Recommended for You
                </h2>
                <div className="grid gap-6">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${rec.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          {rec.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">{rec.title}</h3>
                          <p className="text-white/70 text-sm mb-4">{rec.description}</p>
                          <Link href={rec.href} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm font-medium transition-all duration-300 group-hover:translate-x-1">
                            {rec.action} <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Opportunities */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Star className="w-7 h-7 text-yellow-400" />
                  Featured Opportunities
                </h2>
                <div className="space-y-4">
                  {opportunities.map((opp, index) => (
                    <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                              {opp.type}
                            </span>
                            <h3 className="text-lg font-semibold text-white">{opp.title}</h3>
                          </div>
                          <div className="flex items-center gap-6 text-sm text-white/70">
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" /> {opp.amount}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" /> {opp.deadline}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" /> {opp.applicants}
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent Activity */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-green-400" />
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                        {activity.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium text-sm mb-1">{activity.title}</p>
                        <p className="text-white/60 text-xs">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-2xl text-white transition-all duration-300 group">
                    <Building2 className="w-5 h-5 text-blue-400" />
                    <span className="flex-1 text-left">Browse Colleges</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-2xl text-white transition-all duration-300 group">
                    <Briefcase className="w-5 h-5 text-purple-400" />
                    <span className="flex-1 text-left">Explore Careers</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-2xl text-white transition-all duration-300 group">
                    <Award className="w-5 h-5 text-green-400" />
                    <span className="flex-1 text-left">Find Scholarships</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
