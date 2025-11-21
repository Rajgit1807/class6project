import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Play, Download, FileText, Droplets } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { STUDENT_NAME, TEAM_MEMBERS, CLASS_NAME, FILES_LIST } from '../constants';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleDownloadAll = () => {
    // Logic to trigger download would go here.
    // For static demo, we'll just alert.
    alert("Downloading Photos.zip (Mock Action)");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-300 via-teal-200 via-yellow-200 to-purple-300 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-yellow-300/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Text & Actions */}
        <div className="text-center lg:text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full mb-6 shadow-sm">
              <Droplets className="text-blue-500 w-5 h-5" />
              <span className="text-blue-800 font-bold text-sm tracking-wider uppercase">Class 6 Science Project</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-slate-800 leading-tight mb-4 drop-shadow-sm">
              How to Save Water & Energy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Using AI</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-body font-semibold text-slate-700 mb-6 leading-normal">
              A smart moisture sensor system by <span className="text-indigo-600 bg-indigo-100 px-2 py-1 rounded-lg whitespace-normal lg:whitespace-nowrap inline-block my-1">{TEAM_MEMBERS}</span> representing {STUDENT_NAME}.
            </h2>
            
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              AI saves water and energy in agriculture by using sensors to automate irrigation. Our project detects soil moisture levels to precisely deliver water only when plants need it—preventing wastage and optimizing growth.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button onClick={() => navigate('/resources')} icon={<Play className="w-5 h-5 fill-current" />}>
              Watch Video & Docs
            </Button>
            <Button variant="secondary" onClick={handleDownloadAll} icon={<Download className="w-5 h-5" />}>
              Download All (ZIP)
            </Button>
          </motion.div>

          {/* Mini File List */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-4"
          >
             <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-3">Uploaded Files:</p>
             <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {FILES_LIST.slice(0, 3).map((file, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/50 rounded-lg text-xs font-semibold text-slate-600 border border-white/60">
                    <FileText className="w-3 h-3 text-blue-500" />
                    {file.name}
                  </span>
                ))}
             </div>
          </motion.div>
        </div>

        {/* Right Column: Thumbnail/Visual */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Card className="p-0 overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white ring-4 ring-black/5">
            <div className="relative group cursor-pointer" onClick={() => navigate('/resources')}>
              <img 
                src="assets/images/WhatsApp Image 2025-11-21 at 11.55.53.jpeg" 
                alt="Project Thumbnail" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                   <Play className="w-8 h-8 text-purple-600 ml-1 fill-current" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                 <h3 className="font-heading font-bold text-2xl">The Making Of</h3>
                 <p className="text-white/90 text-sm">Duration: 0:22</p>
              </div>
            </div>
          </Card>
          
          {/* Decorative Sticker */}
          <div className="absolute -top-6 -right-6 bg-yellow-400 text-yellow-900 font-black text-xl p-4 rounded-full shadow-lg transform rotate-12 border-4 border-white">
            Tagore House
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;