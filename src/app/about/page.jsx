"use client";
// import React, { useState } from "react";
// import { Brain, Target, Users, Award, Sparkles, Star, CheckCircle, TrendingUp, Heart, Shield, Zap, Globe, Code, PenTool, Mic, GraduationCap } from "lucide-react";

// const features = [
//   {
//     icon: <Brain className="w-6 h-6" />,
//     title: "AI-Powered Matching",
//     description: "Advanced algorithms analyze your skills, interests, and goals to provide personalized career recommendations",
//     gradient: "from-blue-500 to-cyan-600"
//   },
//   {
//     icon: <Target className="w-6 h-6" />,
//     title: "Career Path Planning",
//     description: "Get detailed roadmaps showing exactly what steps to take to reach your dream career",
//     gradient: "from-purple-500 to-pink-600"
//   },
//   {
//     icon: <GraduationCap className="w-6 h-6" />,
//     title: "College Comparison",
//     description: "Compare top colleges across India with detailed information on fees, placements, and courses",
//     gradient: "from-emerald-500 to-teal-600"
//   },
//   {
//     icon: <Award className="w-6 h-6" />,
//     title: "Scholarship Finder",
//     description: "Discover financial aid opportunities that match your profile and reduce education costs",
//     gradient: "from-orange-500 to-red-600"
//   }
// ];

// const stats = [
//   { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
//   { number: "500+", label: "Career Paths", icon: <Target className="w-6 h-6" /> },
//   { number: "95%", label: "Success Rate", icon: <TrendingUp className="w-6 h-6" /> },
//   { number: "50+", label: "Partner Colleges", icon: <GraduationCap className="w-6 h-6" /> }
// ];

// const team = [
//   {
//     name: "Dr. Priya Sharma",
//     role: "Founder & CEO",
//     expertise: "Education Technology",
//     description: "Former IIT professor with 15+ years in educational innovation",
//     gradient: "from-blue-500 to-cyan-600"
//   },
//   {
//     name: "Rahul Kumar",
//     role: "CTO",
//     expertise: "AI & Machine Learning",
//     description: "Ex-Google engineer specializing in recommendation systems",
//     gradient: "from-purple-500 to-pink-600"
//   },
//   {
//     name: "Anita Patel",
//     role: "Head of Career Counseling",
//     expertise: "Psychology & Counseling",
//     description: "Licensed career counselor with 10+ years helping students",
//     gradient: "from-emerald-500 to-teal-600"
//   },
//   {
//     name: "Vikash Singh",
//     role: "Data Science Lead",
//     expertise: "Analytics & Insights",
//     description: "PhD in Data Science from IISc, expert in educational analytics",
//     gradient: "from-orange-500 to-red-600"
//   }
// ];

// const values = [
//   {
//     icon: <Heart className="w-8 h-8" />,
//     title: "Student-First Approach",
//     description: "Every decision we make is centered around what's best for students and their future success"
//   },
//   {
//     icon: <Shield className="w-8 h-8" />,
//     title: "Trust & Transparency",
//     description: "We provide honest, unbiased recommendations and maintain complete transparency in our processes"
//   },
//   {
//     icon: <Zap className="w-8 h-8" />,
//     title: "Innovation & Excellence",
//     description: "Continuously improving our platform with cutting-edge technology and user-centric design"
//   },
//   {
//     icon: <Globe className="w-8 h-8" />,
//     title: "Accessibility for All",
//     description: "Making quality career guidance accessible to students from all backgrounds across India"
//   }
// ];

// const milestones = [
//   { year: "2020", title: "Company Founded", description: "Started with a vision to democratize career guidance" },
//   { year: "2021", title: "AI Algorithm Launch", description: "Launched our proprietary career matching algorithm" },
//   { year: "2022", title: "10,000 Users", description: "Reached our first major user milestone" },
//   { year: "2023", title: "College Partnerships", description: "Partnered with 50+ top colleges across India" },
//   { year: "2024", title: "Scholarship Platform", description: "Added comprehensive scholarship finder feature" },
//   { year: "2025", title: "Global Expansion", description: "Expanding to serve international students" }
// ];

// export default function About() {
//   const [activeTab, setActiveTab] = useState("mission");

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{ animationDelay: '4s' }}></div>
//         <div className="absolute top-20 right-20 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '3s' }}></div>
//       </div>

//       {/* Floating particles */}
//       <div className="absolute inset-0">
//         {[...Array(25)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${3 + Math.random() * 2}s`
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 px-6 py-12">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
//               <Brain className="w-5 h-5 text-blue-400" />
//               <span className="text-white/90 text-sm font-medium">Empowering Your Future</span>
//             </div>
            
//             <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
//               About Us
//             </h1>
            
