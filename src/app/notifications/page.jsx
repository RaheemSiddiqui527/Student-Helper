"use client";

import { Bell } from "lucide-react";

export default function NotificationsPage() {
  // Dummy notifications
  const notifications = [
    { id: 1, text: "🎓 New scholarship opportunity available!", time: "2h ago" },
    { id: 2, text: "🏫 Your saved college deadline is tomorrow.", time: "5h ago" },
    { id: 3, text: "💼 New career guidance article published.", time: "1d ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects (same as login page style) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{ animationDelay: "4s" }}></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-3 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
            <Bell size={28} className="text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Notifications
          </h1>
        </div>

        {/* Notifications List */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl divide-y divide-white/10">
          {notifications.length > 0 ? (
            notifications.map((notif) => (
              <div
                key={notif.id}
                className="flex justify-between items-start p-4 hover:bg-white/5 transition rounded-lg"
              >
                <p className="text-white/90 text-sm">{notif.text}</p>
                <span className="text-xs text-white/50">{notif.time}</span>
              </div>
            ))
          ) : (
            <p className="text-center text-white/60 py-6">
              No notifications yet 🎉
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
