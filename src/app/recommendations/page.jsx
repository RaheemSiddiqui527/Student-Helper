"use client";
import { useState } from "react";
import { 
  Brain, 
  Target, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  Award,
  TrendingUp,
  Star,
  Clock,
  ArrowRight,
  Filter,
  Search,
  MapPin,
  DollarSign,
  Users,
  ChevronRight,
  Lightbulb,
  Calendar,
  Building2,
  Heart,
  Eye,
  Bookmark,
  ExternalLink
} from "lucide-react";

export default function ProfileRecommendations() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  // Mock user profile data
  const userProfile = {
    name: "Alex Johnson",
    interests: ["Technology", "Engineering", "AI", "Data Science"],
    assessmentScores: {
      analytical: 85,
      creative: 72,
      leadership: 68,
      technical: 91
    },
    goals: ["Software Engineer", "AI Research", "Tech Startup"]
  };

  // Recommendation categories
  const filters = [
    { id: 'all', label: 'All Recommendations', count: 24 },
    { id: 'careers', label: 'Career Paths', count: 8 },
    { id: 'colleges', label: 'Colleges', count: 6 },
    { id: 'scholarships', label: 'Scholarships', count: 5 },
    { id: 'courses', label: 'Courses', count: 5 }
  ];

  // Career recommendations
  const careerRecommendations = [
    {
      id: 1,
      type: 'career',
      title: 'AI/ML Engineer',
      match: 95,
      description: 'Design and develop AI systems and machine learning models',
      salaryRange: '$120k - $180k',
      growth: '+22%',
      skills: ['Python', 'TensorFlow', 'Deep Learning'],
      companies: ['Google', 'OpenAI', 'Tesla'],
      reason: 'Perfect match for your technical skills and AI interest'
    },
    {
      id: 2,
      type: 'career',
      title: 'Software Engineer',
      match: 92,
      description: 'Build scalable software applications and systems',
      salaryRange: '$100k - $160k',
      growth: '+25%',
      skills: ['JavaScript', 'React', 'Node.js'],
      companies: ['Microsoft', 'Meta', 'Amazon'],
      reason: 'Aligns with your analytical and technical strengths'
    },
    {
      id: 3,
      type: 'career',
      title: 'Data Scientist',
      match: 88,
      description: 'Extract insights from data to drive business decisions',
      salaryRange: '$110k - $170k',
      growth: '+31%',
      skills: ['Python', 'SQL', 'Statistics'],
      companies: ['Netflix', 'Uber', 'Airbnb'],
      reason: 'Great fit for your analytical thinking'
    }
  ];

  // College recommendations
  const collegeRecommendations = [
    {
      id: 4,
      type: 'college',
      title: 'Stanford University',
      match: 89,
      description: 'Top-tier computer science and engineering programs',
      location: 'California, USA',
      acceptance: '4.3%',
      ranking: '#3 Global',
      programs: ['Computer Science', 'AI', 'Engineering'],
      reason: 'Elite AI research facilities match your interests'
    },
    {
      id: 5,
      type: 'college',
      title: 'MIT',
      match: 87,
      description: 'Leading technology and engineering education',
      location: 'Massachusetts, USA',
      acceptance: '6.7%',
      ranking: '#1 Engineering',
      programs: ['EECS', 'AI', 'Robotics'],
      reason: 'Perfect for technical and analytical mindset'
    },
    {
      id: 6,
      type: 'college',
      title: 'UC Berkeley',
      match: 85,
      description: 'Renowned CS program with strong industry connections',
      location: 'California, USA',
      acceptance: '14.5%',
      ranking: '#4 CS',
      programs: ['Computer Science', 'Data Science'],
      reason: 'Strong in areas matching your skill profile'
    }
  ];

  // Scholarship recommendations
  const scholarshipRecommendations = [
    {
      id: 7,
      type: 'scholarship',
      title: 'Google AI Scholarship',
      match: 94,
      description: 'For students pursuing AI and machine learning',
      amount: '$10,000',
      deadline: '2024-03-15',
      eligibility: ['STEM Major', 'GPA 3.5+', 'AI Interest'],
      reason: 'Perfect match for your AI passion and technical skills'
    },
    {
      id: 8,
      type: 'scholarship',
      title: 'Microsoft Tech Scholarship',
      match: 89,
      description: 'Supporting future technology leaders',
      amount: '$8,000',
      deadline: '2024-04-01',
      eligibility: ['Computer Science', 'Leadership', 'Innovation'],
      reason: 'Aligns with your technical background'
    }
  ];

  // Course recommendations
  const courseRecommendations = [
    {
      id: 9,
      type: 'course',
      title: 'Deep Learning Specialization',
      match: 96,
      description: 'Comprehensive deep learning course by Andrew Ng',
      provider: 'Coursera',
      duration: '3-4 months',
      rating: 4.9,
      skills: ['Neural Networks', 'TensorFlow', 'CNN'],
      reason: 'Build on your technical foundation with cutting-edge AI'
    },
    {
      id: 10,
      type: 'course',
      title: 'Full Stack Web Development',
      match: 87,
      description: 'Complete web development bootcamp',
      provider: 'Udemy',
      duration: '6 weeks',
      rating: 4.7,
      skills: ['React', 'Node.js', 'MongoDB'],
      reason: 'Complement your technical skills with practical development'
    }
  ];

  // Combine all recommendations
  const allRecommendations = [
    ...careerRecommendations,
    ...collegeRecommendations,
    ...scholarshipRecommendations,
    ...courseRecommendations
  ];

  // Filter recommendations
  const filteredRecommendations = activeFilter === 'all' 
    ? allRecommendations 
    : allRecommendations.filter(rec => rec.type === activeFilter.slice(0, -1) || (activeFilter === 'courses' && rec.type === 'course'));

  const getTypeIcon = (type) => {
    switch(type) {
      case 'career': return <Briefcase className="w-5 h-5" />;
      case 'college': return <GraduationCap className="w-5 h-5" />;
      case 'scholarship': return <Award className="w-5 h-5" />;
      case 'course': return <BookOpen className="w-5 h-5" />;
      default: return <Target className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'career': return 'from-blue-500 to-cyan-600';
      case 'college': return 'from-purple-500 to-pink-600';
      case 'scholarship': return 'from-green-500 to-emerald-600';
      case 'course': return 'from-orange-500 to-red-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const renderRecommendationCard = (rec) => (
    <div
      key={rec.id}
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 bg-gradient-to-r ${getTypeColor(rec.type)} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            {getTypeIcon(rec.type)}
          </div>
          <div>
            <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-medium capitalize">
              {rec.type}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-right">
            <div className="text-2xl font-bold text-white">{rec.match}%</div>
            <div className="text-xs text-white/60">Match</div>
          </div>
          <Bookmark className="w-5 h-5 text-white/50 hover:text-white cursor-pointer" />
        </div>
      </div>

      {/* Title and Description */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
        {rec.title}
      </h3>
      <p className="text-white/70 text-sm mb-4 line-clamp-2">
        {rec.description}
      </p>

      {/* Specific Content Based on Type */}
      {rec.type === 'career' && (
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1 text-green-300">
              <DollarSign className="w-4 h-4" />
              {rec.salaryRange}
            </span>
            <span className="flex items-center gap-1 text-blue-300">
              <TrendingUp className="w-4 h-4" />
              {rec.growth}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {rec.skills.slice(0, 3).map((skill, index) => (
              <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {rec.type === 'college' && (
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1 text-purple-300">
              <MapPin className="w-4 h-4" />
              {rec.location}
            </span>
            <span className="flex items-center gap-1 text-yellow-300">
              <Star className="w-4 h-4" />
              {rec.ranking}
            </span>
          </div>
          <div className="text-sm text-white/70">
            Acceptance: <span className="text-orange-300 font-medium">{rec.acceptance}</span>
          </div>
        </div>
      )}

      {rec.type === 'scholarship' && (
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1 text-green-300 font-bold">
              <DollarSign className="w-4 h-4" />
              {rec.amount}
            </span>
            <span className="flex items-center gap-1 text-orange-300">
              <Calendar className="w-4 h-4" />
              {rec.deadline}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {rec.eligibility.slice(0, 2).map((criteria, index) => (
              <span key={index} className="px-2 py-1 bg-green-500/20 text-green-300 rounded-lg text-xs">
                {criteria}
              </span>
            ))}
          </div>
        </div>
      )}

      {rec.type === 'course' && (
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1 text-orange-300">
              <Clock className="w-4 h-4" />
              {rec.duration}
            </span>
            <span className="flex items-center gap-1 text-yellow-300">
              <Star className="w-4 h-4" />
              {rec.rating}
            </span>
          </div>
          <div className="text-sm text-white/70">
            by <span className="text-blue-300 font-medium">{rec.provider}</span>
          </div>
        </div>
      )}

      {/* Reason */}
      <div className="bg-white/5 rounded-2xl p-3 mb-4">
        <div className="flex items-start gap-2">
          <Lightbulb className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-white/80">
            {rec.reason}
          </p>
        </div>
      </div>

      {/* Action Button */}
      <button className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-3 rounded-2xl transition-all duration-300 group-hover:translate-y-1">
        Learn More
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <div className="bg-white/5 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Personalized Recommendations</h1>
                <p className="text-white/70">AI-powered suggestions tailored for {userProfile.name}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-2xl">
                  <Brain className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium">AI Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Profile Insights */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 mb-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Target className="w-6 h-6 text-blue-400" />
              Your Profile Insights
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-medium text-white/80 mb-2">Top Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {userProfile.interests.map((interest, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-white/80 mb-2">Strength Areas</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-white/70">Technical</span>
                    <span className="text-sm font-medium text-green-300">{userProfile.assessmentScores.technical}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-white/70">Analytical</span>
                    <span className="text-sm font-medium text-green-300">{userProfile.assessmentScores.analytical}%</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-white/80 mb-2">Career Goals</h3>
                <div className="space-y-1">
                  {userProfile.goals.map((goal, index) => (
                    <div key={index} className="text-sm text-white/70 flex items-center gap-2">
                      <Target className="w-3 h-3 text-purple-400" />
                      {goal}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 flex-wrap">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === filter.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  {filter.label}
                  <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs">
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Recommendations Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredRecommendations.map(renderRecommendationCard)}
          </div>
        </div>
      </div>
    </div>
  );
}