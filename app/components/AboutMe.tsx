'use client';

import { useEffect, useState, useRef } from 'react';
import { FaBriefcase, FaCode, FaStar, FaLaptopCode, FaProjectDiagram, FaEnvelope, FaCheckCircle, FaUser } from 'react-icons/fa';

export default function AboutMe() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const messageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const updateScroll = () => {
      messageRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8;
          if (isVisible && !visibleMessages.includes(index)) {
            setVisibleMessages(prev => [...prev, index]);
          }
        }
      });
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();

    return () => window.removeEventListener('scroll', updateScroll);
  }, [visibleMessages]);

  return (
    <section 
      className="min-h-screen bg-white relative w-full overflow-x-hidden"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.03) 2px,
            rgba(0, 0, 0, 0.03) 4px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.03) 2px,
            rgba(0, 0, 0, 0.03) 4px
          )
        `,
        backgroundSize: '20px 20px'
      }}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 py-20 max-w-full overflow-x-hidden">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="w-full lg:w-64 lg:flex-shrink-0">
            <div className="lg:sticky lg:top-20">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-6 md:mb-8 uppercase" style={{ fontFamily: "'Product Sans', sans-serif" }}>
                Timeline
              </h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-black"></div>
                
                <div className="space-y-6 md:space-y-8">
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-8 h-8 border-2 border-black bg-white"></div>
                    <div className="text-xs font-mono font-bold text-black mb-1">FUTURE</div>
                    <div className="text-xs md:text-sm font-mono text-black text-justify">Leading engineering teams to build scalable platforms that empower millions of users worldwide with innovative solutions</div>
                  </div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-8 h-8 border-2 border-black bg-white"></div>
                    <div className="text-xs font-mono font-bold text-black mb-1">2024 - 2026</div>
                    <div className="text-xs md:text-sm font-mono text-black text-justify">Started building production grade systems for clients, focusing on scalability, security, and long term maintainability across diverse industries</div>
                  </div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-8 h-8 border-2 border-black bg-white"></div>
                    <div className="text-xs font-mono font-bold text-black mb-1">2023 - 2024</div>
                    <div className="text-xs md:text-sm font-mono text-black text-justify">Started getting clients for mockups and basic prototypes, translating ideas into tangible designs and functional proof of concepts</div>
                  </div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-8 h-8 border-2 border-black bg-white"></div>
                    <div className="text-xs font-mono font-bold text-black mb-1">2020 - 2022</div>
                    <div className="text-xs md:text-sm font-mono text-black text-justify">Started learning fundamentals of front end development, mastering HTML, CSS, JavaScript, and modern frameworks to build interactive user interfaces</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 md:mb-8 uppercase" style={{ fontFamily: "'Product Sans', sans-serif" }}>
              About Me
            </h2>
            
            <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
              <button className="px-3 md:px-4 py-2 bg-black text-white text-xs font-mono border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                <FaBriefcase />careers
              </button>
              <button className="px-3 md:px-4 py-2 bg-black text-white text-xs font-mono border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                <FaCode />what-i-do
              </button>
              <button className="px-3 md:px-4 py-2 bg-black text-white text-xs font-mono border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                <FaStar />my-forte
              </button>
              <button className="px-3 md:px-4 py-2 bg-black text-white text-xs font-mono border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                <FaLaptopCode />tech-stack
              </button>
              <button className="px-3 md:px-4 py-2 bg-black text-white text-xs font-mono border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                <FaProjectDiagram />projects
              </button>
              <button className="px-3 md:px-4 py-2 bg-black text-white text-xs font-mono border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                <FaEnvelope />contact
              </button>
            </div>
            
            <div className="space-y-6 text-black font-mono">
              <p className="text-base md:text-lg leading-relaxed text-justify">
                Hi, I&apos;m Nasche, an aspiring developer focused on transforming manual workflows into semi-automated systems using modern technologies. I aim to improve efficiency, reduce repetitive work, and help organizations adopt practical digital solutions. My work centers on building reliable tools that streamline processes while remaining simple, user-friendly, and accessible to non-technical users.
              </p>

              <div className="mt-8 md:mt-12 space-y-4">
                <div 
                  ref={el => messageRefs.current[0] = el}
                  className={`flex items-start gap-2 md:gap-3 transition-all duration-700 ${
                    visibleMessages.includes(0) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                >
                  <div className="relative">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-black rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm md:text-base font-bold">C</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-white rounded-full border-2 border-black flex items-center justify-center">
                      <FaUser className="text-black text-[8px] md:text-xs" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold mb-1">Client</p>
                    <div className="bg-gray-100 border-2 border-black rounded-full px-3 md:px-4 py-2 md:py-3 inline-block max-w-fit">
                      <p className="text-xs md:text-sm">Hey! Can you help automate our workflow?</p>
                    </div>
                  </div>
                </div>

                <div 
                  ref={el => messageRefs.current[1] = el}
                  className={`flex items-start gap-2 md:gap-3 justify-end transition-all duration-700 delay-200 ${
                    visibleMessages.includes(1) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                >
                  <div className="flex-1 text-right">
                    <p className="text-xs font-bold mb-1">Nasche</p>
                    <div className="bg-black text-white border-2 border-black rounded-full px-3 md:px-4 py-2 md:py-3 inline-block">
                      <p className="text-xs md:text-sm">Absolutely! Let&apos;s discuss your current process.</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                      <span className="text-black text-sm md:text-base font-bold">N</span>
                    </div>
                    <div className="absolute -bottom-1 -left-1 w-5 h-5 md:w-6 md:h-6 bg-black rounded-full border-2 border-black flex items-center justify-center">
                      <FaCheckCircle className="text-white text-[8px] md:text-xs" />
                    </div>
                  </div>
                </div>

                <div 
                  ref={el => messageRefs.current[2] = el}
                  className={`flex items-start gap-2 md:gap-3 transition-all duration-700 delay-400 ${
                    visibleMessages.includes(2) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                >
                  <div className="relative">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-black rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm md:text-base font-bold">C</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-white rounded-full border-2 border-black flex items-center justify-center">
                      <FaUser className="text-black text-[8px] md:text-xs" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold mb-1">Client</p>
                    <div className="bg-gray-100 border-2 border-black rounded-full px-3 md:px-4 py-2 md:py-3 inline-block max-w-fit">
                      <p className="text-xs md:text-sm">We need something simple but effective.</p>
                    </div>
                  </div>
                </div>

                <div 
                  ref={el => messageRefs.current[3] = el}
                  className={`flex items-start gap-2 md:gap-3 justify-end transition-all duration-700 delay-600 ${
                    visibleMessages.includes(3) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                >
                  <div className="flex-1 text-right">
                    <p className="text-xs font-bold mb-1">Nasche</p>
                    <div className="bg-black text-white border-2 border-black rounded-full px-3 md:px-4 py-2 md:py-3 inline-block">
                      <p className="text-xs md:text-sm">That&apos;s my specialty. Simple, reliable, and user-friendly.</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                      <span className="text-black text-sm md:text-base font-bold">N</span>
                    </div>
                    <div className="absolute -bottom-1 -left-1 w-5 h-5 md:w-6 md:h-6 bg-black rounded-full border-2 border-black flex items-center justify-center">
                      <FaCheckCircle className="text-white text-[8px] md:text-xs" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-4 md:top-8 right-4 md:right-8 text-6xl md:text-9xl text-black font-black opacity-10">+</div>
      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 text-6xl md:text-9xl text-black font-black opacity-10">+</div>
    </section>
  );
}
