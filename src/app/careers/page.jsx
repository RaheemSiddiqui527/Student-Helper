"use client";
import React, { useState, useEffect } from "react";
import { 
  Brain, Code, PenTool, Mic, CheckCircle, Star, TrendingUp, Users, Target, 
  Sparkles, Filter, Search, Award, Clock, MapPin, DollarSign,
  Briefcase, Globe, Bookmark, X, Zap, ExternalLink
} from "lucide-react";

const skillsToCareers = {
  coding: [
    { 
      name: "Software Engineer", 
      salary: "₹8-25 LPA", 
      growth: "High", 
      demand: "Very High", 
      description: "Build innovative software solutions and applications",
      skills_required: ["JavaScript", "Python", "React", "Node.js"],
      companies: ["Google", "Microsoft", "Amazon", "Netflix"],
      education: "B.Tech/B.E in Computer Science",
      experience: "0-2 years",
      location: "Bangalore, Pune, Hyderabad",
      trending: true,
      remote_friendly: true,
      category: "Technology"
    },
    { 
      name: "Data Scientist", 
      salary: "₹6-20 LPA", 
      growth: "Very High", 
      demand: "High", 
      description: "Analyze data to drive business decisions",
      skills_required: ["Python", "R", "Machine Learning", "SQL"],
      companies: ["Flipkart", "Swiggy", "Zomato", "PayTM"],
      education: "B.Tech/M.Tech + Data Science Certification",
      experience: "1-3 years",
      location: "Mumbai, Bangalore, Delhi",
      trending: true,
      remote_friendly: true,
      category: "Analytics"
    },
    { 
      name: "Web Developer", 
      salary: "₹4-15 LPA", 
      growth: "High", 
      demand: "Very High", 
      description: "Create engaging websites and web applications",
      skills_required: ["HTML", "CSS", "JavaScript", "React"],
      companies: ["Infosys", "TCS", "Wipro", "Accenture"],
      education: "Any Graduate + Coding Bootcamp",
      experience: "0-1 years",
      location: "Pan India",
      trending: false,
      remote_friendly: true,
      category: "Technology"
    }
  ],
  writing: [
    { 
      name: "Content Writer", 
      salary: "₹3-8 LPA", 
      growth: "Medium", 
      demand: "High", 
      description: "Create compelling content for digital platforms",
      skills_required: ["SEO Writing", "Content Strategy", "Social Media"],
      companies: ["Byju's", "Unacademy", "Zomato", "Swiggy"],
      education: "Any Graduate with good writing skills",
      experience: "0-2 years",
      location: "Remote/Major Cities",
      trending: true,
      remote_friendly: true,
      category: "Content"
    },
    { 
      name: "Technical Writer", 
      salary: "₹5-15 LPA", 
      growth: "High", 
      demand: "High", 
      description: "Create documentation and technical content",
      skills_required: ["Technical Writing", "Documentation", "APIs"],
      companies: ["Microsoft", "Amazon", "Atlassian", "MongoDB"],
      education: "Engineering + Writing Skills",
      experience: "1-4 years",
      location: "Bangalore, Pune, Hyderabad",
      trending: true,
      remote_friendly: true,
      category: "Documentation"
    }
  ],
  speaking: [
    { 
      name: "Sales Executive", 
      salary: "₹4-15 LPA", 
      growth: "High", 
      demand: "High", 
      description: "Build relationships and drive business growth",
      skills_required: ["Communication", "Negotiation", "CRM Software"],
      companies: ["Salesforce", "HubSpot", "Freshworks", "Zoho"],
      education: "Any Graduate with good communication",
      experience: "0-2 years",
      location: "Pan India",
      trending: false,
      remote_friendly: false,
      category: "Sales"
    }
  ],
  leadership: [
    { 
      name: "Project Manager", 
      salary: "₹8-25 LPA", 
      growth: "Very High", 
      demand: "High", 
      description: "Lead teams and deliver successful projects",
      skills_required: ["Project Management", "Agile", "Team Leadership"],
      companies: ["IBM", "Accenture", "Capgemini", "TCS"],
      education: "Engineering + PMP Certification",
      experience: "3-7 years",
      location: "Bangalore, Pune, Hyderabad",
      trending: true,
      remote_friendly: true,
      category: "Management"
    }
  ],
  design: [
    { 
      name: "UI/UX Designer", 
      salary: "₹4-16 LPA", 
      growth: "Very High", 
      demand: "High", 
      description: "Design intuitive user experiences and interfaces",
      skills_required: ["Figma", "Adobe Creative Suite", "User Research"],
      companies: ["Flipkart", "Zomato", "Paytm", "PhonePe"],
      education: "Design Degree or Portfolio",
      experience: "1-4 years",
      location: "Bangalore, Mumbai, Pune",
      trending: true,
      remote_friendly: true,
      category: "Design"
    }
  ]
};

