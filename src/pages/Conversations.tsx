import React from "react";
import Layout from "../components/Layout/Layout";
import Button from "../components/UI/Button";
import Card from "../components/shared/Card/Card";
import { AiOutlineSearch } from "react-icons/ai";
import User from "../assets/user.jpeg";
import ChatPreview from "../components/shared/Chats/ChatPreview";
import Badge from "../components/shared/Badge/Badge";

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
  ];

  return (
    <Layout>
      <section className="flex items-center justify-between mt-10">
        <h2 className="text-2xl">Conversations With Customers</h2>
        <Button text="New Message" classNames="px-10 py-5" />
      </section>

      <main>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <Card classNames="p-4">
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

            <section>
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
                  <a href="" className="text-blue-500">View Profile</a>
                </div>
              </div>
            </div>
            <hr />
          </Card>
        </div>
      </main>
    </Layout>
  );
};

export default Conversations;
