import React, { useState, useRef } from "react";
import {
  BarChart3,
  TrendingUp,
  Star,
  MapPin,
  Users,
  Calendar,
  X,
  CheckCircle,
  Download,
  Share2,
  Filter,
  Search,
  ChevronDown,
  Eye,
  EyeOff,
  Zap,
  Award,
  Globe,
  DollarSign,
  BookOpen,
  Building,
  Target,
  TrendingDown,
  AlertCircle
} from "lucide-react";

export default function EnhancedCompareTable({
  items = [],
  onRemoveItem,
  title = "Comparison",
  type = "colleges",
  onExport,
  enableSearch = true,
  enableFilters = true,
  customFields = null,
  showScores = true,
  compactMode = false
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [hiddenFields, setHiddenFields] = useState(new Set());
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [showExportOptions, setShowExportOptions] = useState(false);
  const [highlightedItem, setHighlightedItem] = useState(null);
  const tableRef = useRef(null);

  if (items.length === 0) {
    return (
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20 text-center">
        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center animate-pulse">
          <BarChart3 className="w-16 h-16 text-gray-300" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">No Items Selected</h3>
        <p className="text-white/60 mb-6">Select items above to start comparing features and specifications</p>
        <div className="flex justify-center gap-4 text-white/40">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4" />
            <span className="text-sm">Side-by-side comparison</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm">Smart scoring</span>
          </div>
          <div className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span className="text-sm">Export options</span>
          </div>
        </div>
      </div>
    );
  }

  const getFieldIcon = (field) => {
    const iconMap = {
      // College fields
      fees: <DollarSign className="w-4 h-4 text-yellow-400" />,
      placement: <TrendingUp className="w-4 h-4 text-green-400" />,
      location: <MapPin className="w-4 h-4 text-blue-400" />,
      students: <Users className="w-4 h-4 text-orange-400" />,
      established: <Calendar className="w-4 h-4 text-indigo-400" />,
      website: <Globe className="w-4 h-4 text-cyan-400" />,
      cutoff: <Target className="w-4 h-4 text-pink-400" />,
      scholarship: <Award className="w-4 h-4 text-green-300" />,
      status: <CheckCircle className="w-4 h-4 text-blue-400" />,
      ranking: <Star className="w-4 h-4 text-yellow-400" />,
      courses: <BookOpen className="w-4 h-4 text-purple-400" />,
      campus: <Building className="w-4 h-4 text-gray-400" />,
      
      // Career fields
      salary: <DollarSign className="w-4 h-4 text-green-400" />,
      growth: <TrendingUp className="w-4 h-4 text-blue-400" />,
      demand: <Users className="w-4 h-4 text-purple-400" />,
      experience: <Zap className="w-4 h-4 text-orange-400" />,
      skills: <Target className="w-4 h-4 text-red-400" />,
      industry: <Building className="w-4 h-4 text-teal-400" />
    };
    return iconMap[field] || <AlertCircle className="w-4 h-4 text-gray-400" />;
  };

  const getComparisonFields = () => {
    if (customFields) return customFields;
    
    if (type === "colleges") {
      return [
        { key: "fees", label: "Annual Fees", type: "currency", important: true },
        { key: "placement", label: "Placement Rate", type: "percentage", important: true },
        { key: "ranking", label: "Ranking", type: "number", important: true },
        { key: "cutoff", label: "Cutoff Score", type: "number", important: true },
        { key: "scholarship", label: "Scholarships", type: "text" },
        { key: "location", label: "Location", type: "text" },
        { key: "established", label: "Established", type: "year" },
        { key: "students", label: "Student Count", type: "number" },
        { key: "courses", label: "Courses Offered", type: "number" },
        { key: "campus", label: "Campus Size", type: "text" },
        { key: "status", label: "Accreditation", type: "text" },
        { key: "website", label: "Website", type: "link" }
      ];
    } else if (type === "careers") {
      return [
        { key: "salary", label: "Salary Range", type: "currency", important: true },
        { key: "growth", label: "Growth Rate", type: "percentage", important: true },
        { key: "demand", label: "Job Demand", type: "text", important: true },
        { key: "experience", label: "Experience Level", type: "text" },
        { key: "skills", label: "Required Skills", type: "list" },
        { key: "industry", label: "Industry", type: "text" }
      ];
    }
    return [];
  };

  const calculateScore = (item, fields) => {
    if (!showScores) return null;
    
    let totalScore = 0;
    let scoredFields = 0;
    
    fields.forEach(field => {
      if (!field.important) return;
      
      const value = item[field.key];
      if (!value || value === "N/A") return;
      
      let fieldScore = 0;
      
      switch (field.type) {
        case "percentage":
          fieldScore = Math.min(parseFloat(value) || 0, 100);
          break;
        case "number":
          if (field.key === "ranking") {
            fieldScore = Math.max(0, 100 - (parseInt(value) || 100));
          } else {
            fieldScore = Math.min((parseInt(value) || 0) / 10, 100);
          }
          break;
        case "currency":
          const numValue = parseFloat(value.replace(/[^0-9.]/g, ''));
          fieldScore = field.key === "fees" 
            ? Math.max(0, 100 - (numValue / 100000)) 
            : Math.min(numValue / 1000, 100);
          break;
        default:
          fieldScore = value.toLowerCase().includes("good") || 
                      value.toLowerCase().includes("high") ||
                      value.toLowerCase().includes("excellent") ? 80 : 60;
      }
      
      totalScore += fieldScore;
      scoredFields++;
    });
    
    return scoredFields > 0 ? Math.round(totalScore / scoredFields) : 0;
  };

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    if (score >= 40) return "text-orange-400";
    return "text-red-400";
  };

  const getScoreGradient = (score) => {
    if (score >= 80) return "from-green-500 to-emerald-500";
    if (score >= 60) return "from-yellow-500 to-amber-500";
    if (score >= 40) return "from-orange-500 to-red-500";
    return "from-red-500 to-pink-500";
  };

  const toggleFieldVisibility = (fieldKey) => {
    setHiddenFields(prev => {
      const newSet = new Set(prev);
      if (newSet.has(fieldKey)) {
        newSet.delete(fieldKey);
      } else {
        newSet.add(fieldKey);
      }
      return newSet;
    });
  };

  const handleSort = (fieldKey) => {
    if (sortField === fieldKey) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(fieldKey);
      setSortOrder("asc");
    }
  };

  const exportToCSV = () => {
    const fields = getComparisonFields().filter(field => !hiddenFields.has(field.key));
    const headers = ["Name", ...fields.map(f => f.label)];
    const rows = items.map(item => [
      item.name,
      ...fields.map(field => item[field.key] || "N/A")
    ]);
    
    const csvContent = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(","))
      .join("\n");
    
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title.replace(/\s+/g, "_")}_comparison.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredFields = getComparisonFields().filter(field => 
    !hiddenFields.has(field.key) && 
    (!searchTerm || field.label.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const sortedItems = [...items].sort((a, b) => {
    if (!sortField) return 0;
    
    const aVal = a[sortField] || "";
    const bVal = b[sortField] || "";
    
    const comparison = aVal.toString().localeCompare(bVal.toString(), undefined, { numeric: true });
    return sortOrder === "asc" ? comparison : -comparison;
  });

  return (
    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 animate-fade-in overflow-hidden">
      {/* Enhanced Header */}
      <div className="p-8 border-b border-white/20 bg-gradient-to-r from-white/5 to-transparent">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
              <p className="text-white/60">
                Comparing {items.length} item{items.length > 1 ? "s" : ""} • {filteredFields.length} fields shown
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap gap-3">
            {enableSearch && (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Search fields..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-2 text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors"
                />
              </div>
            )}

            {enableFilters && (
              <div className="relative">
                <button
                  onClick={() => setShowExportOptions(!showExportOptions)}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2 rounded-xl transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            )}

            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Field visibility controls */}
        {enableFilters && (
          <div className="mt-6 p-4 bg-white/5 rounded-2xl">
            <h4 className="text-white font-semibold mb-3">Visible Fields</h4>
            <div className="flex flex-wrap gap-2">
              {getComparisonFields().map(field => (
                <button
                  key={field.key}
                  onClick={() => toggleFieldVisibility(field.key)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                    hiddenFields.has(field.key)
                      ? 'bg-white/10 text-white/50'
                      : 'bg-white/20 text-white'
                  }`}
                >
                  {hiddenFields.has(field.key) ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                  {field.label}
                  {field.important && <Star className="w-3 h-3 text-yellow-400" />}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Table */}
      <div className="overflow-x-auto" ref={tableRef}>
        <div className="inline-block min-w-full">
          {/* Header row with scores */}
          <div className={`grid border-b border-white/20 sticky top-0 bg-white/10 backdrop-blur-sm z-10`} 
               style={{ gridTemplateColumns: `200px repeat(${sortedItems.length}, minmax(200px, 1fr))` }}>
            <div className="py-6 px-6 font-bold text-white/90 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-purple-400" />
              Features
            </div>
            {sortedItems.map((item, index) => {
              const score = calculateScore(item, getComparisonFields());
              return (
                <div
                  key={item.name}
                  className={`py-6 px-6 text-center font-bold text-white flex flex-col items-center gap-3 border-l border-white/20 relative group transition-colors duration-300 ${
                    highlightedItem === item.name ? 'bg-white/20' : 'hover:bg-white/10'
                  }`}
                  onMouseEnter={() => setHighlightedItem(item.name)}
                  onMouseLeave={() => setHighlightedItem(null)}
                >
                  <div className="flex items-center gap-3">
                    <span className="truncate max-w-[140px]">{item.name}</span>
                    {onRemoveItem && (
                      <button
                        onClick={() => onRemoveItem(item)}
                        className="p-1 rounded-full bg-red-500/20 hover:bg-red-500/40 text-red-400 hover:text-red-300 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  
                  {/* Score display */}
                  {showScores && score !== null && (
                    <div className="flex flex-col items-center gap-2">
                      <div className={`text-2xl font-bold ${getScoreColor(score)}`}>
                        {score}
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${getScoreGradient(score)} transition-all duration-1000 ease-out`}
                          style={{ width: `${score}%` }}
                        />
                      </div>
                      <span className="text-xs text-white/60">Overall Score</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Data rows */}
          {filteredFields.map((field, fieldIndex) => (
            <div
              key={field.key}
              className={`grid border-b border-white/10 transition-colors duration-300 hover:bg-white/5 ${
                fieldIndex % 2 === 0 ? "bg-white/2" : ""
              } ${field.important ? "bg-gradient-to-r from-yellow-500/5 to-transparent" : ""}`}
              style={{ gridTemplateColumns: `200px repeat(${sortedItems.length}, minmax(200px, 1fr))` }}
            >
              {/* Field name with sorting */}
              <div className="py-4 px-6 flex items-center justify-between text-white/90 font-medium group">
                <div className="flex items-center gap-3">
                  {getFieldIcon(field.key)}
                  <span className="flex items-center gap-2">
                    {field.label}
                    {field.important && <Star className="w-3 h-3 text-yellow-400" />}
                  </span>
                </div>
                <button
                  onClick={() => handleSort(field.key)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-white/10 rounded"
                >
                  {sortField === field.key ? (
                    sortOrder === "asc" ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />
                  ) : (
                    <BarChart3 className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Field values */}
              {sortedItems.map((item, itemIndex) => (
                <div
                  key={`${item.name}-${field.key}`}
                  className={`py-4 px-6 text-center font-medium border-l border-white/10 transition-colors duration-300 ${
                    highlightedItem === item.name ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {renderFieldValue(item[field.key], field)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Actions */}
      <div className="p-8 bg-gradient-to-r from-white/5 to-transparent border-t border-white/20">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="text-white/60 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigator.share && navigator.share({
                title: title,
                text: `Comparison of ${items.length} items`,
                url: window.location.href
              })}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>

            {onRemoveItem && (
              <button
                onClick={() => items.forEach((item) => onRemoveItem(item))}
                className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <X className="w-4 h-4" />
                Clear All
              </button>
            )}

            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download className="w-4 h-4" />
              Export Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Helper function to render field values with appropriate formatting
  function renderFieldValue(value, field) {
    if (!value || value === "N/A") {
      return <span className="text-white/40">—</span>;
    }

    switch (field.type) {
      case "link":
        return (
          <a 
            href={value.startsWith('http') ? value : `https://${value}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline transition-colors"
          >
            <Globe className="w-4 h-4 inline mr-1" />
            Visit
          </a>
        );
      
      case "currency":
        return (
          <span className="flex items-center justify-center gap-1">
            <DollarSign className="w-3 h-3" />
            {value}
          </span>
        );
      
      case "percentage":
        const numValue = parseFloat(value);
        return (
          <div className="flex items-center justify-center gap-2">
            <span>{value}</span>
            {numValue >= 80 && <TrendingUp className="w-4 h-4 text-green-400" />}
            {numValue < 60 && <TrendingDown className="w-4 h-4 text-red-400" />}
          </div>
        );
      
      case "list":
        const items = Array.isArray(value) ? value : value.split(',');
        return (
          <div className="flex flex-wrap gap-1 justify-center">
            {items.slice(0, 3).map((item, i) => (
              <span key={i} className="bg-white/20 px-2 py-1 rounded text-xs">
                {item.trim()}
              </span>
            ))}
            {items.length > 3 && <span className="text-white/60 text-xs">+{items.length - 3}</span>}
          </div>
        );
      
      default:
        return <span className="break-words">{value}</span>;
    }
  }
}

