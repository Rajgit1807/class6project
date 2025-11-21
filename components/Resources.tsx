import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, FileText, Video, Image, FileSpreadsheet, User, Lightbulb, AlertTriangle, Settings, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { STEPS, FILES_LIST, TEACHER_NAME, SCHOOL_NAME, DATE, PROJECT_TITLE } from '../constants';

const Resources: React.FC = () => {
  const navigate = useNavigate();

  const getIconForType = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText className="text-red-500" />;
      case 'video': return <Video className="text-purple-500" />;
      case 'zip': return <Image className="text-blue-500" />;
      case 'excel': return <FileSpreadsheet className="text-green-500" />;
      case 'ppt': return <FileText className="text-orange-500" />;
      default: return <FileText className="text-gray-500" />;
    }
  };

  const scriptSections = [
    {
      speaker: "Pranika",
      role: "Introduction",
      icon: <User className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            <strong>Topic: "How to Save Water and Energy Using AI"</strong>
          </p>
          <p>
            AI saves water and energy in agriculture by using sensors and algorithms to automate irrigation, precisely delivering the right amount of water at the right time based on real-time data. It also predicts weather, monitors crop health, and optimizes energy use in irrigation systems.
          </p>
          <p>
            We have developed a <strong>moisture sensor</strong> that helps save water. Usually, when we water plants, we do not know whether they actually need water or not. With our sensor, we can accurately determine how much water the plants require—or better yet, allow the system to water them automatically.
          </p>
          <ul className="list-disc pl-5 space-y-1 bg-blue-50 p-3 rounded-lg text-sm">
            <li>If moisture is sufficient: The system waits.</li>
            <li>If soil is too dry: It activates a built-in sprinkler until optimal levels are reached.</li>
          </ul>
        </div>
      )
    },
    {
      speaker: "Samarth",
      role: "Advantages",
      icon: <Lightbulb className="w-5 h-5 text-yellow-500" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>Here are some advantages of the sensor:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Optimized irrigation:</strong> Precise watering schedules prevent both over-watering and under-watering.</li>
            <li><strong>Water and cost savings:</strong> Reduces water waste and associated costs for pumping and fertilizer.</li>
            <li><strong>Increased crop yield:</strong> Improved soil moisture management during critical growth stages leads to better crop quality.</li>
            <li><strong>Continuous monitoring:</strong> Provides real-time data 24/7.</li>
            <li><strong>Reduced environmental impact:</strong> Prevents nutrient leaching caused by excessive irrigation.</li>
          </ul>
        </div>
      )
    },
    {
      speaker: "Rozaldo",
      role: "Drawbacks",
      icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>We also considered some drawbacks:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>High initial cost:</strong> Advanced sensors can be expensive to purchase and install.</li>
            <li><strong>Calibration required:</strong> Sensors often need to be calibrated for specific soil types (salinity, viscosity).</li>
            <li><strong>Site-specific limitations:</strong> Sensors only measure moisture at their specific location; soil moisture can vary across a large field.</li>
            <li><strong>Maintenance:</strong> Requires labor to install probes and perform regular recalibration.</li>
          </ul>
        </div>
      )
    },
    {
      speaker: "Devansh",
      role: "Working & Demonstration",
      icon: <Settings className="w-5 h-5 text-indigo-500" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            A homemade soil moisture sensor works by using two probes inserted into the soil to measure <strong>electrical resistance</strong>.
          </p>
          <div className="bg-indigo-50 p-4 rounded-xl">
             <p className="font-semibold mb-2">The Science:</p>
             <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><strong>Dry Soil:</strong> High resistance (poor conductor).</li>
                <li><strong>Wet Soil:</strong> Low resistance (water conducts electricity).</li>
             </ul>
          </div>
          <p>
            This change is measured by a simple circuit (like an Arduino) to provide a digital output. As conductivity increases with water, the resistance between probes decreases, signaling the system to stop watering.
          </p>
        </div>
      )
    },
    {
      speaker: "Raphael",
      role: "Conclusion",
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            Soil moisture sensors are an invaluable technology for modern, efficient land management. While factors like calibration and cost are important, the benefits—reducing plant stress, boosting output, and preserving water—far outweigh the drawbacks.
          </p>
          <p className="italic font-medium text-indigo-600">
            "With ongoing technological advancements, these sensors are game changers for anybody trying to improve their irrigation techniques."
          </p>
          <p>Thank you!</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-body">
      
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 px-4 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button variant="secondary" onClick={() => navigate('/')} className="!py-2 !px-4 !text-base !rounded-xl">
             <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>
          <h1 className="font-heading font-bold text-xl text-slate-800 hidden sm:block">{PROJECT_TITLE}</h1>
          <div className="w-24"></div> {/* Spacer for balance */}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4 md:p-8 space-y-12">
        
        {/* Top Section: Video & Downloads */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Video Player */}
        <div className="lg:col-span-2 space-y-4">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
  >
    <video 
      className="w-full h-full object-cover"
      controls
      autoPlay={false}
      muted
      loop={false}
      playsInline
    >
      <source src="assets/videos/WhatsApp Video 2025-11-21 at 11.55.52.mp4" type="video/mp4" />
      {/* Add additional video formats for better browser compatibility */}
      {/* <source src="/path-to-your-video.webm" type="video/webm" />
      Your browser does not support the video tag. */}
    </video>
  </motion.div>
  <div className="flex items-center justify-between px-2">
    <div>
      <h2 className="text-2xl font-heading font-bold text-slate-800">Project Demonstration</h2>
      <p className="text-slate-500">See the soil moisture sensor in action.</p>
    </div>
  </div>
</div>

          {/* Downloads Sidebar */}
          <div className="space-y-6">
            <div className="bg-indigo-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <h3 className="font-heading font-bold text-2xl mb-4 flex items-center gap-2">
                <Download className="w-6 h-6" /> Downloads
              </h3>
              <div className="space-y-3 relative z-10">
                {FILES_LIST.map((file, idx) => (
                  <motion.a
                    key={idx}
                    href={`#download-${file.name}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="block bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-3 transition-colors border border-white/10 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        {getIconForType(file.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm truncate">{file.name}</p>
                        <p className="text-xs text-indigo-200">{file.size}</p>
                      </div>
                      <Download className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Script / Presentation Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-bold text-slate-800">Project Presentation & Script</h2>
            <p className="text-slate-500">Read about our research and findings</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {scriptSections.map((section, idx) => (
              <Card key={idx} delay={idx * 0.1} className={`border-l-4 ${idx % 2 === 0 ? 'border-l-blue-500' : 'border-l-purple-500'} h-full`}>
                <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
                  <div className="p-2 bg-gray-100 rounded-full">{section.icon}</div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-slate-800">{section.role}</h3>
                    <p className="text-sm font-bold text-indigo-600 uppercase tracking-wider">{section.speaker}</p>
                  </div>
                </div>
                <div className="text-sm leading-relaxed">
                  {section.content}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Stepper Gallery Section */}
        <div className="space-y-8">
           <div className="text-center space-y-2">
              <h2 className="text-4xl font-heading font-bold text-slate-800">Build Process Gallery</h2>
              <p className="text-lg text-slate-500">From Components to Automation</p>
           </div>
           
           {/* Simple Progress Bar */}
           <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-8">
             <div className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 w-full animate-pulse"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {STEPS.map((step, index) => (
               <Card key={step.id} delay={index * 0.1} className="hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-blue-200">
                 <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 relative group">
                   <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                   />
                   <div className="absolute top-2 left-2 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
                     Step {step.id}
                   </div>
                 </div>
                 <p className="text-lg font-semibold text-slate-700 leading-snug text-center">
                   {step.title}
                 </p>
               </Card>
             ))}
           </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 mt-12">
         <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-2xl font-heading font-bold text-slate-800 mb-4">
              <span className="text-blue-500">Water</span>
              <span className="text-green-500">Irrigation</span>
              <span className="text-purple-500">Project</span>
            </div>
            <p className="text-slate-500">
              Created by <strong>{TEACHER_NAME}</strong>'s Class | {SCHOOL_NAME} | {DATE}
            </p>
            <Button variant="secondary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="!py-2 !px-6 !text-sm mx-auto mt-4">
              Back to Top
            </Button>
         </div>
      </footer>
    </div>
  );
};

export default Resources;