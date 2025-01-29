import React from 'react'

function TripleCard({image}) {
  return (
    <div className='w-[368px] h-[120px] flex '>
      <div>
      <img src={`${image}`}  alt='image' />
      </div>
      <div>
      <p className='font-[600] text-[16px] leading-[20.16px] '>{title}</p>

      </div>
    </div>
  )
}

export default TripleCard
