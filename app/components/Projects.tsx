'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { FaFolderOpen, FaMicrochip, FaFileAlt, FaAward, FaCodeBranch, FaSearch } from 'react-icons/fa';
import { SiNextdotjs, SiNodedotjs, SiReact, SiFirebase, SiGooglecloud, SiGithub, SiPostgresql, SiMongodb, SiTypescript, SiJavascript, SiTailwindcss, SiDocker, SiKubernetes, SiAmazon, SiVercel, SiPython } from 'react-icons/si';
import ProjectCard from './ProjectCard';
import { gsap } from 'gsap';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

const tagIcons: Record<string, React.ComponentType> = {
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'React': SiReact,
  'Firebase': SiFirebase,
  'Google Cloud': SiGooglecloud,
  'GitHub': SiGithub,
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'Tailwind': SiTailwindcss,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'AWS': SiAmazon,
  'Vercel': SiVercel,
  'Python': SiPython
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    loadProjects();
  }, []);

  const availableTags = useMemo(() => {
    const tagsSet = new Set<string>();
    projects.forEach(project => {
      project.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.every(tag => project.tags.includes(tag));
      
      return matchesSearch && matchesTags;
    });
  }, [projects, searchQuery, selectedTags]);

  useEffect(() => {
    if (!loading && filteredProjects.length > 0 && !hasAnimated.current) {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 100,
              filter: 'blur(10px)'
            },
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 0.8,
              ease: 'power3.out',
              delay: index * 0.05
            }
          );
        }
      });
      hasAnimated.current = true;
    }
  }, [loading, filteredProjects]);

  const loadProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data.projects || []);
    } catch (error) {
      console.error('Failed to load projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <section 
      className="min-h-screen bg-white relative z-10 w-full overflow-x-hidden"
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
        <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 uppercase" style={{ fontFamily: "'Product Sans', sans-serif" }}>
          Projects
        </h2>
        
        <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
          <button className="px-3 md:px-4 py-2 bg-black text-white text-xs font-mono border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center gap-2">
            <FaFolderOpen />PROJECTS
          </button>
          <button className="px-3 md:px-4 py-2 bg-black text-white text-xs font-mono border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center gap-2">
            <FaMicrochip />TECHNOLOGIES
          </button>
          <button className="px-3 md:px-4 py-2 bg-black text-white text-xs font-mono border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center gap-2">
            <FaFileAlt />CASE-STUDIES
          </button>
          <button className="px-3 md:px-4 py-2 bg-black text-white text-xs font-mono border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center gap-2">
            <FaAward />ACHIEVEMENTS
          </button>
          <button className="px-3 md:px-4 py-2 bg-black text-white text-xs font-mono border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center gap-2">
            <FaCodeBranch />OPEN-SOURCE
          </button>
        </div>

        <p className="text-base md:text-lg font-mono text-black mb-12 text-justify w-full">
          Everything I build that is publicly available. Some projects are not available for preview due to client confidentiality agreements and non-disclosure requirements that protect sensitive business information.
        </p>

        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 border-2 border-black font-mono text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
          </div>

          {availableTags.length > 0 && (
            <div>
              <p className="text-sm font-mono text-black mb-2 uppercase">Filter by tags:</p>
              <div className="flex flex-wrap gap-2">
                {availableTags.map((tag) => {
                  const Icon = tagIcons[tag];
                  const isSelected = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 border-2 border-black font-mono text-xs flex items-center gap-1 transition-colors ${
                        isSelected 
                          ? 'bg-black text-white' 
                          : 'bg-white text-black hover:bg-gray-100'
                      }`}
                    >
                      {Icon && <Icon />}
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-black font-mono">Loading projects...</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-black font-mono">
              {projects.length === 0 ? 'No projects yet. Check back soon!' : 'No projects match your filters.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                ref={el => { cardsRef.current[index] = el; }}
                style={{ opacity: 0 }}
                className="h-full"
              >
                <ProjectCard>
                <div className="flex flex-col min-h-[600px]">
                <div className="flex items-center gap-2 p-3 border-b-2 border-black">
                  <div className="w-3 h-3 bg-black border border-black" style={{ opacity: 0.3 }}></div>
                  <div className="w-3 h-3 bg-black border border-black" style={{ opacity: 0.2 }}></div>
                  <div className="w-3 h-3 bg-black border border-black" style={{ opacity: 0.1 }}></div>
                </div>
                {project.imageUrl && (
                  <div className="w-full overflow-hidden border-b-2 border-black relative" style={{ aspectRatio: '19/10' }}>
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60" />
                  </div>
                )}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-black mb-2 uppercase" style={{ fontFamily: "'Product Sans', sans-serif" }}>
                    {project.title}
                  </h3>
                  <p className="text-sm font-mono text-black mb-4 text-justify line-clamp-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, idx) => {
                      const Icon = tagIcons[tag];
                      return (
                        <span 
                          key={idx} 
                          className="px-2 py-1 bg-black text-white text-xs font-mono flex items-center gap-1"
                        >
                          {Icon && <Icon />}
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
                </div>
              </ProjectCard>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="absolute top-8 right-8 text-9xl text-black font-black opacity-10">+</div>
      <div className="absolute bottom-8 left-8 text-9xl text-black font-black opacity-10">+</div>
    </section>
  );
}
