import React from 'react';
import teamData from './TeamData';

function Team() {
  return (
    <div className="relative w-full min-h-screen bg-slate-100 py-12">
      <h1 className='text-2xl md:text-3xl lg:text-4xl container mx-auto uppercase font-bold text-[#767373] text-center'>
        our teams
      </h1>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-6">
        {teamData.map((item) => (
          <div
            className="bg-white p-4 md:p-6 rounded-lg shadow-lg"
            key={item.id}
          >
            <img className="w-full h-auto rounded-t-lg mb-4" src={item.image} alt={item.name} />
            <h2 className="text-lg md:text-xl font-bold text-[#6b6868] uppercase font-serif">
              {item.name}
            </h2>
            <p className="text-sm md:text-lg uppercase font-serif text-[#a3a2a2] mt-2">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
