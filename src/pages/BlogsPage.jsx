import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, User, Clock, BookOpen, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { useSEO } from '../utils/useSEO';
import { getBlogs } from '../utils/blogStore';

export const BlogsPage = ({ onBackToHome }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = () => setBlogs(getBlogs());
    fetchBlogs();
    window.addEventListener('storage', fetchBlogs);
    return () => window.removeEventListener('storage', fetchBlogs);
  }, []);
  useSEO({
    title: "Travel Blogs & Guides | South India Tourism & Cab Tips | Bala's Travels",
    description: "Read travel tips, destination guides, and advice for traveling across South India. Discover the best outstation routes from Chennai, Bangalore, Coimbatore & Tirupur.",
    keywords: "Balas Travels blogs, best travels in Ashok Nagar Chennai, travel blog South India, Tamil Nadu tourism guide, outstation travel tips, best places to visit Chennai, road trip South India"
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* BACK TO HOME NAVIGATION */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-brand-red transition-colors cursor-pointer bg-white px-4 py-2 rounded-full border border-slate-200 shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <span className="text-xs font-black tracking-widest text-brand-red uppercase bg-brand-lightRed px-3 py-1 rounded-full border border-brand-red/10">
            TRAVEL INSIGHTS & BLOGS
          </span>
        </div>

        {/* HERO BANNER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            South India Travel Guides & Driver Insights
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Expert tips on outstation travel, temple tour itineraries, airport transfers, and vehicle selection for your South India journey.
          </p>
        </div>

        {/* ARTICLES LIST (TEXT-ONLY SEO FORMAT) */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {blogs.length === 0 ? (
            <div className="text-center p-12 bg-white rounded-3xl border border-slate-200">
              <p className="text-slate-500 font-bold">No travel guides available at the moment.</p>
            </div>
          ) : (
            blogs.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
              >
                {/* HEADER INFO */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <span className="bg-brand-lightRed text-brand-red text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-brand-red/10">
                    {post.category}
                  </span>
                  
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 font-bold">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* TITLE & CONTENT */}
                <div className="space-y-4 pt-2">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                    {post.title}
                  </h2>

                  <div className="text-sm text-slate-700 leading-relaxed font-medium whitespace-pre-wrap">
                    {/* Render content, allowing basic markdown-like bold text **text** to become HTML bold */}
                    {post.content.split('\n').map((paragraph, idx) => (
                      <p key={idx} className="mb-3" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    ))}
                  </div>
                </div>

                {/* AUTHOR & SEO BADGE */}
                <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    By {post.author}
                  </span>
                  <span className="text-emerald-600 text-[10px] font-black flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                    <CheckCircle2 className="w-3.5 h-3.5" /> SEO Verified Content
                  </span>
                </div>
              </article>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default BlogsPage;
