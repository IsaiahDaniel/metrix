type ChatBubble = {
  text: string;
  position: string;
  time: string;
};

const ChatBubble = ({ text, position, time }: ChatBubble) => {
  const isLeft = position === "left";

  return (
    <div>
      <div
        className={`w-64 max-w-full p-3 rounded-lg mt-4 ${
          isLeft ? "bg-blue-500 text-white" : "bg-[#FFEAD1] text-black"
        }`}
      >
        <p>{text}</p>
        <div
          className={`w-3 h-3 ${
            isLeft
              ? "bg-blue-500 rounded-tl-full mt-1 ml-2 left-0"
              : "bg-[#FFEAD1] rounded-tr-full mt-1 mr-2 right-0"
          }`}
        />
      </div>
      <p className="text-gray-500">{time}</p>
    </div>
  );
};

export default ChatBubble;
