'use client';

import CardSwap, { Card } from '../../components/CardSwap';
import { SiNextdotjs, SiNodedotjs, SiReact, SiFirebase, SiGooglecloud, SiGithub } from 'react-icons/si';
import { FaClock, FaComments, FaLightbulb, FaHandHoldingHeart, FaBriefcase, FaProjectDiagram, FaUsers } from 'react-icons/fa';

export default function MobileCardStack() {
  return (
    <div className="relative w-full flex justify-center items-center mt-8" style={{ height: '240px' }}>
      <div style={{ position: 'relative', width: '100%', height: '200px' }}>
        <style jsx>{`
          div :global(.card-swap-container) {
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            margin: 0 au  to;
          }
        `}</style>
        <CardSwap
          width="100%"
          height={200}
          cardDistance={0}
          verticalDistance={20}
          delay={6000}
          pauseOnHover={false}
          skewAmount={0}
          easing="linear"
        >
      <Card style={{ background: '#000', border: '2px solid #f9fafb', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderRadius: 0 }}>
        <div className="flex items-center gap-2 p-3">
          <div className="w-2 h-2 bg-white border border-gray-50" style={{ opacity: 0.3 }}></div>
          <div className="w-2 h-2 bg-white border border-gray-50" style={{ opacity: 0.2 }}></div>
          <div className="w-2 h-2 bg-white border border-gray-50" style={{ opacity: 0.1 }}></div>
        </div>
        <div className="w-full h-[2px] bg-gray-50"></div>
        <div className="p-4 text-white">
          <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Product Sans', sans-serif" }}>TECHNICAL SKILLS</h3>
          <div className="flex flex-wrap gap-1 mb-3">
            <span className="px-2 py-1 bg-white text-black text-[8px] font-mono border border-gray-50 flex items-center gap-1">
              <SiNextdotjs />Next.js
            </span>
            <span className="px-2 py-1 bg-white text-black text-[8px] font-mono border border-gray-50 flex items-center gap-1">
              <SiNodedotjs />Node.js
            </span>
            <span className="px-2 py-1 bg-white text-black text-[8px] font-mono border border-gray-50 flex items-center gap-1">
              <SiReact />React
            </span>
            <span className="px-2 py-1 bg-white text-black text-[8px] font-mono border border-gray-50 flex items-center gap-1">
              <SiFirebase />Firebase
            </span>
            <span className="px-2 py-1 bg-white text-black text-[8px] font-mono border border-gray-50 flex items-center gap-1">
              <SiGooglecloud />GCP
            </span>
            <span className="px-2 py-1 bg-white text-black text-[8px] font-mono border border-gray-50 flex items-center gap-1">
              <SiGithub />GitHub
            </span>
          </div>
          <p className="text-[10px] font-mono text-justify">Proficient in cloud and API integrations, utilizing modern, future-ready technology stacks to build scalable, secure, and adaptable software solutions.</p>
        </div>
      </Card>
      <Card style={{ background: '#000', border: '2px solid #f9fafb', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderRadius: 0 }}>
        <div className="flex items-center gap-2 p-3">
          <div className="w-2 h-2 bg-white border border-gray-50" style={{ opacity: 0.3 }}></div>
          <div className="w-2 h-2 bg-white border border-gray-50" style={{ opacity: 0.2 }}></div>
          <div className="w-2 h-2 bg-white border border-gray-50" style={{ opacity: 0.1 }}></div>
        </div>
        <div className="w-full h-[2px] bg-gray-50"></div>
        <div className="p-4 text-white">
          <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Product Sans', sans-serif" }}>SOFT SKILLS</h3>
          <div className="flex flex-wrap gap-1 mb-3">
            <span className="px-2 py-1 bg-white text-black text-[8px] font-mono border border-gray-50 flex items-center gap-1">
              <FaHandHoldingHeart />Patience
            </span>
            <span className="px-2 py-1 bg-white text-black text-[8px] font-mono border border-gray-50 flex items-center gap-1">
              <FaClock />Time Mgmt
            </span>
            <span className="px-2 py-1 bg-white text-black text-[8px] font-mono border border-gray-50 flex items-center gap-1">
              <FaComments />Communication
            </span>
            <span className="px-2 py-1 bg-white text-black text-[8px] font-mono border border-gray-50 flex items-center gap-1">
              <FaLightbulb />Adaptability
            </span>
          </div>
          <p className="text-[10px] font-mono text-justify">Strong interpersonal and cognitive abilities that enhance collaboration, problem-solving, and adaptability in dynamic environments.</p>
        </div>
      </Card>
      <Card style={{ background: '#000', border: '2px solid #f9fafb', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderRadius: 0 }}>
        <div className="flex items-center gap-2 p-3">
          <div className="w-2 h-2 bg-white border border-gray-50" style={{ opacity: 0.3 }}></div>
          <div className="w-2 h-2 bg-white border border-gray-50" style={{ opacity: 0.2 }}></div>
          <div className="w-2 h-2 bg-white border border-gray-50" style={{ opacity: 0.1 }}></div>
        </div>
        <div className="w-full h-[2px] bg-gray-50"></div>
        <div className="p-4 text-white">
          <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Product Sans', sans-serif" }}>EXPERIENCE</h3>
          <div className="flex flex-wrap gap-1 mb-3">
            <span className="px-2 py-1 bg-white text-black text-[8px] font-mono border border-gray-50 flex items-center gap-1">
              <FaBriefcase />3+ Years
            </span>
            <span className="px-2 py-1 bg-white text-black text-[8px] font-mono border border-gray-50 flex items-center gap-1">
              <FaProjectDiagram />5+ Projects
            </span>
            <span className="px-2 py-1 bg-white text-black text-[8px] font-mono border border-gray-50 flex items-center gap-1">
              <FaUsers />10+ Clients
            </span>
          </div>
          <p className="text-[10px] font-mono text-justify">Proven track record in delivering high-quality solutions across diverse projects and client engagements.</p>
        </div>
      </Card>
        </CardSwap>
      </div>
    </div>
  );
}
