import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Lock, Mail, Key, LogOut, Search, 
  Trash2, Phone, MessageCircle, RefreshCw, Clock, 
  Calendar, MapPin, Car, ArrowLeft, Eye, EyeOff
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

  // Dashboard state
  const [enquiries, setEnquiries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Check login session on mount
  useEffect(() => {
    const session = localStorage.getItem('balas_admin_session');
    if (session === 'active') {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch enquiries when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      setEnquiries(getEnquiries());
    }
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
    setIsAuthenticated(false);
    localStorage.removeItem('balas_admin_session');
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this enquiry record?')) {
      const updated = deleteEnquiry(id);
      setEnquiries([...updated]);
    }
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
  // LOGIN SCREEN (PREMIUM WHITE THEME)
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
  // ADMIN DASHBOARD SCREEN
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      
      {/* ADMIN TOP NAVBAR */}
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
            <button
              onClick={onBackToHome}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>View Site</span>
            </button>

            <div className="h-4 w-px bg-slate-800 hidden sm:block" />

            <span className="text-xs text-slate-400 font-medium hidden md:inline-block">
              Logged in as <strong className="text-white">{ADMIN_EMAIL}</strong>
            </span>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/80 hover:bg-brand-red text-red-300 hover:text-white text-xs font-extrabold transition-all border border-red-800/80 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>

        </div>
      </header>

      {/* DASHBOARD BODY */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* STATS OVERVIEW HEADER CARDS */}
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
                Live Enquiries Connected
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
                          onClick={() => handleDelete(item.id)}
                          className="p-1.5 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors inline-flex items-center"
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

      </main>

    </div>
  );
};

export default AdminPage;
