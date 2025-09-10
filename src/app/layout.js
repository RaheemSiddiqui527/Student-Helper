"use client"
import "./globals.css"
import Navbar from "./components/Navbar"
import WebsiteChatbot from './components/WebsiteChatbot'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navbar har page pe upar show hoga */}
        <Navbar />
        
        <main>{children}</main>
        <WebsiteChatbot />
      </body>
    </html>
  )
}
