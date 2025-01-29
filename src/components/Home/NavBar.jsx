import React from 'react'
import logo from '../../assets/logo.png'
import Button from '../reuseable/Button';
import Blackbutton from '../reuseable/Blackbutton';

function NavBar() {
  return (
    <div className="h-[117px] w-full flex-center ">
      <div
        // style={{ paddingLeft: "20px", paddingRight: "20px" }}
        className="max-w-[1551px]  w-[100%]  flex items-center justify-between"
      >
        <div className="h-[34px] w-[34px] ">
          <img src={logo} alt="logo" />
        </div>

        <div className=" ">
          <ul className="hidden sm:flex    text-[rgba(119,128,161,1)] font-[600] cursor-pointer transition-all easy-in text-[16px] leading-[20.16px]  items-center gap-[24px]  ">
            <li className="hover:text-[rgb(207, 207, 234)] ">Auctions</li>
            <li className="hover:text-[rgb(207, 207, 234)] ">Roadmap</li>
            <li className="hover:text-[rgb(207, 207, 234)] ">Discover</li>
            <li className="hover:text-[rgb(207, 207, 234)] ">Community</li>
          </ul>
        </div>

        <div className="hidden sm:flex  items-center gap-[16px]">
          <Blackbutton text="Contact" />

          <Button text=" My account" />
        </div>
      </div>
    </div>
  );
}

export default NavBar
