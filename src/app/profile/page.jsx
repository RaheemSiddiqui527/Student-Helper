"use client";
import React, { useState, useEffect } from "react";
import { User, Calendar, GraduationCap, MapPin, IndianRupee, Brain, Save, Edit3, CheckCircle, Target, Sparkles, Camera, Settings } from "lucide-react";
import Link from "next/link";
const fieldIcons = {
  name: <User className="w-5 h-5" />,
  age: <Calendar className="w-5 h-5" />,
  class: <GraduationCap className="w-5 h-5" />,
  location: <MapPin className="w-5 h-5" />,
  income: <IndianRupee className="w-5 h-5" />,
  skills: <Brain className="w-5 h-5" />
};

const fieldLabels = {
  name: "Full Name",
  age: "Age", 
  class: "Current Class/Grade",
  location: "Location",
  income: "Family Income",
  skills: "Skills & Interests"
};

const fieldPlaceholders = {
  name: "Enter your full name",
  age: "Enter your age",
  class: "e.g., Class 12, 1st Year College",
  location: "Enter your city/state",
  income: "e.g., ₹5,00,000 per annum",
  skills: "e.g., Programming, Writing, Sports, Music"
};

const recommendations = {
  colleges: ["IIT Bombay", "NIT Trichy", "VIT University"],
  careers: ["Software Engineer", "Data Scientist", "Product Manager"],
  scholarships: ["Merit Scholarship", "INSPIRE Award", "Sports Excellence"]
};

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    class: "",
    location: "",
    income: "",
    skills: ""
  });

  const [saved, setSaved] = useState(false);
  const [editMode, setEditMode] = useState(true);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setEditMode(false);
    setTimeout(() => setSaved(false), 3000);
  };

  const isProfileComplete = Object.values(profile).every(value => value.trim() !== "");
  const completionPercentage = Math.round((Object.values(profile).filter(value => value.trim() !== "").length / Object.keys(profile).length) * 100);

  const getRecommendationLevel = () => {
    if (completionPercentage === 100) return "premium";
    if (completionPercentage >= 70) return "good";
    if (completionPercentage >= 40) return "basic";
    return "limited";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-60 h-60 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
              <User className="w-5 h-5 text-emerald-400" />
              <span className="text-white/90 text-sm font-medium">Build Your Academic Profile</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
              Your Profile
            </h1>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Complete your profile to unlock personalized recommendations for colleges, careers, and scholarships
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Main Profile Section - Takes 2/3 width on xl screens */}
            <div className="xl:col-span-2 space-y-8">
              {/* Progress Section */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-emerald-400" />
                    <h2 className="text-2xl font-bold text-white">Profile Completion</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    {isProfileComplete && <CheckCircle className="w-6 h-6 text-green-400" />}
                    <span className="text-2xl font-bold text-white">{completionPercentage}%</span>
                  </div>
                </div>
                
                <div className="w-full bg-white/10 rounded-full h-4 mb-4 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-4 rounded-full transition-all duration-1000 ease-out relative"
                    style={{ width: `${completionPercentage}%` }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-white/70 text-sm">
                    {isProfileComplete 
                      ? "🎉 Profile completed! You'll get the most accurate recommendations." 
                      : `Complete ${6 - Object.values(profile).filter(v => v.trim() !== "").length} more fields to unlock full potential.`
                    }
                  </p>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    getRecommendationLevel() === 'premium' ? 'bg-gold-500/20 text-yellow-300 border border-yellow-500/30' :
                    getRecommendationLevel() === 'good' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                    getRecommendationLevel() === 'basic' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                    'bg-gray-500/20 text-gray-300 border border-gray-500/30'
                  }`}>
                    {getRecommendationLevel().charAt(0).toUpperCase() + getRecommendationLevel().slice(1)} Recommendations
                  </div>
                </div>
              </div>

              {/* Profile Form */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <Edit3 className="w-6 h-6 text-emerald-400" />
                    <h2 className="text-2xl font-bold text-white">Personal Information</h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setEditMode(!editMode)}
                      className="p-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-xl transition-all duration-300"
                    >
                      <Settings className="w-5 h-5 text-white/70" />
                    </button>
                    {!editMode && (
                      <button 
                        onClick={() => setEditMode(true)}
                        className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium rounded-xl transition-all duration-300 text-sm"
                      >
                        Edit Profile
                      </button>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {Object.keys(profile).map((field, index) => (
                    <div key={field} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                      <label className="flex items-center gap-3 mb-3 text-white/90 font-medium">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {fieldIcons[field]}
                        </div>
                        {fieldLabels[field]}
                        {profile[field].trim() !== "" && (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        )}
                      </label>
                      
                      {field === 'skills' ? (
                        <textarea
                          name={field}
                          value={profile[field]}
                          onChange={handleChange}
                          placeholder={fieldPlaceholders[field]}
                          rows="4"
                          disabled={!editMode}
                          className={`w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 resize-none ${
                            !editMode ? 'cursor-not-allowed opacity-70' : ''
                          } ${profile[field].trim() !== "" ? 'border-emerald-500/30 bg-emerald-500/5' : ''}`}
                        />
                      ) : (
                        <input
                          type="text"
                          name={field}
                          value={profile[field]}
                          onChange={handleChange}
                          placeholder={fieldPlaceholders[field]}
                          disabled={!editMode}
                          className={`w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 ${
                            !editMode ? 'cursor-not-allowed opacity-70' : ''
                          } ${profile[field].trim() !== "" ? 'border-emerald-500/30 bg-emerald-500/5' : ''}`}
                        />
                      )}
                      
                      {profile[field].trim() !== "" && (
                        <div className="flex items-center gap-2 mt-2 text-green-400 text-sm animate-fade-in">
                          <CheckCircle className="w-4 h-4" />
                          <span>Completed</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {editMode && (
                  <div className="mt-8 text-center">
                    <button
                      onClick={handleSave}
                      className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                        saved 
                          ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                          : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white hover:shadow-2xl'
                      }`}
                    >
                      {saved ? <CheckCircle className="w-5 h-5" /> : <Save className="w-5 h-5" />}
                      {saved ? 'Profile Saved Successfully!' : 'Save Profile'}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar - Takes 1/3 width on xl screens */}
            <div className="space-y-8">
              {/* Profile Preview Card */}
              {Object.values(profile).some(value => value.trim() !== "") && (
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-6">
                    <User className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-lg font-bold text-white">Profile Preview</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {Object.entries(profile).map(([field, value]) => (
                      value.trim() !== "" && (
                        <div key={field} className="bg-white/5 rounded-xl p-3 border border-white/10">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-4 h-4 text-emerald-400">
                              {fieldIcons[field]}
                            </div>
                            <span className="text-white/70 text-xs font-medium">{fieldLabels[field]}</span>
                          </div>
                          <p className="text-white font-semibold text-sm">{field === 'skills' && value.length > 50 ? value.substring(0, 50) + '...' : value}</p>
                        </div>
                      )
                    ))}
                  </div>

                  {isProfileComplete && (
                    <div className="mt-6 text-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-white font-medium text-sm">Profile Complete!</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Recommendations Preview */}
              {completionPercentage >= 40 && (
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    <h3 className="text-lg font-bold text-white">Your Recommendations</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white/80 text-sm font-medium mb-2 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-blue-400" />
                        Top Colleges
                      </h4>
                      <div className="space-y-1">
                        {recommendations.colleges.slice(0, 3).map((college, index) => (
                          <div key={college} className="text-white text-sm p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300 cursor-pointer">
                            {college}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white/80 text-sm font-medium mb-2 flex items-center gap-2">
                        <Brain className="w-4 h-4 text-purple-400" />
                        Career Matches
                      </h4>
                      <div className="space-y-1">
                        {recommendations.careers.slice(0, 3).map((career, index) => (
                          <div key={career} className="text-white text-sm p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300 cursor-pointer">
                            {career}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white/80 text-sm font-medium mb-2 flex items-center gap-2">
                        <IndianRupee className="w-4 h-4 text-green-400" />
                        Scholarships
                      </h4>
                      <div className="space-y-1">
                        {recommendations.scholarships.slice(0, 3).map((scholarship, index) => (
                          <div key={scholarship} className="text-white text-sm p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300 cursor-pointer">
                            {scholarship}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                 <Link href="/recommendations">
  <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
    View All Recommendations
  </button>
</Link>
                </div>
              )}

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-6">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-xl transition-all duration-300 text-white font-medium">
                    <Camera className="w-5 h-5 text-blue-400" />
                    Upload Profile Picture
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-xl transition-all duration-300 text-white font-medium">
                    <Save className="w-5 h-5 text-green-400" />
                    Export Profile Data
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-xl transition-all duration-300 text-white font-medium">
                    <Settings className="w-5 h-5 text-gray-400" />
                    Privacy Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}