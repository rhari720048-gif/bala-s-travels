import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Phone, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../utils/whatsapp';

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋 I am Bala's Travel AI Assistant. How can I help you today?", isBot: true }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = (e) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = { id: Date.now(), text: inputText.trim(), isBot: false };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI processing delay
    setTimeout(() => {
      const lowerInput = userMessage.text.toLowerCase();
      let botResponse = "";
      let showContactButtons = false;

      // Rule-based keyword matching
      if (
        lowerInput.includes("rate") ||
        lowerInput.includes("price") ||
        lowerInput.includes("cost") ||
        lowerInput.includes("amount") ||
        lowerInput.includes("charge") ||
        lowerInput.includes("quote") ||
        lowerInput.includes("how much")
      ) {
        botResponse = `For exact pricing and the best quotes, please contact us directly. Our team will give you the best deal! 👇`;
        showContactButtons = true;
      } else if (
        lowerInput.includes("service") ||
        lowerInput.includes("what do you do") ||
        lowerInput.includes("offer") ||
        lowerInput.includes("booking")
      ) {
        botResponse = "We offer a variety of services: \n🚗 Local City Drops \n🛣️ Outstation Trips \n✈️ Airport Transfers \n🧑‍✈️ 24/7 Acting Drivers \nCan I help you with booking one of these?";
      } else if (
        lowerInput.includes("hello") ||
        lowerInput.includes("hi") ||
        lowerInput.includes("hey")
      ) {
        botResponse = "Hello! Welcome to Bala's Travels. Are you looking for a cab, airport drop, or an acting driver?";
      } else {
        botResponse = "I can help you with details about our fleet and services. If you have specific pricing questions or need immediate booking, please call our 24/7 desk!";
        showContactButtons = true;
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: botResponse, isBot: true, showContactButtons }
      ]);
      setIsTyping(false);
    }, 1200); // 1.2s delay for realism
  };

  const handleCall = () => {
    window.open(`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hi Bala's Travels, I need more details.`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-floating border border-slate-200 overflow-hidden flex flex-col animate-smooth-enter origin-bottom-right transition-all duration-300">
          
          {/* HEADER */}
          <div className="bg-slate-950 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-tight">AI Assistant</h3>
                <p className="text-[10px] text-slate-300 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-slate-300" />
            </button>
          </div>

          {/* MESSAGES AREA */}
          <div className="p-4 h-80 overflow-y-auto bg-slate-50 space-y-4 flex flex-col">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                  msg.isBot 
                    ? "bg-white text-slate-800 border border-slate-200 shadow-sm rounded-tl-none whitespace-pre-line" 
                    : "bg-brand-red text-white shadow-md rounded-tr-none"
                }`}>
                  {msg.text}
                  
                  {msg.showContactButtons && (
                    <div className="mt-3 flex flex-col gap-2">
                      <button 
                        onClick={handleCall}
                        className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        Call {PHONE_NUMBER}
                      </button>
                      <button 
                        onClick={handleWhatsApp}
                        className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        Chat on WhatsApp
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* INPUT AREA */}
          <div className="p-3 bg-white border-t border-slate-100">
            <form onSubmit={handleSend} className="flex items-center gap-2">
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-full px-4 py-2.5 focus:outline-none focus:border-brand-red transition-colors"
              />
              <button 
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="w-10 h-10 shrink-0 bg-brand-red text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-darkRed transition-colors shadow-sm cursor-pointer"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>
          </div>
          
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-floating transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer ${
          isOpen ? 'bg-slate-900 text-white' : 'bg-brand-red text-white'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
      
      {/* PULSING BADGE WHEN CLOSED */}
      {!isOpen && (
        <span className="absolute top-0 right-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-darkRed border-2 border-white"></span>
        </span>
      )}
    </div>
  );
};

export default AIChatbot;
