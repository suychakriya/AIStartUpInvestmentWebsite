/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function ProductItem({id, name, category, fund, percent, image, website }) {

  return (
    <div className="card bg-white rounded-2xl">
      <Link href={`/Layout/Detailpage?id=${id}`}>
        <img
          src={image}
          alt={name}
          className="rounded-t-2xl shadow object-cover h-[50%] w-full"
        />
        <div className="flex flex-col justify-center p-3">
          <p className='text-sm text-primary font-semibold py-1'>Funding Project</p>
        
          <h2 className="text-sm font-bold text-black pb-1">{name}</h2>
          <p className="mb-2 text-xs text-gray-400 pb-1">{category}</p>
          <div className="w-full bg-gray-200 rounded-full h-1.5 bg-grayprogressbar">
            <div className="bg-primary h-1.5 rounded-full" style={{width: `${percent}`}} ></div>
          </div>
          <div className='flex justify-between py-2 '>
            <p className='mb-2 text-xs font-semibold text-black pb-1'>{percent} funded</p>
            <p className='mb-2 text-xs font-semibold text-black pb-1'>{fund} raised</p>
          </div>
        </div>
      </Link>
    </div>
  );
}