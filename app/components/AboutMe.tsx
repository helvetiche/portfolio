'use client';

import { useEffect, useState } from 'react';
import { FaBriefcase, FaCode, FaStar, FaLaptopCode, FaProjectDiagram, FaEnvelope, FaCheckCircle, FaUser } from 'react-icons/fa';

export default function AboutMe() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.5;
      const progress = Math.max(0, Math.min(1, scrollY / triggerPoint));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();

    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <section 
      className="min-h-screen bg-white relative z-10"
      style={{
        transform: `translateY(${(1 - scrollProgress) * 100}vh)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      <div className="container mx-auto px-8 py-20">
        <div className="flex gap-12">
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-20">
              <h3 className="text-2xl font-bold text-black mb-8 uppercase" style={{ fontFamily: "'Product Sans', sans-serif" }}>
                Timeline
              </h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-black"></div>
                
                <div className="space-y-8">
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-8 h-8 border-2 border-black bg-white"></div>
                    <div className="text-xs font-mono font-bold text-black mb-1">FUTURE</div>
                    <div className="text-sm font-mono text-black text-justify">Leading engineering teams to build scalable platforms that empower millions of users worldwide with innovative solutions</div>
                  </div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-8 h-8 border-2 border-black bg-white"></div>
                    <div className="text-xs font-mono font-bold text-black mb-1">2024 - 2026</div>
                    <div className="text-sm font-mono text-black text-justify">Started building production grade systems for clients, focusing on scalability, security, and long term maintainability across diverse industries</div>
                  </div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-8 h-8 border-2 border-black bg-white"></div>
                    <div className="text-xs font-mono font-bold text-black mb-1">2023 - 2024</div>
                    <div className="text-sm font-mono text-black text-justify">Started getting clients for mockups and basic prototypes, translating ideas into tangible designs and functional proof of concepts</div>
                  </div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-8 h-8 border-2 border-black bg-white"></div>
                    <div className="text-xs font-mono font-bold text-black mb-1">2020 - 2022</div>
                    <div className="text-sm font-mono text-black text-justify">Started learning fundamentals of front end development, mastering HTML, CSS, JavaScript, and modern frameworks to build interactive user interfaces</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-6xl font-bold text-black mb-8 uppercase" style={{ fontFamily: "'Product Sans', sans-serif" }}>
              About Me
            </h2>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <button className="px-4 py-2 bg-black text-white text-xs font-mono border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                <FaBriefcase />careers
              </button>
              <button className="px-4 py-2 bg-black text-white text-xs font-mono border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                <FaCode />what-i-do
              </button>
              <button className="px-4 py-2 bg-black text-white text-xs font-mono border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                <FaStar />my-forte
              </button>
              <button className="px-4 py-2 bg-black text-white text-xs font-mono border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                <FaLaptopCode />tech-stack
              </button>
              <button className="px-4 py-2 bg-black text-white text-xs font-mono border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                <FaProjectDiagram />projects
              </button>
              <button className="px-4 py-2 bg-black text-white text-xs font-mono border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                <FaEnvelope />contact
              </button>
            </div>
            
            <div className="space-y-6 text-black font-mono">
              <p className="text-lg leading-relaxed text-justify">
                Hi, I&apos;m Nasche, an aspiring developer focused on transforming manual workflows into semi-automated systems using modern technologies. I aim to improve efficiency, reduce repetitive work, and help organizations adopt practical digital solutions. My work centers on building reliable tools that streamline processes while remaining simple, user-friendly, and accessible to non-technical users.
              </p>

              <div className="mt-12 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-black rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">C</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full border-2 border-black flex items-center justify-center">
                      <FaUser className="text-black text-xs" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold mb-1">Client</p>
                    <div className="bg-gray-100 border-2 border-black rounded-full px-4 py-3 max-w-md">
                      <p className="text-sm">Hey! Can you help automate our workflow?</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 justify-end">
                  <div className="text-right">
                    <p className="text-xs font-bold mb-1">Nasche</p>
                    <div className="bg-black text-white border-2 border-black rounded-full px-4 py-3 max-w-md">
                      <p className="text-sm">Absolutely! Let&apos;s discuss your current process.</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-10 h-10 bg-white rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                      <span className="text-black text-xs font-bold">N</span>
                    </div>
                    <div className="absolute -bottom-1 -left-1 w-5 h-5 bg-black rounded-full border-2 border-black flex items-center justify-center">
                      <FaCheckCircle className="text-white text-xs" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-black rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">C</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full border-2 border-black flex items-center justify-center">
                      <FaUser className="text-black text-xs" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold mb-1">Client</p>
                    <div className="bg-gray-100 border-2 border-black rounded-full px-4 py-3 max-w-md">
                      <p className="text-sm">We need something simple but effective.</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 justify-end">
                  <div className="text-right">
                    <p className="text-xs font-bold mb-1">Nasche</p>
                    <div className="bg-black text-white border-2 border-black rounded-full px-4 py-3 max-w-md">
                      <p className="text-sm">That&apos;s my specialty. Simple, reliable, and user-friendly.</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-10 h-10 bg-white rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                      <span className="text-black text-xs font-bold">N</span>
                    </div>
                    <div className="absolute -bottom-1 -left-1 w-5 h-5 bg-black rounded-full border-2 border-black flex items-center justify-center">
                      <FaCheckCircle className="text-white text-xs" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-8 right-8 text-9xl text-black font-black opacity-10">+</div>
      <div className="absolute bottom-8 right-8 text-9xl text-black font-black opacity-10">+</div>
    </section>
  );
}
