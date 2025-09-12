"use client";
import React, { useState, useRef, useEffect } from "react";
import { 
  MessageCircle, Send, Bot, User, Sparkles, Brain, 
  TrendingUp, Star, Code, PenTool, Mic, Users, 
  Target, X, GraduationCap, Building, MapPin,
  BookOpen, Award, DollarSign, Clock, Globe,
  Search, Filter, Bookmark, ExternalLink, Zap
} from "lucide-react";

const WebsiteChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hello! Welcome to our Educational Platform!\n\nI'm your personal assistant and I can help you with:\n\n🎯 **Career Guidance** - Find perfect careers based on your skills\n🏛️ **College Selection** - Compare colleges and find the best fit\n💰 **Salary Insights** - Get detailed salary information\n📚 **Educational Pathways** - Understand course requirements\n🚀 **Skill Development** - Learn what skills you need\n\nWhat would you like to explore today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: ["Find careers for me", "Compare colleges", "Salary information", "Skill guidance", "How to use website"]
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Career data for intelligent responses
  const careerData = {
    "software engineer": {
      salary: "₹8-25 LPA",
      skills: ["JavaScript", "Python", "React", "Node.js", "Git"],
      growth: "Very High",
      demand: "Very High",
      companies: ["Google", "Microsoft", "Amazon", "Netflix", "Meta"],
      education: "B.Tech/B.E in Computer Science or related field",
      colleges: ["IIT Delhi", "BITS Pilani", "VIT Vellore", "SRM Chennai"]
    },
    "data scientist": {
      salary: "₹6-20 LPA", 
      skills: ["Python", "R", "Machine Learning", "SQL", "Statistics"],
      growth: "Very High",
      demand: "High",
      companies: ["Flipkart", "Swiggy", "Zomato", "PayTM", "Uber"],
      education: "B.Tech/M.Tech + Data Science Certification",
      colleges: ["IIT Bombay", "ISI Kolkata", "IIM Bangalore", "IIIT Hyderabad"]
    },
    "ui/ux designer": {
      salary: "₹4-16 LPA",
      skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
      growth: "Very High", 
      demand: "High",
      companies: ["Flipkart", "Zomato", "Paytm", "PhonePe", "Swiggy"],
      education: "Design Degree, BFA, or Strong Portfolio",
      colleges: ["NID Ahmedabad", "Pearl Academy", "MIT Institute", "Srishti School"]
    },
    "content writer": {
      salary: "₹3-8 LPA",
      skills: ["SEO Writing", "Content Strategy", "Social Media", "Research"],
      growth: "Medium",
      demand: "High", 
      companies: ["Byju's", "Unacademy", "Zomato", "Swiggy", "Amazon"],
      education: "Any Graduate with excellent writing skills",
      colleges: ["JNU Delhi", "St. Xavier's Mumbai", "Christ Bangalore", "Symbiosis Pune"]
    },
    "project manager": {
      salary: "₹8-25 LPA",
      skills: ["Project Management", "Agile", "Team Leadership", "Communication"],
      growth: "Very High",
      demand: "High",
      companies: ["IBM", "Accenture", "Capgemini", "TCS", "Infosys"],
      education: "Engineering + PMP/MBA preferred",
      colleges: ["IIM Ahmedabad", "XLRI Jamshedpur", "FMS Delhi", "SPJIMR Mumbai"]
    }
  };

  // Scroll to bottom when new message is added
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Intelligent bot response system
  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Website navigation and help
    if (input.includes("how to use") || input.includes("help") || input.includes("guide")) {
      return {
        text: "📋 **How to Use Our Platform:**\n\n**Career Matcher:**\n• Select your skills and interests\n• Browse personalized career recommendations\n• Compare salaries and growth potential\n• Save careers you like\n\n**College Comparison:**\n• Search for colleges by name/location\n• Compare up to 5 colleges at once\n• Check fees, placements, and facilities\n• Save colleges to favorites\n\n**Tips:**\n✅ Use filters to narrow down results\n✅ Save items for later comparison\n✅ Check both career and college info together\n\nWhat specific feature would you like help with?",
        suggestions: ["Career Matcher guide", "College Comparison help", "Search tips", "Filtering options"]
      };
    }

    if (input.includes("career matcher") || input.includes("find career") || input.includes("career recommendation")) {
      return {
        text: "🎯 **Career Matcher - AI-Powered Career Discovery:**\n\n**What it does:**\n• Matches careers based on your skills\n• Shows salary ranges and growth potential\n• Displays top hiring companies\n• Filters by remote work options\n\n**How to use:**\n1. Select your skills (coding, writing, speaking, etc.)\n2. Use advanced filters for salary/growth/demand\n3. Browse personalized recommendations\n4. Click 'Learn More' for detailed info\n5. Save interesting careers\n\n**Pro Tips:**\n💡 Select multiple skills for better matches\n💡 Use search to find specific careers\n💡 Check trending careers section\n\nReady to find your perfect career?",
        suggestions: ["Show me tech careers", "High salary careers", "Remote work options", "Entry level careers"]
      };
    }

    // Specific career queries
    for (const [career, data] of Object.entries(careerData)) {
      if (input.includes(career.replace(" ", "")) || input.includes(career)) {
        return {
          text: `🚀 **${career.toUpperCase()} - Complete Guide:**\n\n💰 **Salary Range**: ${data.salary}\n📈 **Growth Potential**: ${data.growth}\n🎯 **Market Demand**: ${data.demand}\n🎓 **Education**: ${data.education}\n\n**Essential Skills:**\n${data.skills.map(skill => `• ${skill}`).join('\n')}\n\n**Top Companies Hiring:**\n${data.companies.map(company => `• ${company}`).join('\n')}\n\n**Recommended Colleges:**\n${data.colleges.map(college => `• ${college}`).join('\n')}\n\n💡 **Next Steps**: Use our Career Matcher to get personalized recommendations!`,
          suggestions: ["Career roadmap", "Skill development plan", "College options", "Interview preparation"]
        };
      }
    }

    // Salary and financial queries
    if (input.includes("salary") || input.includes("pay") || input.includes("money") || input.includes("fees")) {
      return {
        text: "💰 **Comprehensive Salary & Cost Guide:**\n\n**Career Salary Ranges:**\n🚀 **Technology**: ₹4-30 LPA\n• Software Engineer: ₹8-25 LPA\n• Data Scientist: ₹6-20 LPA\n• Product Manager: ₹12-35 LPA\n\n📊 **Business & Management**: ₹5-25 LPA\n• Business Analyst: ₹6-18 LPA\n• Project Manager: ₹8-25 LPA\n• Consultant: ₹10-30 LPA\n\n🎨 **Creative Fields**: ₹3-15 LPA\n• UI/UX Designer: ₹4-16 LPA\n• Content Writer: ₹3-8 LPA\n• Graphic Designer: ₹3-10 LPA\n\n**College Fees (Annual):**\n🏛️ **Engineering**: ₹1-4 Lakhs\n🏛️ **Management**: ₹8-25 Lakhs\n🏛️ **Medical**: ₹5-15 Lakhs\n\nWant specific salary info for any career?",
        suggestions: ["Tech career salaries", "MBA ROI calculator", "Engineering college fees", "Scholarship options"]
      };
    }

    // Skills and learning queries
    if (input.includes("skill") || input.includes("learn") || input.includes("course")) {
      return {
        text: "🚀 **Skills Development Roadmap:**\n\n**Most In-Demand Skills 2024:**\n\n**Technical Skills:**\n• Python Programming\n• JavaScript & React\n• Data Analysis & SQL\n• Cloud Computing (AWS/Azure)\n• Machine Learning & AI\n• UI/UX Design\n\n**Business Skills:**\n• Project Management\n• Digital Marketing\n• Business Analysis\n• Communication\n• Leadership\n\n**Learning Platforms:**\n📚 Coursera, Udemy, edX\n📚 YouTube, FreeCodeCamp\n📚 LinkedIn Learning\n📚 Coding bootcamps\n\n**Skill Development Tips:**\n💡 Start with basics, build projects\n💡 Get certifications\n💡 Practice regularly\n💡 Join communities\n\nWhich skill area interests you most?",
        suggestions: ["Programming skills", "Design skills", "Business skills", "Certification courses"]
      };
    }

    // Default helpful responses
    const defaultResponses = [
      {
        text: "I'm here to help you navigate your educational and career journey! 🎯\n\n**I can assist you with:**\n\n🎓 **Career Guidance:**\n• Find careers matching your skills\n• Salary and growth insights\n• Skill development roadmaps\n• Industry trends\n\n🏛️ **College Selection:**\n• Compare colleges and courses\n• Admission requirements\n• Fees and scholarships\n• Placement records\n\n💡 **Platform Navigation:**\n• How to use our tools\n• Feature explanations\n• Search and filter tips\n\nWhat specific area would you like to explore?",
        suggestions: ["Find my ideal career", "Compare colleges", "Salary insights", "Platform tutorial"]
      },
      {
        text: "Let me help you make informed decisions about your future! 🌟\n\n**Popular Queries I Can Help With:**\n\n🔍 **Career Exploration:**\n\"Show me tech careers\"\n\"High salary jobs\"\n\"Remote work options\"\n\"Entry level positions\"\n\n🔍 **College Research:**\n\"Best engineering colleges\"\n\"MBA college comparison\"\n\"College fees information\"\n\"Scholarship opportunities\"\n\n🔍 **Skill Development:**\n\"What skills do I need?\"\n\"Learning roadmap\"\n\"Certification courses\"\n\nFeel free to ask me anything!",
        suggestions: ["Career recommendations", "College guidance", "Skill planning", "Market insights"]
      }
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: "user",
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = getBotResponse(inputText);
      const botMessage = {
        id: Date.now() + 1,
        type: "bot",
        text: botResponse.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: botResponse.suggestions || []
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputText(suggestion);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        type: "bot",
        text: "Chat cleared! 🧹 How can I help you today?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: ["Find careers for me", "Compare colleges", "Salary information", "How to use website"]
      }
    ]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center group ${
          isOpen ? 'scale-0' : 'scale-100 hover:scale-110'
        }`}
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">!</span>
        </div>
        
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse opacity-75"></div>
      </button>

      {/* Chat Window */}
      <div className={`absolute bottom-0 right-0 w-[90vw] max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-[70vh] sm:h-[600px] lg:h-[700px] bg-gradient-to-br from-slate-900/95 via-indigo-900/95 to-slate-900/95 backdrop-blur-lg rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl transition-all duration-500 ${
        isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-white/20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-t-2xl sm:rounded-t-3xl">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center relative">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              {/* Online indicator */}
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm sm:text-base">EduBot Assistant</h3>
              <p className="text-green-400 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></span>
                Online • Ready to help
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={clearChat}
              className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              title="Clear chat"
            >
              <Sparkles className="w-4 h-4 text-white/60 hover:text-white" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <X className="w-4 h-4 text-white/60 hover:text-white" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4" style={{ height: 'calc(100% - 140px)' }}>
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-2.5 sm:p-3 ${
                message.type === 'user'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white/10 border border-white/20 text-white backdrop-blur-sm'
              }`}>
                <div className="flex items-start gap-2 mb-1">
                  {message.type === 'bot' && (
                    <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  )}
                  {message.type === 'user' && (
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80 mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed break-words">{message.text}</p>
                    <p className="text-xs text-white/50 mt-1">{message.timestamp}</p>
                  </div>
                </div>
                
                {/* Suggestions */}
                {message.suggestions && message.suggestions.length > 0 && (
                  <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                    {message.suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-2.5 py-1 bg-white/20 hover:bg-white/30 rounded-full text-xs text-white transition-all duration-200 hover:scale-105 border border-white/30"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-2.5 sm:p-3 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="text-white/60 text-xs">EduBot is thinking...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        {messages.length <= 2 && (
          <div className="px-3 sm:px-4 pb-2">
            <p className="text-white/60 text-xs mb-2">🚀 Quick Actions:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={() => handleSuggestionClick("Find careers for me")}
                className="p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 border border-blue-500/30 rounded-xl text-xs text-white transition-all duration-200 hover:scale-105 flex items-center gap-2"
              >
                <Target className="w-3 h-3" />
                Find Careers
              </button>
              <button
                onClick={() => handleSuggestionClick("Compare colleges")}
                className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 border border-purple-500/30 rounded-xl text-xs text-white transition-all duration-200 hover:scale-105 flex items-center gap-2"
              >
                <GraduationCap className="w-3 h-3" />
                Compare Colleges
              </button>
              <button
                onClick={() => handleSuggestionClick("Salary information")}
                className="p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 border border-green-500/30 rounded-xl text-xs text-white transition-all duration-200 hover:scale-105 flex items-center gap-2"
              >
                <DollarSign className="w-3 h-3" />
                Salary Info
              </button>
              <button
                onClick={() => handleSuggestionClick("How to use website")}
                className="p-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 hover:from-orange-500/30 hover:to-red-500/30 border border-orange-500/30 rounded-xl text-xs text-white transition-all duration-200 hover:scale-105 flex items-center gap-2"
              >
                <BookOpen className="w-3 h-3" />
                Help Guide
              </button>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="p-3 sm:p-4 border-t border-white/20 bg-white/5">
          <div className="flex gap-2 items-end">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about careers, colleges, skills..."
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2.5 text-white text-sm placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 resize-none backdrop-blur-sm min-h-[40px] max-h-20 leading-tight"
              rows={1}
              style={{ 
                height: 'auto',
                minHeight: '40px'
              }}
            />
            <button
              onClick={handleSendMessage}
              disabled={inputText.trim() === "" || isTyping}
              className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 flex-shrink-0"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Powered by indicator */}
        <div className="px-3 sm:px-4 py-1">
          <p className="text-white/40 text-xs text-center flex items-center justify-center gap-1">
            <Sparkles className="w-3 h-3" />
            Powered by AI • EduBot v2.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteChatbot;