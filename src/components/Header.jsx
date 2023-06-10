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
    <div className="mt-4">
      <div className="first-row flex items-center font-extrabold text-2xl justify-between">
        <div className="flex items-center gap-x-2">
          <IoArrowBackSharp />
          {flag ? (
            <input
              type="text"
              value={tripName}
              disabled
              onChange={(e) => setTripName(e.target.value)}
            ></input>
          ) : (
            <input
              type="text"
              value={tripName}
              onChange={(e) => setTripName(e.target.value)}
            ></input>
          )}
        </div>

        <FiEdit onClick={() => setFlag(!flag)} />
      </div>
      <div className="second-row flex items-center justify-between my-2">
        <div className="h-8 bg-blue rounded-full">p</div>
        <div className="flex flex-col text-grey">
          <p>
            From
            <span className=" text-black font-extrabold">
              {props.data.from}
            </span>
          </p>
          <p>
            To{" "}
            <span className="font-extrabold text-black "> {props.data.to}</span>
          </p>
        </div>
        <Menu placement="bottom">
          <MenuButton as={Button}>
            <BsThreeDotsVertical />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <div className="flex items-center">
                <BsPeople />
                <p className="ml-2">Members</p>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="flex items-center">
                <BsTelephone />
                <p className="ml-2">Share Number</p>
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
      <hr className="my-6"></hr>
    </div>
  );
}

export default Header;
