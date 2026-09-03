import React from 'react';
import { ArrowLeft, Calendar, User, Clock, ArrowRight, BookOpen, MapPin, Sparkles } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: "Complete Guide to South India Temple Tour Taxi Routes",
    category: "Temple Tours",
    date: "September 01, 2026",
    readTime: "5 min read",
    author: "Bala's Travels Desk",
    excerpt: "Planning a pilgrimage tour across Madurai, Rameshwaram, Kanyakumari and Tanjore? Discover optimal travel routes and driver tips for a stress-free journey.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Top 10 Tips for Renting Outstation Cabs in Chennai & Bangalore",
    category: "Travel Guide",
    date: "August 28, 2026",
    readTime: "4 min read",
    author: "Travel Dispatch Team",
    excerpt: "How to choose between Sedan, SUV and Tempo Traveller for inter-state highway travel. Toll charges, driver bata, and safety checkpoints explained.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Chennai Airport Pickup & Drop: Avoiding Delays & Surcharges",
    category: "Airport Travel",
    date: "August 22, 2026",
    readTime: "3 min read",
    author: "Operations Manager",
    excerpt: "Seamless 24/7 airport transfer services across Chennai International Airport (MAA) and Kempegowda Airport (BLR) with zero hidden fees.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
  }
];

export const BlogsPage = ({ onBackToHome }) => {
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

        {/* FEATURED ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* ARTICLE IMAGE */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-brand-red text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* ARTICLE CONTENT */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-semibold">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-slate-900 group-hover:text-brand-red transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 font-medium">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500">
                    By {post.author}
                  </span>
                  <span className="text-brand-red text-xs font-black flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogsPage;
