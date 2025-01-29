import  { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../reuseable/Button";
import image from "../../assets/Image.png";
import item from "../../assets/item1.png";
import pic from "../../assets/item2.png";
import img from "../../assets/item3.png";
import AuctionCards from "../cards/AuctionCards";
import Usercard from "../cards/Usercard";
import Blackbutton from "../reuseable/Blackbutton";

function TripleSection() {
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
      image:item,
      total: 122,
      bid: 101,
      user: ["1", "2", "3", "4"],
    },
    {
      title: "Dui accumsan leo vestibulum ornare eu",
      price: 1.11,
      time: 40,
      image:pic,
      total: 522,
      bid: 101,
      user: [],
    },
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: 3.19,
      time: 10,
      image:img,
      total: 922,
      bid: 101,
      user: ["3", "3", "33", "3"],
    },
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: 3.19,
      time: 10,
      image:img,
      total: 922,
      bid: 101,
      user: ["3", "3", "33", "3"],
    },
  ];

  return (
    <div className="flex justify-center items-center relative">
      <div className="max-w-[1392px] w-full grid grid-cols-3">
        {/* Left Section */}
        <div
          //   style={{ paddingLeft: "50px" }}
          className="relative h-[841px] overflow-hidden  flex items-center justify-around flex-col  border-[1px] border-[rgba(38,40,64,1)] rounded-[20px] w-[448px]"
        >
          <p className="font-semibold w-[314px] text-[32px] leading-[40px]">
            Check out the hottest Sale offers
          </p>
          <div
            ref={containerRef}
            className="flex gap-8 w-[350px] element  overflow-x-auto scrollbar-hide"
          >
            {data.map((el, i) => (
              <AuctionCards
                widthcontainer="w-[212px]"
                width="w-[212px]"
                key={i}
                text={el.title}
                btn={el.price}
                time={el.time}
                image={el.image}
                height="h-[355px]"
                visibility="hidden"
                textsize="16px"
                heightcontaine="h-[548px]"
                userideas={
                  <Usercard
                    width="w-[212px]"
                    visible="hidden"
                    key={i}
                    users={el.user.map((user, index) => (
                      <p className="w-[30px] h-[30px] bg-blue-600" key={index}>
                        {user}
                      </p>
                    ))}
                    total={el.total}
                    bidind={el.bid}
                  />
                }
              />
            ))}
            <div
              onClick={handleNext}
              className="absolute shadow-[0px_25px_75px_0px_rgba(6,7,20,0.1)] backdrop-blur-[7px] right-20 top-[30%] w-[80px] bg-[rgba(38,40,64,0.8)] rounded-full flex-center h-[80px] cursor-pointer"
            >
              <IoIosArrowForward className="text-white text-2xl" />
            </div>
          </div>

          <div>
            <Blackbutton width={"w-[368px]"} text="Show me more" />
          </div>
        </div>

        {/* Center Section */}
        <div className=" text-center gap-4 h-[841px] overflow-hidden  flex items-center justify-around flex-col  border-[1px] border-[rgba(38,40,64,1)] rounded-[20px] w-[448px]">
          <div className="h-fit  w-full  ">
            <img
              src={image}
              className="object-cover bg-transparent h-[500px]"
              alt="NFT Preview"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-semibold text-2xl leading-[30px] w-[314px]">
              Get started creating & selling your NFTs
            </p>
            <p className="text-gray-500 w-[275px] leading-[21px] text-sm font-normal">
              Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat.
              Mi est sit.
            </p>
          </div>
          <Button width={"w-[368px]"} text="Get started" />
        </div>

        {/* Right Section (Empty) */}
        <div className="h-[841px] overflow-hidden   justify-around flex-col  border-[1px] border-[rgba(38,40,64,1)] rounded-[20px]   flex items-center    w-[448px]">
          <p className="font-semibold w-[314px]   text-[32px] leading-[40px]">
            Check out the hottest Sale offers
          </p>
          <div className="flex ">
            <div className="flex w-[368px] flex-col gap-10">
              {data.map((el, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    style={{ backgroundImage: `url(${el.image})` }}
                    className="h-[120px] w-[120px] bg-cover rounded-3xl bg-no-repeat bg-center "
                  ></div>
                  <AuctionCards

                    // widthcontainer="w-[212px]"
                    width="w-[212px]"
                 
                    text={el.title}
                    btn={el.price}
                    time={el.time}
                    // image={el.image}
                    // height="h-[355px]"
                    visibility="hidden"
                    textsize="16px"
                    // heightcontaine="h-[548px]"
                    userideas={
                      <Usercard
                        width="w-[212px]"
                        visible="hidden"
                        key={i}
                        users={el.user.map((user, index) => (
                          <p
                            className="w-[30px] h-[30px] bg-blue-600"
                            key={index}
                          >
                            {user}
                          </p>
                        ))}
                        total={el.total}
                        bidind={el.bid}
                      />
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <Blackbutton width={"w-[368px]"} text="Show me more" />
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default TripleSection;

