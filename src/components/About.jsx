import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
         Myself Jay Patel, student at Vellore Institute of Technology, Bhopal 
         pursuing Computer Science & Engineering.Highly self motivated student  with a passion for learning and developing software solutions.
         Innovative and results-driven computer science student with a meticulous approach to problem-solving. 
         I am a proactive learner committed to continuous growth, serving as a catalyst for innovation within dynamic development environments.Showcasing a forward-thinking mindset and a vision for pioneering solutions in the realm of computer science.

        
        </p>

        <br />

        <p className="text-xl">
          Along with side of my academics, I love to play football and cricket
          side by side watching it too. I love to listening music at all my 
          free time. Part time chess player. Likes to travel new places and 
          loves to explore new things! 
        </p>
      </div>
    </div>
  );
};

export default About;