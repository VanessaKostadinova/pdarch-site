import React from 'react';

export const WidthDiv = ({ children }: { children: React.ReactNode }) => (
  <div className='w-full md:w-4/5 lg:w-2/3 xl:w-1/2 px-4 md:px-0'>
    { children }
  </div>
);