//             <p className="text-xl text-white/80 max-w-3xl mx-auto">
//               We're on a mission to help every student discover their perfect career path through the power of AI and personalized guidance
//             </p>
//           </div>

//           {/* Mission/Vision/Values Tabs */}
//           <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-16">
//             <div className="flex flex-wrap justify-center gap-2 mb-8">
//               {["mission", "vision", "values"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 capitalize ${
//                     activeTab === tab
//                       ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
//                       : 'bg-white/10 text-white/80 hover:bg-white/20 hover:scale-105'
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>

//             <div className="text-center">
//               {activeTab === "mission" && (
//                 <div className="space-y-6 animate-fade-in">
//                   <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto">
//                     <Target className="w-10 h-10 text-white" />
//                   </div>
//                   <h2 className="text-3xl font-bold text-white">Our Mission</h2>
//                   <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
//                     To democratize access to quality career guidance and help every student make informed decisions about their educational and professional journey. We believe that with the right guidance and tools, every individual can achieve their full potential and contribute meaningfully to society.
//                   </p>
//                 </div>
//               )}
              
//               {activeTab === "vision" && (
//                 <div className="space-y-6 animate-fade-in">
//                   <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto">
//                     <Sparkles className="w-10 h-10 text-white" />
//                   </div>
//                   <h2 className="text-3xl font-bold text-white">Our Vision</h2>
//                   <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
//                     To become India's most trusted platform for career guidance, where every student can discover their unique strengths, explore diverse opportunities, and chart a path to a fulfilling career. We envision a future where career decisions are made with confidence and clarity.
//                   </p>
//                 </div>
//               )}
              
//               {activeTab === "values" && (
//                 <div className="animate-fade-in">
//                   <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
//                     <Heart className="w-10 h-10 text-white" />
//                   </div>
//                   <h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {values.map((value, index) => (
//                       <div key={index} className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
//                         <div className="text-blue-400 mb-4">{value.icon}</div>
//                         <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
//                         <p className="text-white/80">{value.description}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Features Section */}
//           <div className="mb-16">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-white mb-4">What We Offer</h2>
//               <p className="text-xl text-white/80">Comprehensive tools and resources to guide your educational journey</p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
//                   style={{ animationDelay: `${index * 200}ms` }}
//                 >
//                   <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:border-white/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 h-full">
//                     <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
//                       <div className="text-white">
//                         {feature.icon}
//                       </div>
//                     </div>
                    
