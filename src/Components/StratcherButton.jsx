"use client";

const StratcherButton = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border rounded-md border-black w-20 bg-pink-500 hover:bg-pink-400 text-white h-8 cursor-pointer"
    >
      <div className="flex justify-center items-center h-full">Button</div>
    </div>
  );
};

export default StratcherButton;
