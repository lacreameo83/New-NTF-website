import React, { useRef } from 'react'
import AuctionCards from '../../cards/AuctionCards';
import { IoIosArrowForward } from "react-icons/io";
import item1 from "../../assets/item1.png";
import item2 from "../../assets/item2.png";
import item3 from "../../assets/item3.png";
import Usercard from '../../cards/Usercard';

function MainSection() {
    const containerRef = useRef(null);

    const handleNext = () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: 200, behavior: "smooth" }); 
      }
    };
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
    <div className=" h-fit  w-full">
      <p className=" text-[36px] font-[600] leading-[45.36px] text-center ">
        Latest live auctions
      </p>
      <div
        style={{ marginTop: "40px", marginBottom: "60px" }}
        className="flex relative items-center gap-2 overflow-hidden"
      >
        {/* Scrollable container */}
        <div
          ref={containerRef}
          className="flex gap-8 overflow-x-hidden scrollbar-hide"
        >
          {data.map((el, i) => (
            <AuctionCards
              key={i}
              width={"w-[400px]"}
              widthcontainer={"w-[448px]"}
              text={el.title}
              btn={el.price}
              time={el.time}
              image={el.image}
              height={"h-[520px]"}
              visible={"hidden"}
              border={"border-[1px] "}
              padding={"20px"}
              textsize={"20px"}
              heightcontaine={"h-[767px] "}
              bg={"bg-[rgba(38,40,64,1)]"}
              userideas={
                <Usercard
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

        {/* Arrow button */}
        <div
          onClick={handleNext}
          className="absolute shadow-[0px_25px_75px_0px_rgba(6,7,20,0.1)] backdrop-blur-[7px] right-70 top-[30%] w-[120px] bg-[rgba(38,40,64,0.8)] rounded-full flex-center h-[120px] cursor-pointer"
        >
          <IoIosArrowForward className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default MainSection
