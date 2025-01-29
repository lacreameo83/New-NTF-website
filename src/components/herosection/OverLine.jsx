import React from 'react'
import Button from '../reuseable/Button';
import Blackbutton from '../reuseable/Blackbutton';
import RightImage from "../../assets/Right - Image.png";

function OverLine() {
  return (
    <div className='flex flex-col sm:flex-row w-full justify-center items-center'>
      <div className='flex flex-col  gap-[48px]'>
        <p className="inter text-[rgba(119,128,161,1)] font-[500] text-[15px] w-[459px] leading-[18.15pxpx] ">
          Overline
        </p>
        <p className="w-[590px] font-[600] text-[64px] leading-[64px] ">
          Sapien ipsum scelerisque convallis fusce
        </p>
        <p className="inter text-[rgba(119,128,161,1)] text-[16px] w-[459px] leading-[24px] ">
          Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
          pulvinar ultricies dolor feugiat aliquam commodo.
        </p>
        <div className='flex items-center gap-[16px]'>
          <Button text="Get started" />
          <Blackbutton text="Learn more" />
        </div>
      </div>
      <div className=''>
        <img src={RightImage} alt="RightImage" />
      </div>
    </div>
  );
}

export default OverLine
