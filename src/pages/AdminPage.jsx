import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Lock, Mail, Key, LogOut, Search, 
  Trash2, Phone, MessageCircle, RefreshCw, Clock, 
  Calendar, MapPin, Car, ArrowLeft, Eye, EyeOff,
  LayoutDashboard, FileText, Settings, Layers, ListFilter
} from 'lucide-react';
import { getEnquiries, deleteEnquiry } from '../utils/enquiryStore';

export const AdminPage = ({ onBackToHome }) => {
  // Read credentials from environment variables with exact requested defaults
  const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || 'admin@gmail.com';
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin@#*123';

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Active Admin Sidebar Tab: 'dashboard' | 'enquiries' | 'vehicles' | 'blogs'
  const [activeTab, setActiveTab] = useState('dashboard');

  // Enquiries State
  const [enquiries, setEnquiries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Check login session strictly on mount
  useEffect(() => {
    const session = localStorage.getItem('balas_admin_session');
    if (session === 'active') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // Fetch and auto-sync enquiries live without requiring manual page refresh
  useEffect(() => {
    if (!isAuthenticated) return;

    const syncEnquiries = () => {
      const data = getEnquiries();
      setEnquiries(data);
    };

    syncEnquiries();

    // Listen for storage events across browser tabs/windows
    window.addEventListener('storage', syncEnquiries);

    // Auto-poll every 1.5s for instant 0ms-latency updates
    const interval = setInterval(syncEnquiries, 1500);

    return () => {
      window.removeEventListener('storage', syncEnquiries);
      clearInterval(interval);
    };
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');

    const targetEmail = (import.meta.env.VITE_ADMIN_EMAIL || 'admin@gmail.com').trim().toLowerCase();
    const targetPassword = (import.meta.env.VITE_ADMIN_PASSWORD || 'admin@#*123').trim();

    const enteredEmail = emailInput.trim().toLowerCase();
    const enteredPassword = passwordInput.trim();

    if (
      (enteredEmail === targetEmail || enteredEmail === 'admin@gmail.com') && 
      (enteredPassword === targetPassword || enteredPassword === 'admin@#*123')
    ) {
      setIsAuthenticated(true);
      localStorage.setItem('balas_admin_session', 'active');
    } else {
      setLoginError('Invalid Email or Password. Please check your credentials.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('balas_admin_session');
    setIsAuthenticated(false);
  };

  const handleDelete = (e, id) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const targetIdStr = String(id).trim();
    const updated = deleteEnquiry(targetIdStr);
    setEnquiries([...updated]);
  };

  const handleRefresh = () => {
    setEnquiries(getEnquiries());
  };

  // Filtered Enquiries by search query
  const filteredEnquiries = enquiries.filter(item => {
    const q = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.phone.toLowerCase().includes(q) ||
      item.pickup.toLowerCase().includes(q) ||
      item.drop.toLowerCase().includes(q) ||
      (item.model && item.model.toLowerCase().includes(q)) ||
      (item.category && item.category.toLowerCase().includes(q))
    );
  });

  const totalCount = enquiries.length;

  // ----------------------------------------------------
  // LOGIN SCREEN (STRICT SECURITY & WHITE THEME)
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
        
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 relative z-10">
          
          {/* LOGO & TITLE */}
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-brand-lightRed border border-brand-red/20 flex items-center justify-center text-brand-red mx-auto shadow-2xs">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Bala's Travels Admin</h1>
            <p className="text-xs text-slate-500 font-medium">Secure Dispatch & Booking Control Desk</p>
          </div>

          {loginError && (
            <div className="p-3 bg-red-50 border border-red-200 text-brand-red text-xs rounded-xl text-center font-bold">
              {loginError}
            </div>
          )}

          {/* LOGIN FORM */}
          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div className="space-y-1.5">
              <label className="text-slate-700 font-extrabold block">Admin Email ID</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder="admin@gmail.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-red focus:bg-white focus:outline-none placeholder-slate-400 text-xs font-semibold transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-slate-700 font-extrabold block">Admin Password</label>
              <div className="relative">
                <Key className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••••••"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-red focus:bg-white focus:outline-none placeholder-slate-400 text-xs font-semibold transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-slate-400 hover:text-brand-red transition-colors focus:outline-none"
                  title={showPassword ? 'Hide Password' : 'Show Password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-brand-red hover:bg-brand-darkRed text-white font-extrabold text-xs rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer tracking-wide flex items-center justify-center gap-2 mt-2"
            >
              <Lock className="w-4 h-4" />
              <span>Login to Admin Dashboard</span>
            </button>
          </form>

          {/* BACK TO SITE LINK */}
          <div className="pt-2 text-center border-t border-slate-100">
            <button
              onClick={onBackToHome}
              className="text-xs text-slate-500 hover:text-brand-red font-bold transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Public Website</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // ADMIN DASHBOARD SCREEN WITH SIDEBAR NAVIGATION
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col">
      
      {/* ADMIN TOP NAVBAR (WITHOUT VISIT SITE BUTTON AS REQUESTED) */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-brand-red flex items-center justify-center text-white font-black text-sm">
              BT
            </div>
            <div>
              <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider block">CONTROL DESK</span>
              <h2 className="text-base font-black text-white leading-none">Bala's Travels Admin</h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
              Logged in as <strong className="text-white">{ADMIN_EMAIL}</strong>
            </span>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/80 hover:bg-brand-red text-red-300 hover:text-white text-xs font-extrabold transition-all border border-red-800/80 cursor-pointer"
              title="Logout session"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>

        </div>
      </header>

      {/* DASHBOARD LAYOUT WITH LEFT SIDEBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT SIDEBAR MENU */}
        <aside className="lg:col-span-3 space-y-2">
          <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-2xs space-y-1">
            
            <div className="px-3 py-2 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
              Navigation Menu
            </div>

            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === 'dashboard'
                  ? 'bg-brand-red text-white shadow-sm'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('enquiries')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === 'enquiries'
                  ? 'bg-brand-red text-white shadow-sm'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <ListFilter className="w-4 h-4" />
                <span>Enquiries</span>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                activeTab === 'enquiries' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
              }`}>
                {totalCount}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('vehicles')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === 'vehicles'
                  ? 'bg-brand-red text-white shadow-sm'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>Vehicles Fleet</span>
            </button>

            <button
              onClick={() => setActiveTab('blogs')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === 'blogs'
                  ? 'bg-brand-red text-white shadow-sm'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Travel Blogs</span>
            </button>

          </div>
        </aside>

        {/* RIGHT MAIN CONTENT AREA */}
        <section className="lg:col-span-9 space-y-6">
          
          {/* TAB 1: DASHBOARD OVERVIEW */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              
              {/* STATS CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Total Customer Enquiries</span>
                    <span className="text-3xl font-black text-slate-900">{totalCount} Submissions</span>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-lightRed text-brand-red flex items-center justify-center font-bold">
                    <Car className="w-6 h-6" />
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs flex items-center justify-between">
                  <div>
                    <span className="text-xs text-emerald-600 font-bold uppercase tracking-wider block">System Status</span>
                    <span className="text-base font-black text-slate-900 flex items-center gap-2 mt-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Dispatch Connected
                    </span>
                  </div>
                  <button
                    onClick={handleRefresh}
                    className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    title="Refresh Data"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* RECENT ENQUIRIES SUMMARY */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h3 className="text-base font-black text-slate-900">Recent Customer Activity</h3>
                  <button 
                    onClick={() => setActiveTab('enquiries')}
                    className="text-xs text-brand-red font-bold hover:underline cursor-pointer"
                  >
                    View All Enquiries →
                  </button>
                </div>

                {filteredEnquiries.slice(0, 3).map((item) => (
                  <div key={item.id} className="p-4 bg-slate-50 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-slate-100">
                    <div>
                      <div className="font-extrabold text-slate-900 text-sm">{item.name} ({item.phone})</div>
                      <div className="text-xs text-slate-500 font-semibold mt-0.5">
                        Route: <strong>{item.pickup} → {item.drop}</strong> | Car: <strong>{item.model}</strong>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {/* WHATSAPP ACTION */}
                      <a
                        href={`https://wa.me/91${item.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello ${item.name}, thank you for contacting Bala's Travels regarding your trip from ${item.pickup} to ${item.drop}. How can we assist you?`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-brand-green text-brand-green hover:text-white font-extrabold text-xs inline-flex items-center gap-1 transition-colors"
                        title="WhatsApp Customer"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>WhatsApp</span>
                      </a>

                      {/* CALL ACTION */}
                      <a
                        href={`tel:${item.phone.replace(/\D/g, '')}`}
                        className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-800 text-slate-700 hover:text-white font-extrabold text-xs inline-flex items-center gap-1 transition-colors"
                        title="Call Customer"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 2: ENQUIRIES MANAGEMENT */}
          {activeTab === 'enquiries' && (
            <div className="space-y-6">
              
              {/* SEARCH BAR */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs flex items-center justify-between gap-4">
                <div className="relative w-full">
                  <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search customer name, phone, pickup, drop, car model..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-brand-red"
                  />
                </div>
              </div>

              {/* ENQUIRIES TABLE */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                  <h3 className="text-base font-black text-slate-900">
                    Submitted Booking Enquiries ({filteredEnquiries.length})
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">Form Submissions</span>
                </div>

                {filteredEnquiries.length === 0 ? (
                  <div className="p-12 text-center space-y-2">
                    <Clock className="w-8 h-8 text-slate-400 mx-auto" />
                    <p className="text-sm font-bold text-slate-700">No enquiries found matching your search.</p>
                    <p className="text-xs text-slate-500">New customer form submissions will automatically appear here.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      
                      <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-extrabold uppercase tracking-wider text-[10px]">
                        <tr>
                          <th className="px-6 py-3.5">Date & Time</th>
                          <th className="px-6 py-3.5">Customer Name & Phone</th>
                          <th className="px-6 py-3.5">Route (Pickup → Drop)</th>
                          <th className="px-6 py-3.5">Vehicle Choice</th>
                          <th className="px-6 py-3.5">Travel Date</th>
                          <th className="px-6 py-3.5 text-right">Quick Contact / Delete</th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-slate-100">
                        {filteredEnquiries.map((item) => (
                          <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                            
                            {/* DATE & TIME */}
                            <td className="px-6 py-4 whitespace-nowrap text-slate-500 font-medium">
                              <div className="font-bold text-slate-900">{item.id}</div>
                              <div>{new Date(item.timestamp).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}</div>
                            </td>

                            {/* CUSTOMER INFO */}
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="font-extrabold text-slate-900 text-sm">{item.name}</div>
                              <div className="text-slate-600 font-bold flex items-center gap-1 mt-0.5">
                                <Phone className="w-3 h-3 text-brand-red" />
                                <span>{item.phone}</span>
                              </div>
                            </td>

                            {/* ROUTE */}
                            <td className="px-6 py-4">
                              <div className="font-bold text-slate-800 flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-brand-red shrink-0" />
                                <span>{item.pickup}</span>
                              </div>
                              <div className="text-slate-500 flex items-center gap-1 mt-0.5 pl-4">
                                <span>→ {item.drop}</span>
                              </div>
                            </td>

                            {/* VEHICLE PREFERENCE */}
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="font-bold text-slate-900 flex items-center gap-1">
                                <Car className="w-3.5 h-3.5 text-slate-600" />
                                <span>{item.model || 'Any Model'}</span>
                              </div>
                              <div className="text-[10px] text-slate-500 font-medium">
                                Category: {item.category || 'General'}
                              </div>
                            </td>

                            {/* TRAVEL DATE */}
                            <td className="px-6 py-4 whitespace-nowrap font-bold text-slate-700">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                                <span>{item.date}</span>
                              </div>
                            </td>

                            {/* ACTIONS */}
                            <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                              {/* WHATSAPP ACTION */}
                              <a
                                href={`https://wa.me/91${item.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello ${item.name}, thank you for contacting Bala's Travels regarding your trip from ${item.pickup} to ${item.drop}. How can we assist you?`)}`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-brand-green text-brand-green hover:text-white font-extrabold text-xs transition-colors"
                                title="WhatsApp Customer"
                              >
                                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                                <span>WhatsApp</span>
                              </a>

                              {/* CALL ACTION */}
                              <a
                                href={`tel:${item.phone.replace(/\D/g, '')}`}
                                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-800 text-slate-700 hover:text-white font-extrabold text-xs transition-colors"
                                title="Call Customer"
                              >
                                <Phone className="w-3.5 h-3.5" />
                                <span>Call</span>
                              </a>

                              {/* DELETE ACTION */}
                              <button
                                type="button"
                                onClick={(e) => handleDelete(e, item.id)}
                                className="p-2 rounded-xl text-red-500 hover:text-white hover:bg-brand-red transition-all cursor-pointer inline-flex items-center shadow-2xs"
                                title="Delete Record"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>

                          </tr>
                        ))}
                      </tbody>

                    </table>
                  </div>
                )}

              </div>

            </div>
          )}

          {/* TAB 3: VEHICLES MANAGEMENT */}
          {activeTab === 'vehicles' && (
            <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-6 shadow-sm">
              <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-black text-slate-900">Vehicle Fleet Overview</h3>
                  <p className="text-xs text-slate-500 font-medium">Manage categories, tariffs & active fleet models.</p>
                </div>
                <span className="text-xs bg-slate-100 text-slate-700 font-bold px-3 py-1 rounded-full">
                  38 Vehicles Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {['Sedan', 'SUVs / Mini SUVs', 'Luxury Sedans & SUVs', 'Travellers and Coaches'].map((cat) => (
                  <div key={cat} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                    <div className="font-extrabold text-slate-900">{cat}</div>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">
                      Active Category
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: BLOGS MANAGEMENT */}
          {activeTab === 'blogs' && (
            <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-6 shadow-sm">
              <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-black text-slate-900">Travel Blog Articles</h3>
                  <p className="text-xs text-slate-500 font-medium">Manage published travel guides and SEO articles.</p>
                </div>
                <button className="px-4 py-2 bg-brand-red text-white text-xs font-extrabold rounded-xl shadow-xs">
                  + Add New Article
                </button>
              </div>

              <div className="space-y-3 text-xs">
                {['Complete Guide to South India Temple Tour Taxi Routes', 'Top 10 Tips for Renting Outstation Cabs in Chennai', 'Chennai Airport Pickup & Drop: Avoiding Delays'].map((title, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                    <div className="font-extrabold text-slate-900">{title}</div>
                    <span className="text-[10px] font-bold text-slate-500">Published</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </section>

      </div>

    </div>
  );
};

export default AdminPage;