//                     <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
//                       {feature.title}
//                     </h3>
//                     <p className="text-white/70 text-center group-hover:text-white/90 transition-colors duration-300">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Stats Section */}
//           <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-16">
//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
//               <p className="text-white/80">Numbers that reflect our commitment to student success</p>
//             </div>
            
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               {stats.map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//                     <div className="text-white">{stat.icon}</div>
//                   </div>
//                   <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
//                   <div className="text-white/70 font-medium">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Team Section */}
//           <div className="mb-16">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
//               <p className="text-xl text-white/80">Passionate experts dedicated to your success</p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {team.map((member, index) => (
//                 <div
//                   key={index}
//                   className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
//                 >
//                   <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:border-white/30 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 h-full">
//                     <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-6 mx-auto shadow-lg`}>
//                       <Users className="w-10 h-10 text-white" />
//                     </div>
                    
//                     <div className="text-center">
//                       <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
//                       <p className="text-blue-400 font-semibold mb-2">{member.role}</p>
//                       <p className="text-white/60 text-sm mb-3">{member.expertise}</p>
//                       <p className="text-white/80 text-sm">{member.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Timeline Section */}
//           <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
//               <p className="text-xl text-white/80">Key milestones in our mission to transform career guidance</p>
//             </div>
            
//             <div className="space-y-8">
//               {milestones.map((milestone, index) => (
//                 <div key={index} className="flex items-start gap-6 group">
//                   <div className="flex-shrink-0">
//                     <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
//                       <span className="text-white font-bold text-sm">{milestone.year}</span>
//                     </div>
//                   </div>
//                   <div className="flex-1 bg-white/5 rounded-2xl p-6 border border-white/10 group-hover:bg-white/10 transition-all duration-300">
//                     <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
//                     <p className="text-white/80">{milestone.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Icons */}
//       <div className="absolute top-20 left-10 animate-float">
//         <Sparkles className="w-6 h-6 text-blue-400/30" />
//       </div>
//       <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '2s' }}>
//         <Star className="w-5 h-5 text-purple-400/30" />
//       </div>
//       <div className="absolute top-1/2 right-10 animate-float" style={{ animationDelay: '4s' }}>
//         <Brain className="w-7 h-7 text-cyan-400/30" />
//       </div>

//       {/* Custom CSS for animations */}
//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.6s ease-out;
//         }
        
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

import React from "react";
import { 
  Heart, 
  Target, 
  Users, 
  Award, 
  BookOpen, 
  TrendingUp, 
  Sparkles, 
  CheckCircle,
  GraduationCap,
  Brain,
  DollarSign,
  Star,
  Globe,
  Shield,
  Zap
} from "lucide-react";
import Link from "next/link";

export default function About() {
  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "50K+", label: "Students Helped" },
    { icon: <GraduationCap className="w-8 h-8" />, value: "500+", label: "Partner Colleges" },
    { icon: <DollarSign className="w-8 h-8" />, value: "₹50Cr+", label: "Scholarships Found" },
    { icon: <Award className="w-8 h-8" />, value: "95%", label: "Success Rate" }
  ];

  const features = [
    {
      icon: <Brain className="w-12 h-12 text-blue-400" />,
      title: "AI-Powered Matching",
      description: "Advanced algorithms analyze your profile to suggest the perfect colleges and careers tailored to your goals.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Shield className="w-12 h-12 text-green-400" />,
      title: "Verified Information",
      description: "All college data, scholarship details, and career information is verified and regularly updated by our expert team.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-400" />,
      title: "Real-Time Updates",
      description: "Get instant notifications about new scholarships, application deadlines, and college admission updates.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Globe className="w-12 h-12 text-orange-400" />,
      title: "Comprehensive Coverage",
      description: "Access information about colleges, universities, and opportunities across India and internationally.",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Education Consultant",
      image: "👩‍🎓",
      description: "15+ years in academic counseling"
    },
    {
      name: "Rajesh Kumar",
      role: "Tech Lead",
      image: "👨‍💻",
      description: "Former IIT alumnus, AI specialist"
    },
    {
      name: "Anita Singh",
      role: "Career Advisor",
      image: "👩‍💼",
      description: "HR expert from top MNCs"
    },
    {
      name: "Vikram Patel",
      role: "Student Success Manager",
      image: "👨‍🎓",
      description: "Placement specialist, 1000+ success stories"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: "Student-Centric",
      description: "Every decision we make prioritizes student success and well-being"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Goal-Oriented",
      description: "Focused on helping students achieve their academic and career aspirations"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      title: "Transparency",
      description: "Honest, accurate information with no hidden fees or misleading promises"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: "Innovation",
      description: "Continuously improving our platform with latest technology and insights"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Sparkles className="w-6 h-6 text-indigo-400" />
              <span className="text-white/90 font-medium">Empowering Students Since 2020</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              About Student Helper
            </h1>
            
            <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
              We're on a mission to democratize access to quality education by helping students discover the right colleges, careers, and funding opportunities that align with their dreams and aspirations.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform duration-300">
                  <div className="text-indigo-400 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="w-8 h-8 text-indigo-400" />
                    <h2 className="text-4xl font-bold text-white">Our Mission</h2>
                  </div>
                  <p className="text-lg text-white/80 leading-relaxed mb-6">
                    To bridge the information gap in Indian education by providing students with comprehensive, accurate, and personalized guidance for their academic journey.
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed">
                    We believe every student deserves access to quality education and the right opportunities to pursue their dreams, regardless of their background or location.
                  </p>
                </div>
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl border border-white/20 flex items-center justify-center">
                    <div className="text-8xl">🎯</div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Why Choose Us?</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                We combine cutting-edge technology with human expertise to provide you with the most comprehensive educational guidance platform in India.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 h-full">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-white/80 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                These core principles guide everything we do and shape our commitment to student success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Our diverse team of education experts, technology professionals, and student advocates work tirelessly to support your academic journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                      {member.image}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <div className="text-indigo-400 font-medium mb-3">{member.role}</div>
                    <p className="text-white/70 text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Stories Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
              <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-white mb-6">Success Stories</h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Thousands of students have achieved their dreams with our guidance. Here's what they say about us.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-4 italic">
                    "Student Helper helped me find the perfect engineering college and a ₹2 lakh scholarship. The platform is incredibly user-friendly!"
                  </p>
                  <div className="font-semibold text-white">- Priya M., IIT Delhi</div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-4 italic">
                    "The career matching feature opened my eyes to opportunities I never knew existed. Now I'm pursuing my dream job in data science!"
                  </p>
                  <div className="font-semibold text-white">- Rahul K., Software Engineer</div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-4 italic">
                    "Thanks to the scholarship finder, I secured funding for my MBA. The support team was incredibly helpful throughout the process."
                  </p>
                  <div className="font-semibold text-white">- Sneha P., MBA Graduate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
  <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
  <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
    Join thousands of students who have found their path to success with Student Helper.
  </p>
  <Link href="/signup">
    <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      Get Started Today
    </button>
  </Link>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}