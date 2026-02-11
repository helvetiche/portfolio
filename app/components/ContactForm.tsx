'use client';

import { useState } from 'react';
import DitherBackground from './DitherBackground';
import { SiGithub, SiLinkedin, SiFacebook, SiInstagram, SiTiktok } from 'react-icons/si';
import { FaHeart } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'failed to send');
    }
  };

  return (
    <section className="bg-black relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 w-full h-full">
        <DitherBackground />
        <div className="absolute inset-0 pointer-events-none" style={{
          boxShadow: 'inset 0 0 200px rgba(0, 0, 0, 0.8)'
        }}></div>
      </div>

      <div className="relative z-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 uppercase" style={{ fontFamily: "'Product Sans', sans-serif" }}>
              Get In Touch
            </h2>
            <p className="text-white font-mono text-xs md:text-sm mb-8 uppercase">
              Have a project in mind? Let&apos;s talk about it.
            </p>

            <form onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-3 py-2.5 bg-black text-white border-2 border-white font-mono text-xs uppercase placeholder:text-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                />
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-3 py-2.5 bg-black text-white border-2 border-white font-mono text-xs uppercase placeholder:text-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                />
              </div>

              <div>
                <textarea
                  placeholder="YOUR MESSAGE"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-3 py-2.5 bg-black text-white border-2 border-white font-mono text-xs uppercase placeholder:text-gray-500 focus:outline-none focus:border-gray-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-5 py-2.5 bg-white text-black font-mono text-xs uppercase border-2 border-white hover:bg-black hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
              >
                {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
              </button>

              {status === 'success' && (
                <div className="p-3 bg-white text-black font-mono text-xs uppercase text-center border-2 border-white">
                  message sent successfully!
                </div>
              )}

              {status === 'error' && (
                <div className="p-3 bg-black text-white font-mono text-xs uppercase text-center border-2 border-white">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-white font-mono text-sm md:text-base mb-8 leading-relaxed">
              I hereby declare that all information provided on this portfolio is true and accurate to the best of my knowledge. The projects, skills, and experiences showcased represent my genuine work and capabilities.
            </p>
            
            <div className="flex gap-4 mb-8">
              <a href="https://github.com/helvetiche" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all hover:scale-110">
                <SiGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/nasche-del-ponso-040b3b277/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all hover:scale-110">
                <SiLinkedin size={24} />
              </a>
              <a href="https://www.facebook.com/nasche.del.ponso" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all hover:scale-110">
                <SiFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/ponieta.gg" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all hover:scale-110">
                <SiInstagram size={24} />
              </a>
              <a href="https://www.tiktok.com/@helvetiche" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all hover:scale-110">
                <SiTiktok size={24} />
              </a>
            </div>

            <div className="text-white font-mono text-xs space-y-1">
              <p className="uppercase">Last Updated</p>
              <p>Wednesday, February 11, 2026</p>
              <p className="mt-2 flex items-center gap-2">
                Made with love by Nasche Del Ponso
                <FaHeart className="text-white" size={12} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
