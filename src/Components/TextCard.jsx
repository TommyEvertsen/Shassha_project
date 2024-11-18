"use client";

const TextCard = ({ text }) => {
  return (
    <div className="flex   w-96 bg-cyan-300">
      <div className="flex w-full justify-center justify-items-center">{text}</div>
    </div>
  );
};

export default TextCard;
