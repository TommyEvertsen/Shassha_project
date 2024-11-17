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
        <div className="flex justify-center justify-items-center mt-10">
          <StratcherButton onClick={generateRandomNumber} />
        </div>
        <div className="flex justify-center justify-items-center mt-20">
          <TextCard text={text} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StratcherPage;
