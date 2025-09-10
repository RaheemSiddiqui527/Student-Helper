"use client";
import React, { useState } from "react";
import { Search, Award, Users, Calendar, Star, AlertCircle, MapPin, IndianRupee, Globe, Building, CheckCircle } from "lucide-react";

const allScholarships = [
  { 
    name: "Central Sector Scholarship Scheme", 
    eligibility: "Top 82,000 students in Class XII nationwide + Family Income < ₹8 Lakh", 
    amount: "₹12,000 annually",
    type: "Merit Based",
    duration: "3-5 Years",
    applicants: "10,00,000+",
    category: "Academic",
    deadline: "October 2025",
    provider: "Department of Higher Education, GoI",
    description: "National merit scholarship for outstanding Class XII students across India",
    state: "All States",
    scope: "National",
    contact: "011-2338-6355",
    portalLink: "https://scholarships.gov.in"
  },
  {
    name: "Post Matric Scholarship for SC Students",
    eligibility: "SC Category + Class X passed + Family Income < ₹2.5 Lakh",
    amount: "₹1,200-₹2,000 monthly",
    type: "Community Based",
    duration: "Course Duration",
    applicants: "15,00,000+",
    category: "Community",
    deadline: "November 2025",
    provider: "Ministry of Social Justice & Empowerment",
    description: "Comprehensive support for SC students pursuing post-matric education",
    state: "All States",
    scope: "National",
    contact: "011-2338-4471",
    portalLink: "https://scholarships.gov.in"
  },
  {
    name: "Indira Gandhi Scholarship for Single Girl Child",
    eligibility: "Single Girl Child + Postgraduate Course + UGC recognized university",
    amount: "₹36,200 annually",
    type: "Gender Based",
    duration: "2 Years",
    applicants: "50,000+",
    category: "Gender",
    deadline: "December 2025",
    provider: "University Grants Commission",
    description: "Supporting single girl children in higher education",
    state: "All States",
    scope: "National",
    contact: "011-2323-6288",
    portalLink: "https://www.ugc.ac.in"
  },
  {
    name: "INSPIRE Scholarship for Higher Education",
    eligibility: "Top 1% in Class XII in Science + Age 17-22",
    amount: "₹80,000 annually + ₹20,000 research",
    type: "Merit Based",
    duration: "5 Years",
    applicants: "1,000+",
    category: "Research",
    deadline: "July 2025",
    provider: "Department of Science & Technology",
    description: "Attracting talent to science through early exposure to research",
    state: "All States",
    scope: "National",
    contact: "011-2696-2819",
    portalLink: "https://online-inspire.gov.in"
  },
  {
    name: "Reliance Foundation Undergraduate Scholarship",
    eligibility: "Class XII passed + Family Income < ₹6 Lakh + Merit",
    amount: "₹2,00,000 annually",
    type: "Merit Based",
    duration: "4 Years",
    applicants: "50,000+",
    category: "Academic",
    deadline: "March 2025",
    provider: "Reliance Foundation",
    description: "Comprehensive scholarship with mentorship and internships",
    state: "All States",
    scope: "National",
    contact: "022-3555-5000",
    portalLink: "https://www.scholarships.reliancefoundation.org"
  },
  { 
    name: "Post Matric Scholarship for OBC Students (Maharashtra)", 
    eligibility: "OBC Category + Family Income < ₹2.5 Lakh + Maharashtra Domicile", 
    amount: "₹230 per month + Fees",
    type: "Community Based",
    duration: "Course Duration",
    applicants: "2,00,000+",
    category: "Community",
    deadline: "October 2025",
    provider: "Dept of Social Justice & Special Assistance, Maharashtra",
    description: "Monthly maintenance allowance and fee reimbursement for OBC students",
    state: "Maharashtra",
    scope: "State",
    contact: "1800-123-4567",
    portalLink: "https://mahadbt.maharashtra.gov.in"
  },
  { 
    name: "Dr. Babasaheb Ambedkar Scholarship (Maharashtra)", 
    eligibility: "SC/ST Category + Merit Based + Maharashtra Domicile", 
    amount: "₹50,000 annually",
    type: "Community Based", 
    duration: "4 Years",
    applicants: "1,50,000+",
    category: "Community",
    deadline: "September 2025",
    provider: "Social Justice Department, Maharashtra",
    description: "Comprehensive scholarship for SC/ST students with academic excellence",
    state: "Maharashtra",
    scope: "State",
    contact: "022-2202-4567",
    portalLink: "https://mahadbt.maharashtra.gov.in"
  },
  {
    name: "Kalpana Chawla Scholarship for Girls (Maharashtra)",
    eligibility: "Female + Engineering/Medical + Maharashtra Domicile",
    amount: "₹1,00,000 annually",
    type: "Gender Based",
    duration: "4 Years", 
    applicants: "25,000+",
    category: "Gender",
    deadline: "June 2025",
    provider: "Women & Child Development, Maharashtra",
    description: "Empowering women in STEM fields through comprehensive support",
    state: "Maharashtra",
    scope: "State",
    contact: "020-2612-7890",
    portalLink: "https://mahadbt.maharashtra.gov.in"
  }
];

