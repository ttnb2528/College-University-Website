import React from 'react'

const Title = ({ title, subTitle}) => {
  return (
    <div className='title text-center text-[#212ea0] text-base font-semibold uppercase m-[70px_0_30px]'>
        <p>{subTitle}</p>
        <h2 className='text-4xl text-[#000f38] mt-1 normal-case'>{title}</h2>
    </div>
  )
}

export default Title