"use client";
import React, { useState, useEffect } from "react";
import { 
  GraduationCap, 
  TrendingUp, 
  DollarSign, 
  Brain, 
  Star, 
  Users, 
  ChevronRight,
  Sparkles,
  Target,
  BookOpen,
  Award,
  Calendar,
  Bell
} from "lucide-react";
import Card from "./components/card";
import Link from "next/link";
const statsData = [
  { 
    icon: <GraduationCap className="w-6 h-6" />, 
    title: "Colleges Available", 
    value: "500+", 
    trend: "+12%",
    gradient: "from-blue-500 to-cyan-600" 
  },
  { 
    icon: <Brain className="w-6 h-6" />, 
    title: "Career Paths", 
    value: "200+", 
    trend: "+8%",
    gradient: "from-purple-500 to-pink-600" 
  },
  { 
    icon: <DollarSign className="w-6 h-6" />, 
    title: "Scholarships", 
    value: "150+", 
    trend: "+15%",
    gradient: "from-emerald-500 to-teal-600" 
  },
  { 
    icon: <Users className="w-6 h-6" />, 
    title: "Success Stories", 
    value: "10K+", 
    trend: "+25%",
    gradient: "from-orange-500 to-red-600" 
  }
];

const quickActions = [
  { 
    title: "Find Colleges", 
    description: "Discover and compare top colleges that match your preferences and budget",
    icon: <GraduationCap className="w-6 h-6" />,
    href: "/colleges",
    gradient: "from-blue-500 to-purple-600" 
  },
  { 
    title: "Explore Careers", 
    description: "Find career paths that align with your skills and interests for a bright future",
    icon: <Brain className="w-6 h-6" />,
    href: "/careers",
    gradient: "from-purple-500 to-pink-600" 
  },
  { 
    title: "Get Scholarships", 
    description: "Access financial aid and scholarship opportunities to fund your education",
    icon: <DollarSign className="w-6 h-6" />,
    href: "/scholarships",
    gradient: "from-emerald-500 to-teal-600" 
  }
];

const recentActivities = [
  { action: "Viewed IIT Delhi profile", time: "2 hours ago", type: "college" },
  { action: "Explored Software Engineering career", time: "5 hours ago", type: "career" },
  { action: "Applied for Merit Scholarship", time: "1 day ago", type: "scholarship" },
  { action: "Updated profile information", time: "2 days ago", type: "profile" }
];

const upcomingDeadlines = [
  { event: "JEE Main Registration", date: "Dec 15, 2024", type: "exam" },
  { event: "Merit Scholarship Application", date: "Jan 10, 2025", type: "scholarship" },
  { event: "College Counseling Session", date: "Jan 20, 2025", type: "counseling" }
];

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
              <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
              <span className="text-white/90 text-sm font-medium">{getGreeting()}, Student!</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Student Helper
            </h1>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Your comprehensive platform for college selection, career guidance, and scholarship opportunities. 
              Let's build your academic success story together.
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 text-sm font-medium">Platform Active</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30">
                <Target className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Goal Oriented</span>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {statsData.map((stat, index) => (
              <div key={stat.title} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-green-400 text-sm font-medium">
                      <TrendingUp className="w-4 h-4" />
                      {stat.trend}
                    </div>
                  </div>
                  
                  <h3 className="text-white/70 text-sm font-medium mb-2">{stat.title}</h3>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-6 h-6 text-blue-400" />
              <h2 className="text-3xl font-bold text-white">Quick Actions</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {quickActions.map((action, index) => (
                <Card
                  key={action.title}
                  title={action.title}
                  description={action.description}
                  icon={action.icon}
                  gradient={action.gradient}
                  onClick={() => window.location.href = action.href}
                  className="hover:shadow-2xl hover:shadow-blue-500/25"
                />
              ))}
            </div>
          </div>

          {/* Two Column Layout for Activities and Deadlines */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Recent Activities */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-emerald-400" />
                <h3 className="text-2xl font-bold text-white">Recent Activity</h3>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      activity.type === 'college' ? 'bg-blue-500/20 text-blue-400' :
                      activity.type === 'career' ? 'bg-purple-500/20 text-purple-400' :
                      activity.type === 'scholarship' ? 'bg-emerald-500/20 text-emerald-400' :
                      'bg-orange-500/20 text-orange-400'
                    }`}>
                      {activity.type === 'college' && <GraduationCap className="w-5 h-5" />}
                      {activity.type === 'career' && <Brain className="w-5 h-5" />}
                      {activity.type === 'scholarship' && <DollarSign className="w-5 h-5" />}
                      {activity.type === 'profile' && <Users className="w-5 h-5" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{activity.action}</p>
                      <p className="text-white/60 text-sm">{activity.time}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/40" />
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Deadlines */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Important Deadlines</h3>
              </div>
              
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      deadline.type === 'exam' ? 'bg-red-500/20 text-red-400' :
                      deadline.type === 'scholarship' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {deadline.type === 'exam' && <BookOpen className="w-5 h-5" />}
                      {deadline.type === 'scholarship' && <Award className="w-5 h-5" />}
                      {deadline.type === 'counseling' && <Users className="w-5 h-5" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{deadline.event}</p>
                      <p className="text-white/60 text-sm">{deadline.date}</p>
                    </div>
                    <Bell className="w-5 h-5 text-white/40" />
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105">
                View All Deadlines
              </button>
            </div>
          </div>

          {/* Personalized Recommendations */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
      <div className="flex items-center gap-3 mb-8">
        <Sparkles className="w-8 h-8 text-yellow-400" />
        <h2 className="text-3xl font-bold text-white">Recommended for You</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* College Recommendation */}
        <Link href="/colleges" className="group cursor-pointer">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold">Top College Match</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">IIT Bombay</h4>
            <p className="text-white/70 text-sm mb-4">95% match based on your profile</p>
            <div className="flex justify-between items-center">
              <span className="text-green-300 text-sm font-medium">Highly Recommended</span>
              <ChevronRight className="w-4 h-4 text-white/60" />
            </div>
          </div>
        </Link>

        {/* Career Recommendation */}
        <Link href="/careers" className="group cursor-pointer">
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold">Career Path</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Data Scientist</h4>
            <p className="text-white/70 text-sm mb-4">High growth potential in your area</p>
            <div className="flex justify-between items-center">
              <span className="text-green-300 text-sm font-medium">Perfect Match</span>
              <ChevronRight className="w-4 h-4 text-white/60" />
            </div>
          </div>
        </Link>

        {/* Scholarship Recommendation */}
        <Link href="/scholarships" className="group cursor-pointer">
          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold">Scholarship Alert</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Merit Scholarship</h4>
            <p className="text-white/70 text-sm mb-4">You qualify for this opportunity</p>
            <div className="flex justify-between items-center">
              <span className="text-yellow-300 text-sm font-medium">₹50,000 Available</span>
              <ChevronRight className="w-4 h-4 text-white/60" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  
        </div>
      </div>
    </div>
  );
}