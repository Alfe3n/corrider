import { React, useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Button } from "@chakra-ui/react";
import { GrAttachment } from "react-icons/gr";
import { FiVideo } from "react-icons/fi";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { AiOutlineCamera, AiOutlineSend } from "react-icons/ai";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import Header from "./components/Header";

function Chatpage() {
  const [data, setData] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://qa.corider.in/assignment/chat?page=0")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        console.log(data.chats);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="page-container w-5/6 ">
      {data ? (
        <>
          <Header data={data} />
          <div className="message-container flex flex-col w-full">
            {data.chats.map((item) =>
              item.sender.self ? (
                <div key={item.id}>
                  <div className="chat-container flex mb-4 bg-blue w-full self-end gap-x-2">
                    <p
                      className="text-lg text-white"
                      dangerouslySetInnerHTML={{ __html: item.message }}
                    ></p>
                  </div>
                </div>
              ) : (
                <>
                  <div
                    className="chat-container flex mb-4 w-full gap-x-2"
                    key={item.id}
                  >
                    <img
                      src={item.sender.image}
                      className="h-8 rounded-full "
                    ></img>
                    {/* <p className="text-lg text-grey">{item.message}</p>
                     */}
                    <p
                      className="text-lg text-grey"
                      dangerouslySetInnerHTML={{ __html: item.message }}
                    ></p>
                  </div>
                </>
              )
            )}
          </div>
        </>
      ) : (
        <>
          {/* <p>hello</p> */}
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            className="mt-20 ml-40"
          />
        </>
      )}
      <div className=" flex items-center sticky bottom-0 w-full mb-10">
        <input
          placeholder="Enter your message"
          type="text"
          className="w-full h-10"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <div className="flex items-center bg-white">
          <Popover placement="top">
            <PopoverTrigger>
              <Button>
                <GrAttachment />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody className="rounded-full bg-green text-white">
                <div className="flex justify-around">
                  <AiOutlineCamera className="text-2xl" />
                  <FiVideo className="text-2xl" />
                  <HiOutlineDocumentDownload className="text-2xl" />
                </div>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <AiOutlineSend className=" text-2xl " />
        </div>
      </div>
    </div>
  );
}

export default Chatpage;
