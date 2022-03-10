import React from 'react';
import  { Circles } from 'react-loader-spinner';

function Spinner ({ message }) {
  return (
    <div className='flex flex-cold justify-center items-center w-full h-full'>
      <Circles 
        color={'#88ED24'}
        height={50}
        width={200}
        className='m-f'
      />

      <p className='text-lg text-center px-2 text-[#0079C6]'>{message}</p>
    </div>
  )
}

export default Spinner;