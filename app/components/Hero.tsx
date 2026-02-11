'use client';

import DitherBackground from './DitherBackground';
import CardSwap, { Card } from '../../components/CardSwap';
import MobileCardStack from './MobileCardStack';
import { SiNextdotjs, SiNodedotjs, SiReact, SiFirebase, SiGooglecloud, SiGithub, SiPostgresql, SiMongodb, SiLinkedin, SiFacebook, SiInstagram, SiTiktok } from 'react-icons/si';
import { FaClock, FaComments, FaLightbulb, FaBrain, FaPalette, FaHeart, FaCheckCircle, FaHandHoldingHeart, FaBriefcase, FaProjectDiagram, FaUsers, FaHandshake, FaCode, FaSitemap } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen bg-black relative z-0 w-screen overflow-hidden">
      <div className="relative w-full h-full min-h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <DitherBackground />
          <div className="absolute inset-0 pointer-events-none" style={{
            boxShadow: 'inset 0 0 200px rgba(0, 0, 0, 0.8)'
          }}></div>
        </div>
        
        <div className="hidden md:block absolute top-4 md:top-8 left-4 md:left-8 text-6xl md:text-9xl text-black font-black z-10">+</div>
        <div className="hidden md:block absolute top-4 md:top-8 right-4 md:right-8 text-6xl md:text-9xl text-black font-black z-10">+</div>
        <div className="hidden md:block absolute bottom-4 md:bottom-8 left-4 md:left-8 text-6xl md:text-9xl text-black font-black z-10">+</div>
        <div className="hidden md:block absolute bottom-4 md:bottom-8 right-4 md:right-8 text-6xl md:text-9xl text-black font-black z-10">+</div>
        
        <div className="md:hidden relative z-20 flex flex-col px-6 py-12 min-h-screen max-w-full overflow-x-hidden">
          <div className="flex gap-3 mb-4">
            <a href="https://github.com/helvetiche" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all active:scale-95 relative group">
              <SiGithub size={20} />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1.5 bg-white text-black text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none border-2 border-gray-900 shadow-lg flex items-center gap-1.5">
                <SiGithub size={12} />
                @helvetiche
              </span>
            </a>
            <a href="https://www.linkedin.com/in/nasche-del-ponso-040b3b277/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all active:scale-95 relative group">
              <SiLinkedin size={20} />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1.5 bg-white text-black text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none border-2 border-gray-900 shadow-lg flex items-center gap-1.5">
                <SiLinkedin size={12} />
                Nasche Del Ponso
              </span>
            </a>
            <a href="https://www.facebook.com/nasche.del.ponso" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all active:scale-95 relative group">
              <SiFacebook size={20} />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1.5 bg-white text-black text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none border-2 border-gray-900 shadow-lg flex items-center gap-1.5">
                <SiFacebook size={12} />
                nasche.del.ponso
              </span>
            </a>
            <a href="https://www.instagram.com/ponieta.gg" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all active:scale-95 relative group">
              <SiInstagram size={20} />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1.5 bg-white text-black text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none border-2 border-gray-900 shadow-lg flex items-center gap-1.5">
                <SiInstagram size={12} />
                @ponieta.gg
              </span>
            </a>
            <a href="https://www.tiktok.com/@helvetiche" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all active:scale-95 relative group">
              <SiTiktok size={20} />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1.5 bg-white text-black text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none border-2 border-gray-900 shadow-lg flex items-center gap-1.5">
                <SiTiktok size={12} />
                @helvetiche
              </span>
            </a>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4 uppercase break-words" style={{ fontFamily: "'Product Sans', sans-serif" }}>
            Nasche Del Ponso
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-white text-black text-[10px] font-mono border border-gray-50 flex items-center gap-1 whitespace-nowrap">
              <FaPalette />UI/UX DESIGN
            </span>
            <span className="px-2 py-1 bg-white text-black text-[10px] font-mono border border-gray-50 flex items-center gap-1 whitespace-nowrap">
              <FaCode />FULL STACK ENGINEER
            </span>
            <span className="px-2 py-1 bg-white text-black text-[10px] font-mono border border-gray-50 flex items-center gap-1 whitespace-nowrap">
              <FaSitemap />SYSTEM ARCHITECTURE
            </span>
          </div>
          <p className="text-sm text-white font-mono text-justify font-light uppercase mb-8 break-words">
            Turning complex problems into dependable solutions through clean architecture, scalable systems, and thoughtful engineering focused on reliability and long-term maintainability.
          </p>
          
          <MobileCardStack />
        </div>

        <div className="hidden md:block absolute left-20 bottom-20 max-w-2xl z-10">
          <div className="flex gap-4 mb-4">
            <a href="https://github.com/helvetiche" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all hover:scale-110 relative group">
              <SiGithub size={24} />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-white text-black text-sm font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none border-2 border-gray-900 shadow-lg flex items-center gap-2">
                <SiGithub size={16} />
                @helvetiche
              </span>
            </a>
            <a href="https://www.linkedin.com/in/nasche-del-ponso-040b3b277/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all hover:scale-110 relative group">
              <SiLinkedin size={24} />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-white text-black text-sm font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none border-2 border-gray-900 shadow-lg flex items-center gap-2">
                <SiLinkedin size={16} />
                Nasche Del Ponso
              </span>
            </a>
            <a href="https://www.facebook.com/nasche.del.ponso" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all hover:scale-110 relative group">
              <SiFacebook size={24} />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-white text-black text-sm font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none border-2 border-gray-900 shadow-lg flex items-center gap-2">
                <SiFacebook size={16} />
                nasche.del.ponso
              </span>
            </a>
            <a href="https://www.instagram.com/ponieta.gg" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all hover:scale-110 relative group">
              <SiInstagram size={24} />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-white text-black text-sm font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none border-2 border-gray-900 shadow-lg flex items-center gap-2">
                <SiInstagram size={16} />
                @ponieta.gg
              </span>
            </a>
            <a href="https://www.tiktok.com/@helvetiche" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all hover:scale-110 relative group">
              <SiTiktok size={24} />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-white text-black text-sm font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none border-2 border-gray-900 shadow-lg flex items-center gap-2">
                <SiTiktok size={16} />
                @helvetiche
              </span>
            </a>
          </div>
          <h1 className="text-6xl font-bold text-white mb-4 uppercase" style={{ fontFamily: "'Product Sans', sans-serif" }}>
            Nasche Del Ponso
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
              <FaPalette />UI/UX DESIGN
            </span>
            <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
              <FaCode />FULL STACK ENGINEER
            </span>
            <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
              <FaSitemap />SYSTEM ARCHITECTURE
            </span>
          </div>
          <p className="text-xl text-white font-mono text-justify font-light uppercase">
            Turning complex problems into dependable solutions through clean architecture, scalable systems, and thoughtful engineering focused on reliability and long-term maintainability.
          </p>
        </div>
        <div className="hidden md:block absolute right-4 top-[65%] -translate-y-1/2 z-10">
          <CardSwap
            width={760}
            height={400}
            cardDistance={40}
            verticalDistance={50}
            delay={6000}
            pauseOnHover
            skewAmount={6}
            easing="elastic"
          >
            <Card style={{ background: '#000', border: '2px solid #f9fafb', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderRadius: 0 }}>
              <div className="flex items-center gap-2 p-4">
                <div className="w-3 h-3 bg-white border border-gray-50" style={{ opacity: 0.3 }}></div>
                <div className="w-3 h-3 bg-white border border-gray-50" style={{ opacity: 0.2 }}></div>
                <div className="w-3 h-3 bg-white border border-gray-50" style={{ opacity: 0.1 }}></div>
              </div>
              <div className="w-full h-[2px] bg-gray-50"></div>
              <div className="flex flex-1">
                <div className="relative w-1/2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/placeholder.jpg" alt="Project" className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black"></div>
                </div>
                <div className="w-1/2 p-6 flex flex-col text-white">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Product Sans', sans-serif" }}>TECHNICAL SKILLS</h3>
                  <p className="text-sm font-mono text-justify mb-4">Proficient in cloud and API integrations, utilizing modern, future-ready technology stacks to build scalable, secure, and adaptable software solutions.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
                      <SiNextdotjs />Next.js
                    </span>
                    <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
                      <SiNodedotjs />Node.js
                    </span>
                    <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
                      <SiReact />React
                    </span>
                    <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
                      <SiFirebase />Firebase
                    </span>
                    <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
                      <SiGooglecloud />Google Cloud Platform
                    </span>
                    <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
                      <SiGithub />GitHub
                    </span>
                    <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
                      <SiPostgresql />Postgres
                    </span>
                    <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
                      <SiMongodb />MongoDB
                    </span>
                  </div>
                </div>
              </div>
            </Card>
            <Card style={{ background: '#000', border: '2px solid #f9fafb', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderRadius: 0 }}>
              <div className="flex items-center gap-2 p-4">
                <div className="w-3 h-3 bg-white border border-gray-50" style={{ opacity: 0.3 }}></div>
                <div className="w-3 h-3 bg-white border border-gray-50" style={{ opacity: 0.2 }}></div>
                <div className="w-3 h-3 bg-white border border-gray-50" style={{ opacity: 0.1 }}></div>
              </div>
              <div className="w-full h-[2px] bg-gray-50"></div>
              <div className="flex flex-1">
                <div className="relative w-1/2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/placeholder.jpg" alt="Project" className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black"></div>
                </div>
                <div className="w-1/2 p-6 flex flex-col text-white">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Product Sans', sans-serif" }}>SOFT SKILLS</h3>
                  <p className="text-sm font-mono text-justify mb-4">Strong interpersonal and cognitive abilities that enhance collaboration, problem-solving, and adaptability in dynamic environments.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
                      <FaHandHoldingHeart />Patience
                    </span>
                    <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
                      <FaClock />Time Management
                    </span>
                    <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
                      <FaComments />Communication
                    </span>
                    <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
                      <FaLightbulb />Adaptability
                    </span>
                    <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
                      <FaBrain />Critical Thinking
                    </span>
                    <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
                      <FaPalette />Creativity
                    </span>
                    <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
                      <FaHeart />User Empathy
                    </span>
                    <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
                      <FaCheckCircle />Accountability
                    </span>
                  </div>
                </div>
              </div>
            </Card>
            <Card style={{ background: '#000', border: '2px solid #f9fafb', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderRadius: 0 }}>
              <div className="flex items-center gap-2 p-4">
                <div className="w-3 h-3 bg-white border border-gray-50" style={{ opacity: 0.3 }}></div>
                <div className="w-3 h-3 bg-white border border-gray-50" style={{ opacity: 0.2 }}></div>
                <div className="w-3 h-3 bg-white border border-gray-50" style={{ opacity: 0.1 }}></div>
              </div>
              <div className="w-full h-[2px] bg-gray-50"></div>
              <div className="flex flex-1">
                <div className="relative w-1/2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/placeholder.jpg" alt="Project" className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black"></div>
                </div>
                <div className="w-1/2 p-6 flex flex-col text-white">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Product Sans', sans-serif" }}>EXPERIENCE</h3>
                  <p className="text-sm font-mono text-justify mb-4">Proven track record in delivering high-quality solutions across diverse projects and client engagements.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
                      <FaBriefcase />3+ Years Freelancing
                    </span>
                    <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
                      <FaProjectDiagram />5+ Projects Led
                    </span>
                    <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
                      <FaUsers />10+ Clients Served
                    </span>
                    <span className="px-3 py-1 bg-white text-black text-xs font-mono border border-gray-50 flex items-center gap-1">
                      <FaHandshake />20+ Clients Consulted
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
}
