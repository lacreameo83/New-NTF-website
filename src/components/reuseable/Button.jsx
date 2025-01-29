// import React from 'react'

function Button({text,width}) {
  return (
    <button
      style={{
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingTop: "16px",
        paddingBottom: "16px",
      }}
      className={`${width}  shadow-[inset_4px_4px_4px_4px_rgba(255,255,255,0.1),_inset_-4px_4px_4px_-4px_rgba(0,0,0,0.1)]  cursor-pointer bg-gradient-to-r from-[rgba(71,69,208,1)] to-[rgba(42,39,201,1)] px-[24px] text-[16px] py-[24px] leading-[20.16px] text-center rounded-[24px]  `}
    >
     {text}
    </button>
  );
}

export default Button
