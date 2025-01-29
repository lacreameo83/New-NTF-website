import React, { useRef } from "react";
import Blackbutton from "../reuseable/Blackbutton";
import AuctionCards from "../cards/AuctionCards";
import { IoIosArrowForward } from "react-icons/io";
import item1 from "..//../assets/item1.png";
import item2 from "..//../assets/item2.png";
import item3 from "..//../assets/item3.png";
import Usercard from "../cards/Usercard";

// icons
import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import icon3 from "../../assets/icons/icon3.png";
import icon4 from "../../assets/icons/icon4.png";

function PopularAution() {
  const containerRef = useRef(null);

  

  const data = [
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: 3.19,
      time: 20,
      image: item1,
      total: 122,
      bid: 101,
      user: [
        {
          user1: "1",
          user2: "2",
          user3: "3",
          user4: "4",
        },
      ],
    },
    {
      title: "Dui accumsan leo vestibulum ornare eu",
      price: 1.11,
      time: 40,
      image: item2,
      total: 522,
      bid: 101,
      user: [
        {
          user1: "",
          user2: "",
          user3: "",
          user4: "",
        },
      ],
    },
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: 3.19,
      time: 10,
      image: item3,
      total: 922,
      bid: 101,
      user: [
        {
          user1: "3",
          user2: "3",
          user3: "33",
          user4: "3",
        },
      ],
    },
    {
      title: "Senectus adipiscing nascetur accumsan etiam",
      price: 1.63,
      time: 5,
      image: item1,
      total: 102,
      bid: 101,
      user: [
        {
          user1: "2",
          user2: "3",
          user3: "3",
          user4: "3",
        },
      ],
    },
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: 3.19,
      time: 30,
      image: item2,
      total: 12,
      bid: 101,
      user: [
        {
          user1: "",
          user2: "",
          user3: "",
          user4: "",
        },
      ],
    },
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: 3.19,
      time: 20,
      image: item3,
      total: 722,
      bid: 101,
      user: [
        {
          user1: "",
          user2: "",
          user3: "",
          user4: "",
        },
      ],
    },
  ];
  return (
    <div className="w-full mt-8 flex-center gap-[60px] flex-col">
      <div className="flex flex-col justify-center items-center gap-[34px]">
        <p
          style={{ marginTop: "60px" }}
          className="inter  text-[16px] text-[rgba(119,128,161,1)] leading-1[24px] font-[400]"
        >
          Overline
        </p>
        <p className="font-[600] text-[20px] leading-[25.2px] ">
          Most popular live auctions
        </p>
        <div className="flex items-center gap-[16px]">
          <Blackbutton text="Architecture" />
          <Blackbutton text="Photography" />
          <Blackbutton text="Games" />
          <Blackbutton text="Music" />
        </div>
      </div>

      <div
        style={{ marginTop: "40px", marginBottom: "60px" }}
        className="flex relative items-center gap-2 overflow-hidden"
      >
        {/* Scrollable container */}
        <div
          ref={containerRef}
          className="flex gap-8 md:w-[900px] xl:w-fit  overflow-x-auto  scrollbar-hide"
        >
          {data.map((el, i) => (
            <AuctionCards
              widthcontainer={"w-[212px]"}
              width={"w-[212px]"}
              key={i}
              text={el.title}
              btn={el.price}
              time={el.time}
              image={el.image}
              height={"h-[355px]"}
              visibility={"hidden"}
              textsize={"16px"}
              heightcontaine={"h-[548px] "}
              bg={"bg-[rgba(38,40,64,1)]"}
              userideas={
                <Usercard
                  width={"w-[212px]"}
                  visible={"hidden"}
                  key={i}
                  users={el.user.map((el, i) => {
                    <p className="w-[30px] h-[30px] bg-blue-600" key={i}>
                      {el}
                    </p>;
                  })}
                  total={el.total}
                  bidind={el.bid}
                />
              }
            />
          ))}
        </div>


      </div>

      <div>
        <Blackbutton text="Show me more" />
      </div>
      <div
        style={{ marginTop: "50px", marginBottom: "80px" }}
        className="flex items-center justify-center gap-[66px]"
      >
        <div className="flex flex-col items-center justify-center  gap-[24px]">
          <img className="h[32px] w-[32px]" src={icon1} alt="Icon" />
          <div className="flex flex-col items-center justify-center">
            <p className="font-[600] text-[20px] leading-[25.2px] ">300k</p>
            <p className="inter text-[16px] text-[rgba(119,128,161,1)] leading-1[24px] font-[400]">
              Users Active
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-[16px]">
          <img className="h[32px] w-[32px]" src={icon2} alt="Icon" />
          <div className="flex flex-col items-center justify-center">
            <p className="font-[600] text-[20px] leading-[25.2px] ">52,5k</p>
            <p className="inter text-[16px] text-[rgba(119,128,161,1)] leading-1[24px] font-[400]">
              Artworks
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col gap-[16px]">
          <img className="h[32px] w-[32px]" src={icon3} alt="Icon" />
          <div className="flex flex-col items-center justify-center">
            <p className="font-[600] text-[20px] leading-[25.2px] ">17,5k</p>
            <p className="inter text-[16px] text-[rgba(119,128,161,1)] leading-1[24px] font-[400]">
              Artists
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col gap-[16px]">
          <img className="h[32px] w-[32px]" src={icon4} alt="Icon" />
          <div className="flex flex-col items-center justify-center">
            <p className="font-[600] text-[20px] leading-[25.2px] ">35.58</p>
            <p className="inter text-[16px] text-[rgba(119,128,161,1)] leading-1[24px] font-[400]">
              ETH Spent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularAution;
