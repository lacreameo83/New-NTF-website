// import React from 'react'
import { TfiAlarmClock } from "react-icons/tfi";
// import Usercard from './Usercard';

function AuctionCards({
  btn,
  text,
  time,
  image,
  userideas,
  width,
  widthcontainer,
  visibility,
  visible,
  border,
  textsize,
  padding,
  height,
  heightcontaine,
  bg
}) {
  const data = [
    {
      total: 122,
    },
    {
      total: 422,
    },
    {
      total: 322,
    },
    {
      total: 122,
    },
    {
      total: 102,
    },
    {
      total: 92,
    },
  ];
  return (
    <div
      style={{ paddingLeft: `${padding}`, paddingRight: `${padding}` }}
      className={`${widthcontainer} ${border} flex justify-around flex-col ${heightcontaine} border-[rgba(38,40,64,1)] rounded-[20px] `}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={`${height} bg-center bg-cover bg-no-repeat ${width} rounded-[10px]  `}
      ></div>
      <div className={` ${width} flex items-center justify-between `}>
        <p className={`font-[600] w-[276px] leading-[25.2px] ${textsize} `}>
          {text}
        </p>
        <button
          style={{
            paddingRight: "14px",
            paddingTop: "8px",
            paddingLeft: "14px",
            paddingBottom: "8px",
          }}
          className={` ${visibility}   bg-[rgba(81,76,255,0.15)] text-[rgba(81,76,255,1)] font-[600] leading-[20.16px] text-[16px] text-center  `}
        >
          {btn} ETH
        </button>
      </div>

      <div className="flex w-full items-center justify-between ">
        <div className="flex gap-[8px] items-center">
          <div className="text-[20px]">
            <TfiAlarmClock />
          </div>
          <p className="inter text-[14px] leading-[21px] font-[400]">
            {time} min left
          </p>
        </div>
        <button
          style={{
            paddingRight: "14px",
            paddingTop: "8px",
            paddingLeft: "14px",
            paddingBottom: "8px",
          }}
          className={`${visible}  bg-[rgba(81,76,255,0.15)] text-[rgba(81,76,255,1)] font-[600] leading-[20.16px] text-[16px] text-center  `}
        >
          {btn} ETH
        </button>
      </div>

      <div className={`h-[1px] ${width} ${bg} `}></div>
      <div>{userideas}</div>
    </div>
  );
}

export default AuctionCards
