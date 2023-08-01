import React from "react";
import Layout from "../components/Layout/Layout";
import Button from "../components/UI/Button";
import Card from "../components/shared/Card/Card";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import User from "../assets/user.jpeg";
import ChatPreview from "../components/shared/Chats/ChatPreview";
import Badge from "../components/shared/Badge/Badge";
import ChatBubble from "../components/shared/Chats/ChatBubble";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuSend } from "react-icons/lu";
import { BsEmojiSmile } from "react-icons/bs";
import IconBadge from "../components/shared/Badge/IconBadge";

type Props = {};

const Conversations = (props: Props) => {
  const CHATS = [
    {
      id: 1,
      image: User,
      text: "Jane Doe",
      subText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sed",
      time: "2:55",
    },
    {
      id: 2,
      image: User,
      text: "Jane Doe",
      subText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sed ",
      time: "2:55",
    },
    {
      id: 3,
      image: User,
      text: "Jane Doe",
      subText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sed",
      time: "2:55",
    },
    {
      id: 4,
      image: User,
      text: "Jane Doe",
      subText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sed ",
      time: "2:55",
    },
    {
      id: 5,
      image: User,
      text: "Jane Doe",
      subText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sed",
      time: "2:55",
    },
    {
      id: 6,
      image: User,
      text: "Jane Doe",
      subText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sed ",
      time: "2:55",
    },
    {
      id: 7,
      image: User,
      text: "Jane Doe",
      subText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sed",
      time: "2:55",
    },
  ];

  const messages = [
    { text: "Hello!", position: "left", time: "12:55am" },
    { text: "Hi there!", position: "right", time: "12:57am" },
    { text: "How's it going?", position: "left", time: "12:57am"  },
    { text: "All good!", position: "right", time: "12:57am"  },
    { text: "Hello!", position: "left", time: "12:55am" },
    { text: "Hi there!", position: "right", time: "12:57am" },
    { text: "How's it going?", position: "left", time: "12:57am"  },
    { text: "All good!", position: "right", time: "12:57am"  },
  ];

  return (
    <Layout>
      <section className="flex items-center justify-between mt-10">
        <h2 className="text-2xl">Conversations With Customers</h2>
        <Button text="New Message" classNames="px-10 py-5" />
      </section>

      <main>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <Card classNames="p-4 h-[650px]">
            <div className="flex items-center justify-between">
              <h2>Contacts</h2>
              <p>34</p>
            </div>
            <div className="rounded border p-2 flex items-center justify-betweenn mt-3">
              <AiOutlineSearch size={25} className="mr-4" />
              <input
                type="text"
                className="outline-none bg-transparent w-full"
              />
            </div>

            <section className="max-h-[32rem] overflow-y-auto">
              {CHATS.map((chat) => (
                <ChatPreview
                  image={chat.image}
                  text={chat.text}
                  time={chat.time}
                  subText={chat.subText}
                  key={chat.id}
                />
              ))}
            </section>
          </Card>
          <Card classNames="p-3">
            <div className="flex justify-between mb-3">
              <div className="flex">
                <img
                  src={User}
                  className="w-28 h-28 mr-5 object-cover rounded-md"
                  alt=""
                />
                <div>
                  <h3 className="text-xl mb-3">John Doe</h3>
                  <div>
                    <div className="flex">
                      <span className="bg-[#5570F1] rounded-full px-3 py-2" />
                      <p>Online</p>

                      <p>12:55 am</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  <Badge badgeNumber="New Customer" classNames="mr-3" />
                  <a href="" className="text-blue-500">
                    View Profile
                  </a>
                </div>
                <div className="flex items-center justify-end mt-4">
                  <HiOutlineShoppingBag size={22} />
                  <p className="text-gray-600">0 Order</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex flex-col items-center space-y-2 max-h-[26rem] overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  className={`${
                    message.position === "left"
                      ? "justify-start mr-auto"
                      : "justify-end ml-auto"
                  } flex`}
                  key={index}
                >
                  <ChatBubble text={message.text} position={message.position} time={message.time} />
                </div>
              ))}
            </div>
            <div className="rounded border py-1 px-2 mt-4 flex items-center justify-between">
              <div className="mr-4">
                <IconBadge Icon={AiOutlinePlus} classNames="bg-[#FFEAD1]" />
              </div>
              <input type="text" placeholder="Your Message" className="outline-none bg-transparent w-full" />

              <div className="flex items-center">
                <BsEmojiSmile size={22} className="mr-2" />
                <button className="flex bg-[#FFEAD1] p-2 rounded-md">
                  Send
                  <LuSend size={20} className="ml-1" />
                </button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </Layout>
  );
};

export default Conversations;