const categories = ["All", "Academic", "Community", "Gender", "Research"];
const scholarshipTypes = ["All", "Merit Based", "Community Based", "Gender Based"];
const scopes = ["All", "National", "State"];
const states = ["All States", "Maharashtra"];

export default function ComprehensiveScholarshipPortal() {
  const [filter, setFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedScope, setSelectedScope] = useState("All");
  const [selectedState, setSelectedState] = useState("All States");
  const [savedScholarships, setSavedScholarships] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleSave = (scholarship) => {
    if (savedScholarships.includes(scholarship.name)) {
      setSavedScholarships(savedScholarships.filter(name => name !== scholarship.name));
    } else {
      setSavedScholarships([...savedScholarships, scholarship.name]);
    }
  };

  const getUrgencyLevel = (deadline) => {
    if (deadline === "Open" || deadline === "Continuous") return "normal";
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays <= 30) return "urgent";
    if (diffDays <= 60) return "moderate";
    return "normal";
  };

  const getScopeIcon = (scope) => {
    switch(scope) {
      case "National": return <IndianRupee className="w-4 h-4" />;
      case "State": return <MapPin className="w-4 h-4" />;
      case "International": return <Globe className="w-4 h-4" />;
      default: return <Award className="w-4 h-4" />;
    }
  };

  const getScopeColor = (scope) => {
    switch(scope) {
      case "National": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "State": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "International": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  const filtered = allScholarships.filter(s => {
    const matchesFilter = s.eligibility.toLowerCase().includes(filter.toLowerCase()) ||
                         s.name.toLowerCase().includes(filter.toLowerCase()) ||
                         s.description.toLowerCase().includes(filter.toLowerCase()) ||
                         s.provider.toLowerCase().includes(filter.toLowerCase());
    const matchesCategory = selectedCategory === "All" || s.category === selectedCategory;
    const matchesType = selectedType === "All" || s.type === selectedType;
    const matchesScope = selectedScope === "All" || s.scope === selectedScope;
    const matchesState = selectedState === "All States" || s.state === selectedState;
    
    return matchesFilter && matchesCategory && matchesType && matchesScope && matchesState;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
              <IndianRupee className="w-5 h-5 text-orange-400" />
              <span className="text-white/90 text-sm font-medium">India's Complete Scholarship Database</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent">
              India Scholarship Portal 2025
            </h1>
            
            <p className="text-xl text-white/80 max-w-4xl mx-auto mb-8">
              Comprehensive database of {allScholarships.length} scholarships available across India - National, State, and International opportunities for all students
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">₹5.2Cr</div>
                <div className="text-white/70 text-sm">Total Worth</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{allScholarships.length}</div>
                <div className="text-white/70 text-sm">Scholarships</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{allScholarships.filter(s => s.scope === "National").length}</div>
                <div className="text-white/70 text-sm">National</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{allScholarships.filter(s => getUrgencyLevel(s.deadline) === "urgent").length}</div>
                <div className="text-white/70 text-sm">Urgent</div>
              </div>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-12">
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                <input
                  type="text"
                  placeholder="Search by scholarship name, provider, eligibility, or description..."
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white px-4 py-3 focus:outline-none focus:border-white/40"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-slate-800">{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white px-4 py-3 focus:outline-none focus:border-white/40"
                  >
                    {scholarshipTypes.map((type) => (
                      <option key={type} value={type} className="bg-slate-800">{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Scope</label>
                  <select
                    value={selectedScope}
                    onChange={(e) => setSelectedScope(e.target.value)}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white px-4 py-3 focus:outline-none focus:border-white/40"
                  >
                    {scopes.map((scope) => (
                      <option key={scope} value={scope} className="bg-slate-800">{scope}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">State</label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white px-4 py-3 focus:outline-none focus:border-white/40"
                  >
                    {states.map((state) => (
                      <option key={state} value={state} className="bg-slate-800">{state}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-amber-400" />
                <h2 className="text-3xl font-bold text-white">
                  Available Scholarships ({filtered.length})
                </h2>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No Scholarships Found</h3>
                <p className="text-white/60 text-lg mb-4">Try adjusting your search filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filtered.map((scholarship) => {
                  const urgency = getUrgencyLevel(scholarship.deadline);
                  const isSaved = savedScholarships.includes(scholarship.name);
                  
                  return (
                    <div key={scholarship.name} className="group">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25 h-full relative">
                        {/* Scope Badge */}
                        <div className="absolute -top-2 -right-2 flex gap-2">
                          <div className={`rounded-full px-3 py-1 text-xs font-bold flex items-center gap-1 border ${getScopeColor(scholarship.scope)}`}>
                            {getScopeIcon(scholarship.scope)}
                            {scholarship.scope}
                          </div>
                          {urgency === "urgent" && (
                            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-full px-3 py-1 text-xs font-bold text-white animate-pulse flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              URGENT
                            </div>
                          )}
                        </div>

                        {/* Save Button */}
                        <button
                          onClick={() => toggleSave(scholarship)}
                          className={`absolute top-4 right-4 p-2 rounded-xl transition-all duration-300 ${
                            isSaved 
                              ? 'bg-yellow-500/20 text-yellow-400 scale-110' 
                              : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white hover:scale-110'
                          }`}
                        >
                          <Star className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                        </button>

                        {/* Header */}
                        <div className="flex items-start justify-between mb-4 mt-8">
                          <div className="space-y-2">
                            <div className={`px-3 py-1 rounded-full text-xs font-medium border ${
                              scholarship.type === 'Merit Based' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                              scholarship.type === 'Community Based' ? 'bg-orange-500/20 text-orange-300 border-orange-500/30' :
                              'bg-pink-500/20 text-pink-300 border-pink-500/30'
                            }`}>
                              {scholarship.type}
                            </div>
                            <div className="text-white/60 text-xs flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {scholarship.state}
                            </div>
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                            {scholarship.scope === "National" ? <IndianRupee className="w-6 h-6 text-white" /> : <Award className="w-6 h-6 text-white" />}
                          </div>
                        </div>

                        {/* Title and Description */}
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-amber-200 group-hover:bg-clip-text transition-all duration-300">
                          {scholarship.name}
                        </h3>
                        <p className="text-white/70 text-sm mb-4 group-hover:text-white/90 transition-colors duration-300">
                          {scholarship.description}
                        </p>

                        {/* Provider */}
                        <div className="text-white/60 text-xs mb-4 flex items-center gap-1">
                          <Building className="w-3 h-3" />
                          {scholarship.provider}
                        </div>

                        {/* Amount */}
                        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-4 mb-4 border border-green-500/30">
                          <div className="flex items-center justify-between">
                            <span className="text-white/70 text-sm">Award Amount</span>
                            <div className="flex items-center gap-2">
                              <IndianRupee className="w-4 h-4 text-green-400" />
                              <span className="text-xl font-bold text-white">{scholarship.amount}</span>
                            </div>
                          </div>
                        </div>

                        {/* Quick Info */}
                        <div className="space-y-3 mb-6">
                          <div className="flex items-start gap-3 p-3 bg-white/10 rounded-xl border border-white/20">
                            <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="text-white/70 text-xs">Eligibility</p>
                              <p className="text-white text-sm font-medium">{scholarship.eligibility}</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center gap-2 p-2 bg-white/10 rounded-xl border border-white/20">
                              <Calendar className="w-4 h-4 text-orange-400 flex-shrink-0" />
                              <div className="min-w-0">
                                <p className="text-white/70 text-xs">Deadline</p>
                                <p className={`text-sm font-medium truncate ${
                                  urgency === "urgent" ? 'text-red-300' : 'text-white'
                                }`}>{scholarship.deadline}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2 p-2 bg-white/10 rounded-xl border border-white/20">
                              <Users className="w-4 h-4 text-purple-400 flex-shrink-0" />
                              <div className="min-w-0">
                                <p className="text-white/70 text-xs">Applicants</p>
                                <p className="text-white text-sm font-medium truncate">{scholarship.applicants}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Action Button */}
                        <button 
                          onClick={() => window.open(scholarship.portalLink, '_blank')}
                          className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                          Apply Now
                        </button>

                        {/* Deadline Warning */}
                        {urgency === "urgent" && (
                          <div className="mt-4 flex items-center gap-2 p-3 bg-red-500/20 rounded-xl border border-red-500/30">
                            <AlertCircle className="w-4 h-4 text-red-400" />
                            <span className="text-red-300 text-sm font-medium">Deadline approaching soon!</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="text-center py-12">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <IndianRupee className="w-8 h-8 text-amber-400" />
                <h3 className="text-2xl font-bold text-white">Education for All</h3>
              </div>
              <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
                Empowering students across India with comprehensive scholarship information. 
                Your dreams of quality education are within reach.
              </p>
              <div className="text-white/60 text-sm">
                © 2025 India Scholarship Portal • Updated September 2025 • Made for Students
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}