
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, X, Bot, Sparkles } from 'lucide-react';

const BeautyConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: "Hello! I'm your Royal Beauty assistant. How can I help you today? Ask me about hair care, skin tips, or our services." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "You are an AI beauty consultant for 'Raj Rani® Ladies Beauty Parlour' in Muzaffarpur, Bihar. The business head is Mrs. Sananta Kumari. We have been the 1st choice of ladies since 2007. We are a Trade Mark Registered organization. Provide professional yet warm beauty advice. Mention our '5+1 Free' scheme and '50% Yearly Discount' if relevant. Warning: We have no authorised branches elsewhere. Keep responses helpful and under 100 words.",
          temperature: 0.7,
        },
      });

      const botText = response.text || "I'm sorry, I'm having trouble connecting right now. Please call us at 8539997115!";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm currently resting. Please call our salon directly for instant support!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Chat Bubble Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-rose-700 hover:scale-110 transition-all group"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} className="group-hover:animate-bounce" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] max-w-[90vw] h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-stone-100 animate-in fade-in slide-in-from-bottom-10 duration-300">
          <div className="bg-stone-900 p-4 text-white flex items-center space-x-3">
            <div className="bg-rose-600 p-2 rounded-xl">
              <Bot size={20} />
            </div>
            <div>
              <p className="font-bold text-sm">Beauty Consultant</p>
              <div className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest">Always Online</p>
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto bg-stone-50 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-rose-600 text-white rounded-tr-none shadow-md' 
                    : 'bg-white text-stone-800 border border-stone-200 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-stone-200">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-blink"></div>
                    <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-blink delay-75"></div>
                    <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-blink delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-stone-100">
            <div className="flex items-center space-x-2 bg-stone-50 rounded-xl px-4 py-2 border border-stone-200 focus-within:ring-2 focus-within:ring-rose-500 transition-all">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about skin glow..."
                className="flex-grow bg-transparent text-sm focus:outline-none"
              />
              <button onClick={handleSendMessage} className="text-rose-600 hover:scale-110 transition-transform">
                <Send size={18} />
              </button>
            </div>
            <p className="text-[8px] text-stone-400 text-center mt-3 uppercase tracking-widest font-bold">Powered by Raj Rani® AI</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeautyConsultant;
