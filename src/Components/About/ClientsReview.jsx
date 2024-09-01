import React from 'react';
import review from './ClientData';
import { HeaderImage } from '../../assets/image';
import { TextRating } from '../../index';

function ClientReview() {
  return (
    <div
      className="relative w-full h-auto bg-cover bg-center py-12"
      style={{ backgroundImage: `url(${HeaderImage})` }}
    >
      <div className="absolute inset-0 bg-red-700 bg-opacity-80 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {review.map((item) => (
          <div
            className="bg-white p-6 rounded-lg shadow-lg"
            key={item.id}
          >
            <div className="flex gap-x-4 items-center mb-4">
              <img src={item.image} className="rounded-full w-16 h-16" alt={item.name} />
              <div>
                <h1 className="text-xl font-bold uppercase text-[#6c6a6a]">
                  {item.name}
                </h1>
                <p className="text-sm text-[#797777] font-semibold uppercase">
                  {item.position}
                </p>
              </div>
            </div>
            <TextRating />
            <p className="text-lg text-[#797777] font-semibold mt-4">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientReview;
