import React, { useEffect, useRef } from 'react';
import { Github, Instagram, Dribbble, Linkedin } from 'lucide-react';
import TextType from '../Reactbits/TextType';
import SplitText from '../Reactbits/SplitText';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scroll-up');
        }
      });
    }, observerOptions);

    const elements = containerRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    'React.js',
    'JavaScript',
    'Node.js',
    'Python',
    'Flask',
    'MongoDB',
    'Figma',
    'Github',
  ];

  const experience = [
    { role: 'Web Developer Intern', company: 'Rigel Infotech', year: '2024' },
    { role: 'Software Developer', company: 'Aerobott', year: '2025' },
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering in Information Technology',
      institution: 'Mumbai University',
      year: '2025',
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes scrollUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .scroll-animate {
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-scroll-up {
          opacity: 1;
          transform: translateY(0);
        }
        
        .scroll-animate:nth-child(1) { transition-delay: 0.1s; }
        .scroll-animate:nth-child(2) { transition-delay: 0.2s; }
        .scroll-animate:nth-child(3) { transition-delay: 0.3s; }
        .scroll-animate:nth-child(4) { transition-delay: 0.4s; }
        .scroll-animate:nth-child(5) { transition-delay: 0.5s; }
        .scroll-animate:nth-child(6) { transition-delay: 0.6s; }
      `}</style>
      
      <div
        ref={containerRef}
        className="min-h-screen text-white"
        style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          backgroundColor: '#0A0A0A',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-16 scroll-animate">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-400 text-sm">Software Developer</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-light">
              <SplitText
                text="Samina Shaikh, Software Developer."
                className="text-white"
                delay={100}
                duration={0.9}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
              />
            </h1>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Profile */}
            <div className="space-y-8 scroll-animate">
              {/* Profile Card */}
              <div
                className="bg-gray-900 rounded-3xl p-6 space-y-6"
                style={{ backgroundColor: '#0F0F0F' }}
              >
                {/* Profile Image */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl overflow-hidden aspect-square relative">
                    <img
                      src="/images/samina_image.jpg"
                      alt="Samina Shaikh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Profile Info */}
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-1 text-white">
                      <SplitText
                        text="Hello, I am Samina Shaikh."
                        className="text-white"
                        delay={100}
                        duration={1}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                      />
                    </h2>
                    <p className="text-gray-400 text-sm">
                      <SplitText
                        text="I am a Software Developer from Mumbai, India."
                        className="text-white"
                        delay={20}
                        duration={1}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                      />
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/Saminaa2004/"
                      className="w-12 h-12 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/samina-shaikh-sarfaraz/"
                      className="w-12 h-12 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>

                  {/* Contact Button */}
                  <button className="text-white bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] font-medium py-4 px-8 rounded-xl hover:bg-gray-700 transition-colors text-m">
                    Connect with me
                  </button>
                </div>
              </div>
            </div>
            {/* Right Column - Details */}
            <div
              className="rounded-3xl p-8 space-y-12 scroll-animate"
              style={{ backgroundColor: '#0F0F0F' }}
            >
              {/* About */}
              <div className="m-0 p-0 scroll-animate">
                <div className="p-2 border-b border-gray-800">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    <SplitText
                      text="I am a Full-Stack Developer. I see my profession not just as coding, but as a way to solve problems, create impact, and bring ideas to life."
                      className="text-white"
                      delay={10}
                      duration={1}
                      ease="power3.out"
                      splitType="chars"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                    />
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-4 p-0 scroll-animate">
                <div className="border-b border-gray-800 pb-3">
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 text-gray-400 border-0 rounded-xl"
                        style={{ backgroundColor: '#1A1A1A' }}
                      >
                        <SplitText
                      text={skill}
                      delay={100}
                      duration={1}
                      ease="power3.out"
                      splitType="chars"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                    />
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="m-0 p-0 scroll-animate">
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-[#a09a9a] mb-1">
                     <TextType
                  text={[
                    'Experience',
                  ]}
                  typingSpeed={100}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
                  </h2>
                  {experience.map((exp, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-4 border-b border-gray-800"
                    >
                      <div className="flex-1">
                        <h3 className="text-gray-300 font-medium">{exp.role}</h3>
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-gray-400">{exp.company}</span>
                      </div>
                      <div className="flex-1 text-right">
                        <span className="text-gray-500">{exp.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="mt-8 p-0 scroll-animate">
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-[#a09a9a] mb-4">
                        <TextType
                  text={[
                    'Education',
                  ]}
                  typingSpeed={100}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
                  </h2>
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-4 border-b border-gray-800"
                    >
                      <div className="flex-1">
                        <h3 className="text-gray-300 font-medium">
                          {edu.degree}
                        </h3>
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-gray-400">{edu.institution}</span>
                      </div>
                      <div className="flex-1 text-right">
                        <span className="text-gray-500">{edu.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;