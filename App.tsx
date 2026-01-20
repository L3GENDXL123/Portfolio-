
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WorkGallery from './components/WorkGallery';
import TechLab from './components/TechLab';
import WorkPage from './components/WorkPage';
import Footer from './components/Footer';
import Support from './components/Support';
import Discovery from './components/Discovery';
import { Activity, MessageCircle } from 'lucide-react';

type View = 'landing' | 'support' | 'techlab' | 'work';

const WHATSAPP_NUMBER = '2348102596232';

export const openWhatsApp = (msg: string) => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('landing');

  const navigateTo = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestBlueprint = (task: string) => {
    openWhatsApp(`Hello Cross.web, I am interested in your architectural pattern: ${task}. Can we discuss the technical implementation?`);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'support':
        return <Support onBack={() => navigateTo('landing')} />;
      case 'techlab':
        return <TechLab onBack={() => navigateTo('landing')} />;
      case 'work':
        return <WorkPage onBack={() => navigateTo('landing')} onRequestBlueprint={handleRequestBlueprint} />;
      default:
        return (
          <main>
            <Hero 
              onGetStarted={() => openWhatsApp("Hello Cross.web, I'm ready to start a new high-performance project. Let's discuss the technical requirements.")} 
            />
            
            <section className="py-12 border-y border-slate-800/50 bg-slate-950/50">
              <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-2xl font-black italic tracking-widest uppercase">TechStream</span>
                <span className="text-2xl font-black italic tracking-widest uppercase">CloudOps</span>
                <span className="text-2xl font-black italic tracking-widest uppercase">NexusCloud</span>
                <span className="text-2xl font-black italic tracking-widest uppercase">Quantum</span>
                <span className="text-2xl font-black italic tracking-widest uppercase">Vanguard</span>
              </div>
            </section>

            <Features recommendation={null} />
            <WorkGallery onRequestBlueprint={handleRequestBlueprint} />
            
            <Discovery />
            
            <section className="py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden bg-blue-600 rounded-[3rem] px-8 py-20 text-center shadow-2xl shadow-blue-500/40">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                  <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Ready to Build <br/>the Future?</h2>
                    <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-12 font-medium">
                      Join our elite cohort of partners and scale your digital presence beyond expectations.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button 
                        onClick={() => openWhatsApp("Hello Cross.web, I'm ready to discuss a high-performance build. Can we talk through some architectural requirements?")}
                        className="w-full sm:w-auto px-12 py-5 bg-white text-blue-600 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-2xl"
                      >
                        Contact Architect
                      </button>
                      <button 
                        onClick={() => navigateTo('support')}
                        className="w-full sm:w-auto px-12 py-5 bg-blue-700 text-white border border-blue-500 rounded-2xl font-black text-lg hover:bg-blue-800 transition-all shadow-2xl flex items-center justify-center gap-3"
                      >
                         Priority Support
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen selection:bg-blue-500/30 bg-[#030712] text-slate-200">
      {/* Genesis Launch Status Bar */}
      <div className="bg-blue-600 py-2 flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap z-[100] relative border-b border-blue-400/20">
         <div className="flex items-center gap-4 animate-scroll-text">
            {[1, 2, 3, 4, 5].map(i => (
              <React.Fragment key={i}>
                <span className="text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-2">
                  <Activity size={10} className="animate-pulse" /> Status: Genesis Launch Phase // 0/5 Partner Slots Claimed
                </span>
                <span className="w-1 h-1 rounded-full bg-white/50"></span>
              </React.Fragment>
            ))}
         </div>
      </div>
      
      <Navbar onNavigate={navigateTo} currentView={currentView} />
      {renderContent()}
      <Footer onNavigate={navigateTo} />

      {/* Persistent Floating WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3 pointer-events-none">
        <div className="bg-slate-900 border border-white/10 px-4 py-2 rounded-xl text-[10px] font-bold text-white uppercase tracking-widest shadow-2xl animate-in slide-in-from-right-4 duration-1000 delay-500 pointer-events-auto">
          <span className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            Architect Online
          </span>
        </div>
        <button 
          onClick={() => openWhatsApp("Hello Cross.web, I'm ready to discuss a high-performance build. Can we talk through some architectural requirements?")}
          className="group relative w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(37,211,102,0.4)] transition-all duration-500 hover:scale-110 active:scale-90 pointer-events-auto"
        >
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 pointer-events-none"></div>
          <MessageCircle size={32} className="relative z-10 transition-transform group-hover:rotate-12" />
          
          <span className="absolute right-full mr-4 px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none shadow-2xl">
            Start Project Now
          </span>
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-text {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-text {
          animation: scroll-text 30s linear infinite;
          display: inline-flex;
          width: 200%;
        }
      `}} />
    </div>
  );
};

export default App;
