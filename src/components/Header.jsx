import { React, useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { GoReport } from "react-icons/go";
import { BsPeople, BsTelephone, BsThreeDotsVertical } from "react-icons/bs";
import { IoArrowBackSharp } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
function Header(props) {
  const [tripName, setTripName] = useState(props.data.name);
  const [flag, setFlag] = useState(true);
  return (
    <div className="sticky top-0 z-10 w-full mt-4 bg-[#faf9f4]">
      <div className="flex items-center justify-between text-2xl font-extrabold first-row">
        <div className="flex items-center gap-x-2">
          <button>
            <IoArrowBackSharp />
          </button>
          {flag ? (
            <input
              type="text"
              value={tripName}
              disabled
              className=" w-fit"
              onChange={(e) => setTripName(e.target.value)}
            ></input>
          ) : (
            <input
              className="px-1 border-2 border-black rounded-md w-fit"
              type="text"
              value={tripName}
              onChange={(e) => setTripName(e.target.value)}
            ></input>
          )}
        </div>
        <button>
          <FiEdit onClick={() => setFlag(!flag)} />
        </button>
      </div>
      <div className="flex items-center justify-between my-2 second-row">
        {/* <div className="h-8 rounded-full bg-blue">
          {props.data.chats.map((item) => {

            return <img src={item.sender.image} className="h-8 rounded-full" />;
          })}
        </div> */}
        <div></div>
        <div className="flex flex-col text-grey ">
          <p>
            From
            <span className="ml-2 font-extrabold text-black ">
              {props.data.from}
            </span>
          </p>
          <p>
            To
            <span className="ml-2 font-extrabold text-black ">
              {" "}
              {props.data.to}
            </span>
          </p>
        </div>
        <Menu placement="bottom">
          <MenuButton as={Button}>
            <BsThreeDotsVertical />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <div className="flex items-center bg-white">
                <BsPeople className="bg-white" />
                <p className="ml-2 bg-white">Members</p>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="flex items-center">
                <BsTelephone className="bg-white" />
                <p className="ml-2 bg-white">Share Number</p>
              </div>
            </MenuItem>

            <MenuItem>
              <div className="flex items-center">
                <GoReport />
                <p className="ml-2">Report</p>
              </div>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <hr className="w-screen my-6"></hr>
    </div>
  );
}

export default Header;