const skillsData = [
  { 
    id: "coding", 
    label: "Coding", 
    icon: <Code className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-600",
    description: "Programming & Software Development"
  },
  { 
    id: "writing", 
    label: "Writing", 
    icon: <PenTool className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-600",
    description: "Content Creation & Communication"
  },
  { 
    id: "speaking", 
    label: "Speaking", 
    icon: <Mic className="w-6 h-6" />,
    gradient: "from-emerald-500 to-teal-600",
    description: "Public Speaking & Presentation"
  },
  { 
    id: "leadership", 
    label: "Leadership", 
    icon: <Users className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-600",
    description: "Team Management & Strategy"
  },
  { 
    id: "design", 
    label: "Design", 
    icon: <Sparkles className="w-6 h-6" />,
    gradient: "from-pink-500 to-rose-600",
    description: "Creative & Visual Design"
  }
];

const filterOptions = {
  salary: ["All", "₹3-8 LPA", "₹8-15 LPA", "₹15+ LPA"],
  growth: ["All", "Very High", "High", "Medium"],
  demand: ["All", "Very High", "High", "Medium"],
  remote: ["All", "Remote Friendly", "Office Only"]
};

export default function Careers() {
  const [skills, setSkills] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    salary: "All",
    growth: "All", 
    demand: "All",
    remote: "All"
  });
  const [savedCareers, setSavedCareers] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  
  const toggleSkill = (skillId) => {
    setSkills(skills.includes(skillId) 
      ? skills.filter(x => x !== skillId) 
      : [...skills, skillId]
    );
  };

  const toggleSavedCareer = (career) => {
    setSavedCareers(prev => 
      prev.find(c => c.name === career.name)
        ? prev.filter(c => c.name !== career.name)
        : [...prev, career]
    );
  };

  const isSaved = (career) => savedCareers.find(c => c.name === career.name);

  const matchedCareers = skills.flatMap(s => skillsToCareers[s] || []);
  const uniqueCareers = matchedCareers.filter((career, index, self) => 
    index === self.findIndex(c => c.name === career.name)
  );

  let filteredCareers = uniqueCareers.filter(career => {
    const matchesSearch = career.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      career.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
      career.skills_required.some(skill => skill.toLowerCase().includes(searchFilter.toLowerCase()));

    const matchesSalary = selectedFilters.salary === "All" || 
      (selectedFilters.salary === "₹3-8 LPA" && (career.salary.includes("3") || career.salary.includes("4") || career.salary.includes("8"))) ||
      (selectedFilters.salary === "₹8-15 LPA" && (career.salary.includes("8") || career.salary.includes("10") || career.salary.includes("15"))) ||
      (selectedFilters.salary === "₹15+ LPA" && (career.salary.includes("15") || career.salary.includes("20") || career.salary.includes("25")));

    const matchesGrowth = selectedFilters.growth === "All" || career.growth === selectedFilters.growth;
    const matchesDemand = selectedFilters.demand === "All" || career.demand === selectedFilters.demand;
    const matchesRemote = selectedFilters.remote === "All" || 
      (selectedFilters.remote === "Remote Friendly" && career.remote_friendly) ||
      (selectedFilters.remote === "Office Only" && !career.remote_friendly);

    return matchesSearch && matchesSalary && matchesGrowth && matchesDemand && matchesRemote;
  });

  // Sort careers: trending first, then by demand and growth
  filteredCareers = filteredCareers.sort((a, b) => {
    if (a.trending && !b.trending) return -1;
    if (!a.trending && b.trending) return 1;
    
    const demandOrder = { "Very High": 3, "High": 2, "Medium": 1 };
    const growthOrder = { "Very High": 3, "High": 2, "Medium": 1 };
    
    const aDemandScore = demandOrder[a.demand] || 0;
    const bDemandScore = demandOrder[b.demand] || 0;
    
    if (aDemandScore !== bDemandScore) return bDemandScore - aDemandScore;
    
    const aGrowthScore = growthOrder[a.growth] || 0;
    const bGrowthScore = growthOrder[b.growth] || 0;
    
    return bGrowthScore - aGrowthScore;
  });

  const updateFilter = (type, value) => {
    setSelectedFilters(prev => ({ ...prev, [type]: value }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      salary: "All",
      growth: "All",
      demand: "All", 
      remote: "All"
    });
    setSearchFilter("");
  };

  const trendingCareers = filteredCareers.filter(career => career.trending);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
              <Brain className="w-5 h-5 text-blue-400" />
              <span className="text-white/90 text-sm font-medium">AI-Powered Career Discovery</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Career Matcher
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
              Discover your dream career with our intelligent matching system. Get personalized recommendations based on your skills, interests, and market trends.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-white/60 text-sm">Career Options</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-white/60 text-sm">Match Accuracy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-white/60 text-sm">Companies</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">₹30L</div>
                <div className="text-white/60 text-sm">Max Salary</div>
              </div>
            </div>
          </div>

          {/* Skills Selection */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Select Your Skills</h2>
              </div>
              {skills.length > 0 && (
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-300 text-sm font-medium">{skills.length} selected</span>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {skillsData.map((skill, index) => (
                <div
                  key={skill.id}
                  onClick={() => toggleSkill(skill.id)}
                  className={`group cursor-pointer transform transition-all duration-700 hover:scale-110 ${
                    skills.includes(skill.id) ? 'scale-105' : ''
                  }`}
                >
                  <div className={`relative p-6 rounded-3xl border-2 transition-all duration-500 h-full ${
                    skills.includes(skill.id)
                      ? 'bg-gradient-to-br from-white/25 to-white/10 border-white/50 backdrop-blur-lg shadow-2xl shadow-purple-500/25'
                      : 'bg-white/5 border-white/20 backdrop-blur-sm hover:bg-white/15 hover:border-white/40 hover:shadow-xl hover:shadow-blue-500/20'
                  }`}>
                    {skills.includes(skill.id) && (
                      <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                    )}
                    
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <div className="text-white">
                        {skill.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                      {skill.label}
                    </h3>
                    <p className="text-white/70 text-sm text-center group-hover:text-white/90 transition-colors duration-300">
                      {skill.description}
                    </p>

                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Search and Filters */}
          {skills.length > 0 && (
            <div className="mb-12">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
                <div className="flex flex-col lg:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                    <input
                      type="text"
                      placeholder="Search careers, skills, or companies..."
                      value={searchFilter}
                      onChange={(e) => setSearchFilter(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 focus:ring-2 focus:ring-white/20 transition-all duration-300"
                    />
                  </div>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                      showFilters ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-white/10 text-white/80 border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    <Filter className="w-5 h-5" />
                    Advanced Filters
                  </button>
                </div>

                {showFilters && (
                  <div className="space-y-4 border-t border-white/20 pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {Object.entries(filterOptions).map(([key, options]) => (
                        <div key={key}>
                          <label className="block text-white/70 text-sm font-medium mb-2 capitalize">
                            {key === 'remote' ? 'Work Style' : key}
                          </label>
                          <select
                            value={selectedFilters[key]}
                            onChange={(e) => updateFilter(key, e.target.value)}
                            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:border-white/40 transition-all duration-300"
                          >
                            {options.map(option => (
                              <option key={option} value={option} className="bg-slate-800 text-white">
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <button
                        onClick={clearAllFilters}
                        className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                      >
                        Clear All Filters
                      </button>
                      <div className="text-white/60 text-sm">
                        {filteredCareers.length} career{filteredCareers.length !== 1 ? 's' : ''} found
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Career Results */}
          <div className="max-w-6xl mx-auto">
            {skills.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center animate-pulse">
                  <Target className="w-16 h-16 text-gray-300" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Discover Your Future?</h3>
                <p className="text-white/60 text-xl mb-8 max-w-2xl mx-auto">
                  Select your skills above to get personalized career recommendations with salary insights, growth potential, and industry demand.
                </p>
                <div className="flex flex-wrap justify-center gap-3 max-w-lg mx-auto">
                  {skillsData.map((skill) => (
                    <button
                      key={skill.id}
                      onClick={() => toggleSkill(skill.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-gradient-to-r ${skill.gradient} text-white hover:scale-110 transition-all duration-300 shadow-lg`}
                    >
                      {skill.icon}
                      {skill.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : filteredCareers.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center animate-pulse">
                  <Search className="w-16 h-16 text-gray-300" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">No Matching Careers</h3>
                <p className="text-white/60 text-xl mb-4">Try adjusting your search or selecting different skills</p>
                <button
                  onClick={clearAllFilters}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-2xl font-medium hover:scale-105 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                {/* Career Statistics */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Your Career Overview</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Star className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{filteredCareers.length}</div>
                      <div className="text-white/60">Career Matches</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">
                        {Math.round((filteredCareers.filter(c => c.growth === 'Very High' || c.growth === 'High').length / filteredCareers.length) * 100) || 0}%
                      </div>
                      <div className="text-white/60">High Growth Potential</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">
                        {Math.round((filteredCareers.filter(c => c.demand === 'Very High' || c.demand === 'High').length / filteredCareers.length) * 100) || 0}%
                      </div>
                      <div className="text-white/60">High Demand</div>
                    </div>
                  </div>
                </div>

                {/* Trending Careers Section */}
                {trendingCareers.length > 0 && (
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Zap className="w-6 h-6 text-yellow-400" />
                      <h3 className="text-2xl font-bold text-white">🔥 Trending Careers</h3>
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-4">
                      {trendingCareers.slice(0, 3).map((career) => (
                        <div key={career.name} className="min-w-[300px] bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-4 rounded-2xl border border-yellow-500/30">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                              <Zap className="w-4 h-4 text-white" />
                            </div>
                            <h4 className="font-bold text-white">{career.name}</h4>
                          </div>
                          <p className="text-white/80 text-sm mb-2">{career.salary}</p>
                          <p className="text-white/70 text-xs">{career.description.substring(0, 80)}...</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Career Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredCareers.map((career, index) => (
                    <div key={`${career.name}-${index}`} className="group relative">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 h-full">
                        
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                                {career.name}
                              </h3>
                              {career.trending && (
                                <div className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full">
                                  <span className="text-white text-xs font-bold">🔥 HOT</span>
                                </div>
                              )}
                            </div>
                            <p className="text-white/70 text-sm mb-3 group-hover:text-white/90 transition-colors duration-300">
                              {career.description}
                            </p>
                            <div className="text-xs text-white/60 mb-4">{career.category}</div>
                          </div>
                          
                          <button
                            onClick={() => toggleSavedCareer(career)}
                            className={`p-2 rounded-xl transition-all duration-300 ${
                              isSaved(career) 
                                ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                                : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white border border-white/20'
                            }`}
                          >
                            <Bookmark className={`w-5 h-5 ${isSaved(career) ? 'fill-current' : ''}`} />
                          </button>
                        </div>
                        
                        {/* Key Info Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-3 rounded-xl border border-green-500/30">
                            <div className="flex items-center gap-2 mb-1">
                              <DollarSign className="w-4 h-4 text-green-400" />
                              <span className="text-white/70 text-xs">Salary</span>
                            </div>
                            <p className="text-white font-semibold text-sm">{career.salary}</p>
                          </div>
                          
                          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3 rounded-xl border border-blue-500/30">
                            <div className="flex items-center gap-2 mb-1">
                              <TrendingUp className="w-4 h-4 text-blue-400" />
                              <span className="text-white/70 text-xs">Growth</span>
                            </div>
                            <span className={`font-medium text-sm ${
                              career.growth === 'Very High' ? 'text-green-300' :
                              career.growth === 'High' ? 'text-blue-300' : 'text-yellow-300'
                            }`}>
                              {career.growth}
                            </span>
                          </div>
                        </div>

                        {/* Skills Required */}
                        <div className="mb-4">
                          <h4 className="text-white/80 text-sm font-medium mb-2">Key Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {career.skills_required.slice(0, 3).map((skill, idx) => (
                              <span key={idx} className="px-2 py-1 bg-white/10 rounded-lg text-white/70 text-xs border border-white/20">
                                {skill}
                              </span>
                            ))}
                            {career.skills_required.length > 3 && (
                              <span className="px-2 py-1 bg-white/10 rounded-lg text-white/70 text-xs border border-white/20">
                                +{career.skills_required.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Additional Info */}
                        <div className="space-y-2 mb-4 text-xs text-white/60">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3 h-3" />
                            <span>{career.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3 h-3" />
                            <span>{career.experience} experience</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Globe className="w-3 h-3" />
                            <span>{career.remote_friendly ? 'Remote Friendly' : 'Office Based'}</span>
                          </div>
                        </div>

                        {/* Top Companies */}
                        <div className="mb-6">
                          <h4 className="text-white/80 text-sm font-medium mb-2">Top Hiring Companies</h4>
                          <div className="flex flex-wrap gap-1">
                            {career.companies.slice(0, 3).map((company, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg text-white/80 text-xs border border-purple-500/30">
                                {company}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Learn More
                          </button>
                          <button className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-xl transition-all duration-300 group">
                            <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-300" />
                          </button>
                        </div>

                        {/* Demand Badge */}
                        <div className={`absolute bottom-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${
  career.demand === 'Very High' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
  career.demand === 'High' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
  'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
}`}>
  {career.demand} Demand
</div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="text-center mt-12">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                      onClick={() => {
                        const careerList = filteredCareers.map(c => c.name).join(', ');
                        alert(`Career List: ${careerList}`);
                      }}
                    >
                      Save Career List ({filteredCareers.length})
                    </button>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Get Career Guidance
                    </button>
                    {savedCareers.length > 0 && (
                      <button 
                        className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                        onClick={() => {
                          const savedList = savedCareers.map(c => c.name).join(', ');
                          alert(`Saved Careers: ${savedList}`);
                        }}
                      >
                        View Saved ({savedCareers.length})
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}