import React from 'react'

function Blackbutton({text,width}) {
  return (
    <button
      style={{
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingTop: "16px",
        paddingBottom: "16px",
      }}
      className={`${width}  shadow-[inset_4px_4px_4px_4px_rgba(255,255,255,0.1),_inset_-4px_4px_4px_-4px_rgba(0,0,0,0.1)]  cursor-pointer text-[rgba(119,128,161,1)] text-[16px]  leading-[20.16px] text-center rounded-[24px] border-[2px] border-[rgba(38,40,64,1)] `}
    >
      {text}
    </button>
  );
}

export default Blackbutton
