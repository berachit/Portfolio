import React from 'react';
import { motion } from 'motion/react';
import profilePhoto from '../assets/images/profile-photo.png';
import portfolioData from '../data/portfolioData.json';

const About: React.FC = () => {
  const { personal, about } = portfolioData;

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    },
  };

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 max-w-6xl mx-auto px-0 lg:px-6 min-w-0">
      {/* Section Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="mb-10 sm:mb-12 lg:mb-20 border-b border-white/10 pb-4"
      >
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase">ABOUT ME</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-between gap-10 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-24">
        {/* Profile Photo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="md:w-2/5 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-3 border border-moonstone/20 rounded-2xl group-hover:border-moonstone group-hover:shadow-[0_10px_25px_-5px_rgba(224,231,255,0.25),0_8px_10px_-6px_rgba(0,0,0,0.1)] transition-all duration-500" />
            <img
              src={profilePhoto}
              alt={personal.name}
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl relative z-10"
            />
          </div>
        </motion.div>

        {/* Bio Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="w-full md:w-3/5 space-y-5 sm:space-y-6 lg:space-y-8 min-w-0"
        >
          <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed break-words">
            {about.greeting} {about.intro}
          </p>
          {about.education && (
            <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed break-words">
              {about.education}
            </p>
          )}
          {about.philosophy && (
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/90 break-words">
              {about.philosophy}
            </p>
          )}
        </motion.div>
      </div>

      {/* Tech Stack */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="glass-card p-6 sm:p-8 lg:p-10 xl:p-16 rounded-2xl sm:rounded-[2rem] min-w-0"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 lg:mb-12 text-white">How I build things</h3>
        <div className="flex flex-col gap-6 sm:gap-8">
          {about.techStack.map((stack) => (
            <div key={stack.category} className="flex flex-col md:flex-row md:items-start gap-3 sm:gap-4 min-w-0">
              <h4 className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-[#aaa] md:w-56 shrink-0 pt-0 md:pt-2 break-words">{stack.category}</h4>
              <div className="flex flex-wrap gap-3">
                {stack.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{
                      scale: 1.05,
                      zIndex: 20,
                      borderColor: "rgba(224, 231, 255, 0.4)",
                      boxShadow: "0 0 8px rgba(224, 231, 255, 0.15)"
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17
                    }}
                    className="relative cursor-default px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide bg-white/[0.04] text-white border border-white/10 hover:bg-white/[0.08] transition-colors"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
