import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full space-y-8">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10 sm:mt-20">
          With a strong foundation in software development from my academic journey,
          I am eager to dive deeper into the industry and apply my skills in a professional 
          setting. My passion lies in creating seamless and user-friendly web applications,
          and I thrive on the challenge of turning innovative ideas into reality. My technical
          toolkit includes a deep understanding of modern web technologies, which I continuously
          strive to expand and refine.
        </p>
        <p className="text-xl">
          I believe that technology has the power to solve real-world problems and improve lives.
          As a dedicated learner and problem-solver, I am always looking for opportunities to grow 
          and make a positive impact. I enjoy working in collaborative environments where I can share 
          knowledge and learn from others. My ultimate goal is to contribute to projects that drive 
          innovation and deliver meaningful solutions to users.
        </p>
      </div>
    </div>
  );
};

export default About;
