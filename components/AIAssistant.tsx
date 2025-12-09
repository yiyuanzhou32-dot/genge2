import React, { useState, useRef, useEffect } from 'react';
import { Icon } from './Icon';
import { getAIResponse } from '../services/geminiService';
import { ChatMessage, AIToolMode } from '../types';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<AIToolMode>('chat');
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '你好！我是您的林途AI助手。我可以帮您搜索资料、翻译学术文献或总结政策文件。', timestamp: Date.now() }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const responseText = await getAIResponse(userMsg.text, mode);

    const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
    setMessages(prev => [...prev, aiMsg]);
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${isOpen ? 'bg-stone-800 rotate-90 scale-90' : 'bg-emerald-600 hover:bg-emerald-700 hover:scale-105'}`}
      >
        {isOpen ? <Icon name="X" className="text-white" /> : <Icon name="MessageSquare" className="text-white" />}
      </button>

      {/* Panel */}
      <div 
        className={`fixed bottom-24 right-6 w-[90vw] md:w-[400px] bg-white rounded-2xl shadow-2xl border border-stone-200 z-40 overflow-hidden transition-all duration-300 origin-bottom-right transform ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10 pointer-events-none'}`}
        style={{ height: '600px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-emerald-600 p-4 text-white">
          <div className="flex items-center gap-2 mb-3">
             <Icon name="Search" size={18} />
             <h3 className="font-bold">LinTu AI Core</h3>
          </div>
          
          {/* Mode Tabs */}
          <div className="flex bg-black/20 p-1 rounded-lg">
            <button 
              onClick={() => setMode('chat')}
              className={`flex-1 text-xs py-1.5 rounded-md flex items-center justify-center gap-1 transition-colors ${mode === 'chat' ? 'bg-white text-emerald-900 font-bold shadow-sm' : 'text-emerald-100 hover:bg-white/10'}`}
            >
              <Icon name="MessageSquare" size={12} /> 问答
            </button>
            <button 
              onClick={() => setMode('translate')}
              className={`flex-1 text-xs py-1.5 rounded-md flex items-center justify-center gap-1 transition-colors ${mode === 'translate' ? 'bg-white text-emerald-900 font-bold shadow-sm' : 'text-emerald-100 hover:bg-white/10'}`}
            >
              <Icon name="Languages" size={12} /> 翻译
            </button>
            <button 
              onClick={() => setMode('summarize')}
              className={`flex-1 text-xs py-1.5 rounded-md flex items-center justify-center gap-1 transition-colors ${mode === 'summarize' ? 'bg-white text-emerald-900 font-bold shadow-sm' : 'text-emerald-100 hover:bg-white/10'}`}
            >
              <Icon name="FileOutput" size={12} /> 总结
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-stone-50 h-[calc(100%-130px)] space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-emerald-600 text-white rounded-tr-none' 
                    : 'bg-white border border-stone-200 text-stone-800 rounded-tl-none shadow-sm'
                }`}
              >
                {msg.text.split('\n').map((line, i) => (
                   <React.Fragment key={i}>{line}<br/></React.Fragment>
                ))}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white border border-stone-200 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                <Icon name="Loader2" className="animate-spin text-emerald-600" size={16} />
                <span className="text-xs text-stone-500">AI正在思考...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-stone-200 p-3">
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={mode === 'translate' ? "输入需要翻译的文本..." : mode === 'summarize' ? "粘贴需要总结的文章..." : "输入您的问题..."}
              className="w-full bg-stone-100 border-none rounded-xl pl-4 pr-12 py-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white resize-none h-12 max-h-24 scrollbar-hide"
            />
            <button 
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="absolute right-2 top-2 p-1.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Icon name="ArrowRight" size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
