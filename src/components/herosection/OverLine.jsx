import React from 'react'
import Button from '../reuseable/Button';
import Blackbutton from '../reuseable/Blackbutton';
import RightImage from "../../assets/Right - Image.png";

function OverLine() {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="max-w-[1392px] grid grid-cols-1 xl:grid-cols-2 md:w-[90%] xl:w-[100%] ">
        <div className="flex flex-col  gap-[48px]">
          <p className="inter text-[rgba(119,128,161,1)] font-[500] text-[15px] w-[459px] leading-[18.15pxpx] ">
            Overline
          </p>
          <p className=" xl:w-[590px] font-[600] text-[64px] leading-[64px] ">
            Sapien ipsum scelerisque convallis fusce
          </p>
          <p className="inter text-[rgba(119,128,161,1)] text-[16px] xl:w-[459px] leading-[24px] ">
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
            pulvinar ultricies dolor feugiat aliquam commodo.
          </p>
          <div className="flex items-center gap-[16px]">
            <Button text="Get started" />
            <Blackbutton text="Learn more" />
          </div>
        </div>
        <div className="">
          <img src={RightImage} alt="RightImage" />
        </div>
      </div>
    </div>
  );
}

export default OverLine
