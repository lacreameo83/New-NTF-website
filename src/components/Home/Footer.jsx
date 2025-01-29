import React from 'react'
import Button from '../reuseable/Button';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from '../../assets/logo.png'
function Footer() {
  return (
    <div style={{marginBottom:'20px'}}  className="flex-center  w-full  ">
      <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row">
        <div
          style={{ padding: "30px" }}
          className="gap-5 sm:gap-0 sm:h-[397px] max-w-[464px] w-[90%] md:w-[50%] xl:w-[100%] rounded-l-[20px] sm:border-[1px] border-[rgba(38,40,64,1)] flex flex-col  justify-between "
        >
          <div className=" flex items-center gap-[15px]">
            <img src={logo} alt="logo" />
            <p className="font-bold text-[25px]">NFT Market</p>
          </div>

          <div className="flex    items-center gap-[10px]  xl:gap-[40px]">
            <p className="inter text-center cursor-pointer text-[rgba(119,128,161,1)] text-[14px] leading-[21px] font-[400] ">
              Support
            </p>
            <p className="inter text-center cursor-pointer text-[rgba(119,128,161,1)] text-[14px] leading-[21px] font-[400] ">
              Term of service
            </p>
            <p className="inter text-center cursor-pointer text-[rgba(119,128,161,1)] text-[14px] leading-[21px] font-[400] ">
              License
            </p>
          </div>
        </div>

        {/* <div> */}
        <div
          style={{ padding: "30px" }}
          className="h-[397px] max-w-[464px] w-[90%] md:w-[50%] xl:w-[100%]  sm:border-y-[1px] border-[rgba(38,40,64,1)] flex flex-col  justify-between "
        >
          <div>
            <ul className="flex flex-col  text-[rgba(119,128,161,1)]  font-[600] cursor-pointer transition-all easy-in text-[16px] leading-[20.16px]   gap-[24px]  ">
              <li className="hover:text-[rgb(207, 207, 234)] ">Auctions</li>
              <li className="hover:text-[rgb(207, 207, 234)] ">Roadmap</li>
              <li className="hover:text-[rgb(207, 207, 234)] ">Discover</li>
              <li className="hover:text-[rgb(207, 207, 234)] ">Community</li>
            </ul>
          </div>
          <div>
            <Button text=" My account" />
          </div>
          <div className="flex items-center text-[20px] gap-[25px]">
            <FaSquareFacebook />
            <FaLinkedin />
            <FaGithubSquare />
            <FaTwitterSquare />
            <FaInstagram />
          </div>
        </div>
        {/* </div> */}

        {/* <div> */}
        <div
          style={{ padding: "30px" }}
          className="h-[397px] max-w-[464px] w-[90%] md:w-[50%] xl:w-[100%] rounded-r-[20px] sm:border-[1px] border-[rgba(38,40,64,1)] flex flex-col  justify-between "
        >
          <div>
            <p className="inter font-normal text-[16px] leading-[24px] text-[rgba(119,128,161,1)]">
              Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet
              velit, sed egestas in. Id nam semper dolor tellus vulputate eget
              turpis.
            </p>
          </div>

          <div
            style={{ padding: "20px" }}
            className="flex justify-between max-w-[367px] h-[52px] bg-[rgba(255,255,255,1)] rounded-[16px] shadow-[0px_25px_75px_0px_rgba(0,0,0,0.5)]  items-center  gap-[40px]"
          >
            <p className="text-[rgba(119,128,161,1)] cursor-pointer inter font-[400] text-[16px] leading-[19.36px] ">
              Newsletter
            </p>
            <p className="text-[rgba(42,39,201,1)] cursor-pointer font-[600] text-[16px] cusor-pointer leading-[20.16px] text-center ">
              Sign in
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Footer
