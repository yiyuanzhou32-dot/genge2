import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { Icon } from './components/Icon';
import { CATEGORIES, LINKS } from './data';
import { CategoryType, LinkItem } from './types';

function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryType | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLinks = useMemo(() => {
    return LINKS.filter(link => {
      const matchesCategory = activeCategory === 'ALL' || link.category === activeCategory;
      const matchesSearch = 
        link.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        link.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Group links by category when showing ALL
  const groupedLinks = useMemo<Record<string, LinkItem[]>>(() => {
    if (activeCategory !== 'ALL') {
      return { [activeCategory]: filteredLinks };
    }
    
    const groups: Record<string, LinkItem[]> = {};
    CATEGORIES.forEach(cat => {
      const catLinks = filteredLinks.filter(l => l.category === cat.id);
      if (catLinks.length > 0) {
        groups[cat.id] = catLinks;
      }
    });
    return groups;
  }, [activeCategory, filteredLinks]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            学术与实践的<span className="text-emerald-700">森林之路</span>
          </h2>
          <p className="text-stone-500 mb-8">
            整合国家公园、文旅政策、核心期刊与行业资讯，为您提供专业的导航服务。
          </p>
          
          <div className="relative max-w-lg mx-auto">
            <input 
              type="text"
              placeholder="搜索站点、关键词或期刊..."
              className="w-full pl-12 pr-4 py-4 rounded-full border border-stone-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Icon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400" />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button 
            onClick={() => setActiveCategory('ALL')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === 'ALL' ? 'bg-stone-800 text-white shadow-md' : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'}`}
          >
            全部资源
          </button>
          {CATEGORIES.map(cat => (
            <button 
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat.id ? 'bg-emerald-700 text-white shadow-md' : 'bg-white text-stone-600 border border-stone-200 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="space-y-12">
          {Object.keys(groupedLinks).length === 0 && (
             <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-stone-300">
               <div className="inline-block p-4 bg-stone-100 rounded-full mb-4">
                 <Icon name="Search" className="text-stone-400" size={32} />
               </div>
               <p className="text-stone-500 text-lg">未找到相关资源</p>
               <button onClick={() => setSearchQuery('')} className="mt-4 text-emerald-600 font-medium hover:underline">清除搜索</button>
             </div>
          )}

          {Object.entries(groupedLinks).map(([catId, links]) => {
            const categoryInfo = CATEGORIES.find(c => c.id === catId);
            return (
              <section key={catId} className="animate-fade-in-up">
                {activeCategory === 'ALL' && (
                  <div className="flex items-center gap-3 mb-6 pb-2 border-b border-stone-200">
                     <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
                     <h3 className="text-xl font-bold text-stone-800">{categoryInfo?.label}</h3>
                     <span className="text-xs text-stone-400 font-normal ml-auto md:ml-2">{categoryInfo?.description}</span>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {links.map(link => (
                    <a 
                      key={link.id} 
                      href={link.url}
                      className="group block bg-white rounded-xl border border-stone-100 p-5 shadow-sm hover:shadow-md hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Decorative background gradient on hover */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150 group-hover:bg-emerald-100 z-0"></div>

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div className={`p-2.5 rounded-lg ${
                            link.category === CategoryType.NATIONAL_PARKS ? 'bg-green-100 text-green-700' :
                            link.category === CategoryType.POLICY ? 'bg-blue-100 text-blue-700' :
                            link.category === CategoryType.ACADEMIC ? 'bg-purple-100 text-purple-700' :
                            'bg-orange-100 text-orange-700'
                          }`}>
                            <Icon name={link.iconName} size={20} />
                          </div>
                          <Icon name="ExternalLink" className="text-stone-300 group-hover:text-emerald-500 transition-colors" size={16} />
                        </div>

                        <h4 className="font-bold text-stone-800 mb-2 group-hover:text-emerald-800 transition-colors">{link.title}</h4>
                        <p className="text-xs text-stone-500 leading-relaxed mb-4 line-clamp-2 h-8">
                          {link.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {link.tags.map(tag => (
                            <span key={tag} className="px-2 py-0.5 bg-stone-100 text-stone-500 text-[10px] rounded-md font-medium group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
}

export default App;