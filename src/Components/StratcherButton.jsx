"use client";

const StratcherButton = ({ onClick, buttonText }) => {
  return (
    <div
      onClick={onClick}
      className="border rounded-md border-black w-20 bg-pink-500 hover:bg-pink-400 text-white h-8 cursor-pointer"
    >
      <div className="flex justify-center items-center h-full">
        {buttonText}
      </div>
    </div>
  );
};

export default StratcherButton;
