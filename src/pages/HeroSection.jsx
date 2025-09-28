import React from 'react';
import TextType from '../Reactbits/TextType';
import SplitText from '../Reactbits/SplitText';
import StarBorder from '../Reactbits/StarBorder';
import Navbar from '../common/Navbar';

export default function HeroSection() {

  return (
    <>
    <Navbar />
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 scale-110"
        autoPlay
        muted
        loop
        playsInline
        style={{ playbackRate: 0.25 }}
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        {/* Fallback background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700"></div>
      </video>

      {/* Dark overlay for the sleek dark theme */}
      <div className="absolute inset-0 bg-black/90 z-10"></div>

      {/* Content overlay */}
      <div className="relative z-20 flex flex-col min-h-screen text-white px-6 md:px-12 lg:px-20">
        {/* Header
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-300">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span>Software Developer</span>
          </div>
        </div> */}

        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-5xl lg:text-8xl font-light mb-8 leading-none">
              <SplitText
                text="Samina Shaikh"
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

            <p className="text-lg text-gray-300 mb-12 max-w-lg leading-relaxed">
              <TextType
                text={[
                  'Enthusiastic Full-Stack Developer skilled in React.js, Tailwind, Node.js, Flask, and MongoDB. Passionate about building scalable frontends, RESTful APIs, and real-time solutions that elevate performance and user experience.',
                ]}
                typingSpeed={10}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </p>

            <div className="flex items-center space-x-6">
              <StarBorder
                as="button"
                className="custom-class"
                color="white"
                speed="1s"
              >
                See All Projects
              </StarBorder>

              <button className="bg-gray-300 text-black px-6 py-3 font-medium duration-300 p-16" style={{borderRadius: "14px"}}>
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
