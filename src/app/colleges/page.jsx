"use client";

import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  IndianRupee,
  TrendingUp,
  CheckCircle,
  Filter,
  Search,
  MapPin,
  Star,
  Globe,
  Award,
  Calendar,
  Bookmark,
  X,
  ChevronDown,
  ChevronUp,
  Users,
  BookOpen,
  Trophy,
  Building,
  Phone,
  Mail,
  ExternalLink,
  Heart,
  Share2,
  Download,
  Eye,
  AlertCircle,
  Target,
  Zap,
  Shield,
  Clock
} from "lucide-react";

// Enhanced sample colleges data
import sampleColleges from "./sampleColleges.json";

const categories = ["All", "Engineering", "Medical", "Management", "Liberal Arts"];
const sortOptions = [
  { value: "name", label: "Name (A-Z)" },
  { value: "rating", label: "Rating (High to Low)" },
  { value: "fees", label: "Fees (Low to High)" },
  { value: "placement", label: "Placement Rate" },
  { value: "established", label: "Established Year" }
];

export default function EnhancedColleges() {
  const [selected, setSelected] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const [sortBy, setSortBy] = useState("rating");
  const [showComparison, setShowComparison] = useState(false);

  const toggleCollege = (college) => {
    if (selected.find(c => c.id === college.id)) {
      setSelected(selected.filter(c => c.id !== college.id));
    } else if (selected.length < 3) {
      setSelected([...selected, college]);
    }
  };

  const removeCollege = (college) => {
    setSelected(selected.filter(c => c.id !== college.id));
  };

  const toggleExpanded = (collegeId) => {
    if (expandedCard === collegeId) {
      setExpandedCard(null);
    } else {
      setExpandedCard(collegeId);
    }
  };

  const toggleFavorite = (college, e) => {
    e.stopPropagation();
    if (favorites.find(c => c.id === college.id)) {
      setFavorites(favorites.filter(c => c.id !== college.id));
    } else {
      setFavorites([...favorites, college]);
    }
  };

  const filtered = sampleColleges.filter(college => {
    const query = (filter || "").toLowerCase();
    return (
      (college?.institute_name || "").toLowerCase().includes(query) ||
      (college?.location?.city || "").toLowerCase().includes(query) ||
      (college?.location?.state || "").toLowerCase().includes(query) ||
      college?.courses?.some(c =>
        (c.branch_name || "").toLowerCase().includes(query)
      )
    );
  });

  const sortedColleges = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.institute_name.localeCompare(b.institute_name);
      case "rating":
        return b.rating - a.rating;
      case "fees":
        const aMinFee = Math.min(...a.courses.map(c => c.fees.Open));
        const bMinFee = Math.min(...b.courses.map(c => c.fees.Open));
        return aMinFee - bMinFee;
      case "placement":
        const aMaxPlacement = Math.max(...a.courses.map(c => c.placement_rate));
        const bMaxPlacement = Math.max(...b.courses.map(c => c.placement_rate));
        return bMaxPlacement - aMaxPlacement;
      case "established":
        return parseInt(b.established) - parseInt(a.established);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
              <GraduationCap className="w-5 h-5 text-purple-400" />
              <span className="text-white/90 text-sm font-medium">Discover Your Dream College</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
              College Explorer
            </h1>

            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Compare top engineering colleges across Maharashtra. Get detailed insights on fees, placements, cutoffs, and scholarships to make informed decisions.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{sampleColleges.length}</div>
                <div className="text-white/70 text-sm">Colleges</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{sampleColleges.reduce((sum, c) => sum + c.courses.length, 0)}</div>
                <div className="text-white/70 text-sm">Courses</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{favorites.length}</div>
                <div className="text-white/70 text-sm">Favorites</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{selected.length}/3</div>
                <div className="text-white/70 text-sm">Compare</div>
              </div>
            </div>
          </div>

          {/* Enhanced Search and Filter */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-12">
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                <input
                  type="text"
                  placeholder="Search colleges by name, location, or courses..."
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                />
              </div>

              {/* Filters Row */}
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Category Filter */}
                <div className="flex-1">
                  <label className="block text-white/80 text-sm font-medium mb-2">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                          selectedCategory === category
                            ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg'
                            : 'bg-white/10 text-white/80 hover:bg-white/20 hover:scale-105'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort Filter */}
                <div className="flex-none min-w-[200px]">
                  <label className="block text-white/80 text-sm font-medium mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white px-4 py-2 focus:outline-none focus:border-white/40"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value} className="bg-slate-800">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {selected.length > 0 && (
                  <button
                    onClick={() => setShowComparison(!showComparison)}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Eye className="w-4 h-4" />
                    {showComparison ? 'Hide' : 'Show'} Comparison ({selected.length})
                  </button>
                )}
                
                {favorites.length > 0 && (
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105">
                    <Heart className="w-4 h-4" />
                    Favorites ({favorites.length})
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Building className="w-6 h-6 text-purple-400" />
              <h2 className="text-3xl font-bold text-white">
                Available Colleges ({sortedColleges.length})
              </h2>
            </div>
            <div className="text-white/60 text-sm">
              Click on any college to view detailed information
            </div>
          </div>

          {/* Colleges List - Compact View */}
          <div className="space-y-6 mb-12">
            {sortedColleges.map((college, index) => {
              const isExpanded = expandedCard === college.id;
              const isSelected = selected.find(c => c.id === college.id);
              const isFavorite = favorites.find(c => c.id === college.id);

              return (
                 <div
    key={college.id || index}
    className="group"
    style={{ animationDelay: `${index * 100}ms` }}
  >
                  {/* Compact Card View */}
                  <div className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border-2 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 ${
                    isSelected 
                      ? 'border-green-400/60 bg-gradient-to-br from-green-500/20 to-emerald-500/10' 
                      : 'border-white/20 hover:border-white/40'
                  }`}>
                    
                    {/* Header Row - Always Visible */}
                    <div className="p-6 cursor-pointer" onClick={() => toggleExpanded(college.id)}>
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 group-hover:bg-clip-text transition-all duration-300">
                              {college.institute_name}
                            </h3>
                            <div className="flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full border border-yellow-500/30">
                              <Star className="w-4 h-4 text-yellow-400" />
                              <span className="text-yellow-300 font-medium">{college.rating}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-6 text-sm">
                            <div className="flex items-center gap-2">
                              <Shield className="w-4 h-4 text-purple-400" />
                              <span className="text-purple-300 font-medium">{college.status}</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-blue-400" />
                              <span className="text-white">
                                {college.location?.city ?? "Unknown City"},{" "}
                                {college.location?.state ?? "Unknown State"}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              <Globe className="w-4 h-4 text-green-400" />
                              <a
                                href={college.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-300 hover:text-green-200 hover:underline transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                Visit Website
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          {/* Action Buttons */}
                          <button
                            onClick={(e) => toggleFavorite(college, e)}
                            className={`p-3 rounded-xl transition-all duration-300 ${
                              isFavorite 
                                ? 'bg-yellow-500/20 text-yellow-400 scale-110' 
                                : 'bg-white/10 text-white/60 hover:bg-white/20 hover:scale-110'
                            }`}
                          >
                            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                          </button>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCollege(college);
                            }}
                            disabled={!isSelected && selected.length >= 3}
                            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                              isSelected
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                : selected.length >= 3
                                ? 'bg-gray-500/20 text-gray-400 border border-gray-500/30 cursor-not-allowed'
                                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/30'
                            }`}
                          >
                            {isSelected ? '✓ Selected' : 'Compare'}
                          </button>

                          <button
                            className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300"
                          >
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-white" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-white" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="px-6 pb-6 animate-expand">
                        <div className="border-t border-white/10 pt-6">
                          {/* College Stats */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-xl border border-blue-500/30 text-center">
                              <Calendar className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                              <p className="text-white/70 text-xs">Established</p>
                              <p className="text-white font-bold text-lg">{college.established}</p>
                            </div>
                            
                            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-xl border border-green-500/30 text-center">
                              <Users className="w-5 h-5 text-green-400 mx-auto mb-2" />
                              <p className="text-white/70 text-xs">Students</p>
                              <p className="text-white font-bold text-lg">{college.students}</p>
                            </div>
                            
                            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-4 rounded-xl border border-yellow-500/30 text-center">
                              <Trophy className="w-5 h-5 text-yellow-400 mx-auto mb-2" />
                              <p className="text-white/70 text-xs">NIRF Ranking</p>
                              <p className="text-white font-bold text-lg">#{college.nirf_ranking}</p>
                            </div>
                            
                            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-xl border border-purple-500/30 text-center">
                              <Award className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                              <p className="text-white/70 text-xs">Accreditation</p>
                              <p className="text-white font-bold text-sm">{college.accreditation}</p>
                            </div>
                          </div>

                          {/* Contact Information */}
                          <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-6 mb-8 border border-white/10">
                            <h4 className="text-lg font-bold text-white mb-4">Contact Information</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-blue-400" />
                               <span className="text-white">
    {college.contact?.phone || "N/A"}
  </span>
                              </div>
                              <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-green-400" />
                                 <span className="text-white">
    {college.contact?.email || "N/A"}
  </span>
                              </div>
                            </div>
                          </div>

                          {/* Courses */}
                          <div className="mb-8">
                            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                              <BookOpen className="w-5 h-5 text-blue-400" />
                              Available Courses
                            </h4>
                            <div className="grid gap-6">
                              {college.courses.map((course, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-white/15 to-white/5 p-6 rounded-2xl border border-white/20">
                                  <div className="flex items-center justify-between mb-4">
                                    <h5 className="text-white font-bold text-lg">{course.branch_name}</h5>
                                    <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full border border-green-500/30">
                                      <Target className="w-4 h-4 text-green-400" />
                                      <span className="text-green-300 font-medium">{course.placement_rate}% Placed</span>
                                    </div>
                                  </div>
                                  
                                  <div className="grid md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                      <p className="text-white/70 text-sm font-medium">Fees Structure</p>
                                     <div className="space-y-1">
  <p className="text-green-300 text-sm">
    Open: ₹{course.fees?.Open != null ? course.fees.Open.toLocaleString() : "N/A"}
  </p>
  <p className="text-blue-300 text-sm">
    OBC: ₹{course.fees?.OBC != null ? course.fees.OBC.toLocaleString() : "N/A"}
  </p>
  <p className="text-yellow-300 text-sm">
    SC/ST: ₹{course.fees?.SC_ST != null ? course.fees.SC_ST.toLocaleString() : "N/A"}
  </p>
</div>

                                                                          </div>

                                    <div className="space-y-2">
                                      <p className="text-white/70 text-sm font-medium">Cutoff (2024)</p>
                                      <div className="space-y-1">
                                        <p className="text-white text-sm">CET: {course.cutoff.CET_percentile}%</p>
                                        <p className="text-white text-sm">JEE Main Rank: {course.cutoff.JEE_Main}</p>
                                      </div>
                                    </div>

                                    <div className="space-y-2">
                                      <p className="text-white/70 text-sm font-medium">Other Info</p>
                                      <div className="space-y-1">
                                        <p className="text-white text-sm">Seats: {course.seats}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Scholarships */}
                          {college.scholarship?.length > 0 && (
                            <div className="mb-8">
                              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Award className="w-5 h-5 text-yellow-400" />
                                Scholarships
                              </h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                {college.scholarship.map((s, idx) => (
                                  <div
                                    key={idx}
                                    className="p-4 border border-white/20 rounded-xl bg-white/5"
                                  >
                                    <h5 className="text-white font-semibold">{s.name}</h5>
                                    <p className="text-green-300 text-sm">{s.benefit}</p>
                                    <p className="text-white/70 text-xs">Eligibility: {s.eligibility}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Facilities */}
                          {college.facilities?.length > 0 && (
                            <div className="mb-8">
                              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Building className="w-5 h-5 text-indigo-400" />
                                Campus Facilities
                              </h4>
                              <div className="flex flex-wrap gap-3">
                                {college.facilities.map((facility, idx) => (
                                  <span
                                    key={idx}
                                    className="px-4 py-2 bg-white/10 rounded-full border border-white/20 text-white text-sm"
                                  >
                                    {facility}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Placement Overview */}
                          {college.placement && (
                            <div className="mb-4">
                              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-green-400" />
                                Placement Stats
                              </h4>
                              <div className="grid md:grid-cols-3 gap-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/20 text-center">
                                  <p className="text-white/70 text-sm">Average Package</p>
                                  <p className="text-green-300 font-bold text-lg">₹{(college.placement.average_package / 100000).toFixed(2)} LPA</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/20 text-center">
                                  <p className="text-white/70 text-sm">Highest Package</p>
                                  <p className="text-green-300 font-bold text-lg">₹{(college.placement.highest_package / 100000).toFixed(2)} LPA</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/20 text-center">
                                  <p className="text-white/70 text-sm">Top Recruiters</p>
                                  <p className="text-white text-sm">{college.placement.top_recruiters.join(", ")}</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer or additional controls could go here */}
        </div>
      </div>
    </div>
  );
}
