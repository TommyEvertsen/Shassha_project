"use client";

import React, { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import StratcherButton from "@/Components/StratcherButton";
import TextCard from "@/Components/TextCard";

const StratcherPage = () => {
  const [text, setText] = useState();

  const generateRandomNumber = () => {
    setText(Math.floor(Math.random() * 20) + 1);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <div className="flex justify-center justify-items-center mt-20 text-2xl">
          <h1>Stratcher want to be taken out to play</h1>
        </div>

        <div className="flex justify-center justify-items-center mt-10">
          <StratcherButton onClick={generateRandomNumber} buttonText={"Play"} />
        </div>

        <div className="flex justify-center justify-items-center mt-20">
          <TextCard text={text} />
        </div>

        {/*    <div className="grid grid-rows-4 grid-flow-col gap-4">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div> */}
      </main>

      <Footer />
    </div>
  );
};

export default StratcherPage;
