import React, { useState, useEffect, useMemo } from 'react';
import { 
  ShieldCheck, Lock, Mail, Key, LogOut, Search, 
  Trash2, Phone, MessageCircle, RefreshCw, Clock, 
  Calendar, MapPin, Car, ArrowLeft, Eye, EyeOff,
  LayoutDashboard, FileText, Settings, Layers, ListFilter,
  Plus, X, Image as ImageIcon, Check, Users, Luggage, Wind, Sparkles
} from 'lucide-react';
import { getEnquiries, deleteEnquiry } from '../utils/enquiryStore';
import { getAllFleetCategories, addCustomVehicle, deleteVehicle, deleteCategory } from '../utils/vehicleStore';

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

  // Vehicles Fleet State
  const [fleetCategories, setFleetCategories] = useState(() => getAllFleetCategories());
  const [selectedCatFilter, setSelectedCatFilter] = useState('all');
  const [showAddVehicleModal, setShowAddVehicleModal] = useState(false);

  // New Vehicle Form State
  const [newVehicle, setNewVehicle] = useState({
    name: '',
    categoryTitle: 'Sedan',
    customCategory: '',
    seats: '5 Seats',
    ac: 'Dual AC',
    luggage: '2 Large Bags',
    image: '',
    description: '',
    tagline: 'Comfortable & Reliable Outstation Travel'
  });

  const refreshFleetData = () => {
    setFleetCategories(getAllFleetCategories());
  };

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
    setFleetCategories(getAllFleetCategories());
  };

  // Handle adding new vehicle to fleet
  const handleAddVehicleSubmit = (e) => {
    e.preventDefault();
    if (!newVehicle.name.trim()) return;

    const finalCategory = newVehicle.categoryTitle === 'NEW_CUSTOM'
      ? (newVehicle.customCategory.trim() || 'Custom Fleet')
      : newVehicle.categoryTitle;

    const updatedCategories = addCustomVehicle({
      name: newVehicle.name.trim(),
      categoryTitle: finalCategory,
      tagline: newVehicle.tagline.trim() || 'Comfortable & Premium Outstation Ride',
      seats: newVehicle.seats.trim(),
      ac: newVehicle.ac.trim(),
      luggage: newVehicle.luggage.trim(),
      image: newVehicle.image.trim() || 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
      description: newVehicle.description.trim() || `Clean and spacious ${newVehicle.name} for comfortable South India tours and airport transfers.`
    });

    setFleetCategories(updatedCategories);
    setShowAddVehicleModal(false);

    // Reset form
    setNewVehicle({
      name: '',
      categoryTitle: 'Sedan',
      customCategory: '',
      seats: '5 Seats',
      ac: 'Dual AC',
      luggage: '2 Large Bags',
      image: '',
      description: '',
      tagline: 'Comfortable & Reliable Outstation Travel'
    });
  };

  // Handle image file upload for new vehicle
  const handleVehicleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewVehicle(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Delete Confirmation Modal State
  const [deleteConfirmModal, setDeleteConfirmModal] = useState({
    isOpen: false,
    title: '',
    message: '',
    itemType: '', // 'category' | 'vehicle' | 'enquiry'
    itemId: null,
    catTitle: ''
  });

  // Request Confirmation for Category Delete
  const requestCategoryDelete = (e, catTitle) => {
    if (e) e.stopPropagation();
    setDeleteConfirmModal({
      isOpen: true,
      title: 'Delete Fleet Category?',
      message: `Are you sure you want to delete category "${catTitle}"? All vehicles under this category will also be hidden.`,
      itemType: 'category',
      catTitle: catTitle
    });
  };

  // Request Confirmation for Vehicle Delete
  const requestVehicleDelete = (e, vehicleId, vehicleName) => {
    if (e) e.stopPropagation();
    setDeleteConfirmModal({
      isOpen: true,
      title: 'Delete Vehicle from Fleet?',
      message: `Are you sure you want to delete "${vehicleName || 'this vehicle'}" from your fleet list?`,
      itemType: 'vehicle',
      itemId: vehicleId
    });
  };

  // Request Confirmation for Enquiry Delete
  const requestEnquiryDelete = (e, enquiryId, customerName) => {
    if (e) e.stopPropagation();
    setDeleteConfirmModal({
      isOpen: true,
      title: 'Delete Customer Enquiry?',
      message: `Are you sure you want to delete the booking enquiry for "${customerName || enquiryId}"?`,
      itemType: 'enquiry',
      itemId: enquiryId
    });
  };

  // Execute Confirmed Delete
  const handleConfirmDelete = () => {
    const { itemType, itemId, catTitle } = deleteConfirmModal;
    
    if (itemType === 'category' && catTitle) {
      const updated = deleteCategory(catTitle);
      setFleetCategories([...updated]);
      setSelectedCatFilter('all');
    } else if (itemType === 'vehicle' && itemId) {
      const updated = deleteVehicle(itemId);
      setFleetCategories([...updated]);
    } else if (itemType === 'enquiry' && itemId) {
      const updated = deleteEnquiry(itemId);
      setEnquiries([...updated]);
    }

    setDeleteConfirmModal({ isOpen: false, title: '', message: '', itemType: '', itemId: null, catTitle: '' });
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
                                onClick={(e) => requestEnquiryDelete(e, item.id, item.name)}
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

          {/* TAB 3: VEHICLES FLEET MANAGEMENT */}
          {activeTab === 'vehicles' && (
            <div className="space-y-6">
              
              {/* HEADER BAR */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <Car className="w-5 h-5 text-brand-red" />
                    <span>Vehicle Fleet Management</span>
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Add new vehicles, create custom categories, view specs & delete vehicles.
                  </p>
                </div>

                <button
                  onClick={() => setShowAddVehicleModal(true)}
                  className="px-4 py-2.5 bg-brand-red hover:bg-brand-darkRed text-white text-xs font-extrabold rounded-xl shadow-sm hover:shadow transition-all inline-flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Add New Vehicle</span>
                </button>
              </div>

              {/* CATEGORY FILTER TABS */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                <button
                  onClick={() => setSelectedCatFilter('all')}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCatFilter === 'all'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  All Vehicles ({fleetCategories.reduce((acc, c) => acc + c.vehicles.length, 0)})
                </button>

                {fleetCategories.map((cat) => (
                  <div
                    key={cat.id}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all border ${
                      selectedCatFilter === cat.title
                        ? 'bg-brand-red text-white border-brand-red shadow-xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedCatFilter(cat.title)}
                      className="cursor-pointer"
                    >
                      {cat.title} ({cat.vehicles.length})
                    </button>

                    <button
                      type="button"
                      onClick={(e) => requestCategoryDelete(e, cat.title)}
                      className={`p-1 rounded-lg transition-colors cursor-pointer ${
                        selectedCatFilter === cat.title
                          ? 'hover:bg-white/20 text-white/80 hover:text-white'
                          : 'hover:bg-slate-200 text-slate-400 hover:text-red-600'
                      }`}
                      title={`Delete ${cat.title} Category`}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* VEHICLES GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {fleetCategories
                  .filter(cat => selectedCatFilter === 'all' || cat.title === selectedCatFilter)
                  .flatMap(cat => cat.vehicles.map(v => ({ ...v, categoryName: cat.title })))
                  .map((v) => (
                    <div key={v.id} className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group">
                      
                      {/* IMAGE THUMBNAIL */}
                      <div className="relative h-44 bg-slate-100 overflow-hidden flex items-center justify-center">
                        <img
                          src={v.image}
                          alt={v.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800';
                          }}
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-slate-900/80 backdrop-blur-md text-white shadow-xs">
                            {v.categoryName}
                          </span>
                        </div>

                        {/* DELETE BUTTON */}
                        <button
                          type="button"
                          onClick={(e) => requestVehicleDelete(e, v.id, v.name)}
                          className="absolute top-3 right-3 p-2 rounded-xl bg-white/90 hover:bg-brand-red text-slate-700 hover:text-white transition-colors shadow-sm cursor-pointer"
                          title="Remove Vehicle"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* CARD DETAILS */}
                      <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-sm font-black text-slate-900 tracking-tight">{v.name}</h4>
                          <p className="text-[11px] text-slate-500 font-medium line-clamp-1 mt-0.5">
                            {v.tagline || v.description}
                          </p>
                        </div>

                        {/* SPECS PILLS */}
                        <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-extrabold">
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg flex items-center gap-1">
                            <Users className="w-3 h-3 text-brand-red" />
                            <span>{v.specs?.seats || '5 Seats'}</span>
                          </span>
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg flex items-center gap-1">
                            <Wind className="w-3 h-3 text-sky-500" />
                            <span>{v.specs?.ac || 'Dual AC'}</span>
                          </span>
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg flex items-center gap-1">
                            <Luggage className="w-3 h-3 text-amber-500" />
                            <span>{v.specs?.luggage || '2 Bags'}</span>
                          </span>
                        </div>
                      </div>

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

      {/* ADD NEW VEHICLE MODAL */}
      {showAddVehicleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-smooth-enter overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl border border-slate-100 relative my-8 space-y-4">
            
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center">
                  <Plus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">Add New Vehicle to Fleet</h3>
                  <p className="text-[11px] text-slate-500 font-medium">Fill in vehicle specs, select or create category & upload photo.</p>
                </div>
              </div>
              <button
                onClick={() => setShowAddVehicleModal(false)}
                className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddVehicleSubmit} className="space-y-3.5 text-xs">
              
              {/* VEHICLE NAME */}
              <div className="space-y-1">
                <label className="text-slate-700 font-extrabold block">Vehicle Model Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Toyota Innova Hycross, Force Urbania 17 Seater"
                  value={newVehicle.name}
                  onChange={(e) => setNewVehicle({ ...newVehicle, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-red focus:bg-white focus:outline-none text-xs transition-colors"
                />
              </div>

              {/* CATEGORY SELECTOR */}
              <div className="space-y-1">
                <label className="text-slate-700 font-extrabold block">Category *</label>
                <select
                  value={newVehicle.categoryTitle}
                  onChange={(e) => setNewVehicle({ ...newVehicle, categoryTitle: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-red focus:bg-white focus:outline-none text-xs transition-colors cursor-pointer"
                >
                  {fleetCategories.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                  <option value="NEW_CUSTOM">+ Create New Custom Category...</option>
                </select>
              </div>

              {/* NEW CUSTOM CATEGORY INPUT */}
              {newVehicle.categoryTitle === 'NEW_CUSTOM' && (
                <div className="space-y-1 animate-smooth-enter">
                  <label className="text-brand-red font-extrabold block">New Category Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Luxury Vans, Electric Fleets, EV Cabs"
                    value={newVehicle.customCategory}
                    onChange={(e) => setNewVehicle({ ...newVehicle, customCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-brand-red focus:bg-white focus:outline-none text-xs transition-colors"
                  />
                </div>
              )}

              {/* SEATS, AC, LUGGAGE */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-700 font-bold block">Seating Capacity</label>
                  <input
                    type="text"
                    placeholder="e.g. 5 Seats, 7 Seats"
                    value={newVehicle.seats}
                    onChange={(e) => setNewVehicle({ ...newVehicle, seats: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-red text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700 font-bold block">AC Specs</label>
                  <input
                    type="text"
                    placeholder="e.g. Dual AC"
                    value={newVehicle.ac}
                    onChange={(e) => setNewVehicle({ ...newVehicle, ac: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-red text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700 font-bold block">Luggage Space</label>
                  <input
                    type="text"
                    placeholder="e.g. 3 Large Bags"
                    value={newVehicle.luggage}
                    onChange={(e) => setNewVehicle({ ...newVehicle, luggage: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-red text-xs"
                  />
                </div>
              </div>

              {/* IMAGE SELECTION */}
              <div className="space-y-1.5">
                <label className="text-slate-700 font-extrabold block">Vehicle Image (File or Image URL)</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleVehicleImageUpload}
                    className="w-full text-slate-500 file:mr-2 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 cursor-pointer"
                  />
                  <input
                    type="url"
                    placeholder="Or paste Image URL (https://...)"
                    value={newVehicle.image}
                    onChange={(e) => setNewVehicle({ ...newVehicle, image: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 text-xs"
                  />
                </div>

                {/* IMAGE PREVIEW */}
                {newVehicle.image && (
                  <div className="relative h-28 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 mt-2">
                    <img src={newVehicle.image} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              {/* SHORT TAGLINE / DESCRIPTION */}
              <div className="space-y-1">
                <label className="text-slate-700 font-bold block">Vehicle Summary / Features</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Clean & spacious luxury vehicle with pushback seats and 24/7 GPS tracking."
                  value={newVehicle.description}
                  onChange={(e) => setNewVehicle({ ...newVehicle, description: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-red text-xs"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddVehicleModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white font-extrabold shadow-sm transition-all inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  <span>+ Save & Add Vehicle to Fleet</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}
      {/* DELETE CONFIRMATION POPUP MODAL */}
      {deleteConfirmModal.isOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-smooth-enter"
          onClick={() => setDeleteConfirmModal({ isOpen: false, title: '', message: '', itemType: '', itemId: null, catTitle: '' })}
        >
          <div 
            className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-slate-100 space-y-4 text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* TRASH WARNING CIRCLE */}
            <div className="w-14 h-14 bg-red-100 text-brand-red rounded-full flex items-center justify-center mx-auto shadow-xs">
              <Trash2 className="w-7 h-7 stroke-[2.5]" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg font-black text-slate-900 tracking-tight">
                {deleteConfirmModal.title}
              </h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {deleteConfirmModal.message}
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="grid grid-cols-2 gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setDeleteConfirmModal({ isOpen: false, title: '', message: '', itemType: '', itemId: null, catTitle: '' })}
                className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleConfirmDelete}
                className="py-2.5 px-4 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white text-xs font-extrabold shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Yes, Delete
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default AdminPage;
