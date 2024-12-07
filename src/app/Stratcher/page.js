"use client";

import React, { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import StratcherButton from "@/Components/StratcherButton";
import TextCard from "@/Components/TextCard";

const StratcherPage = () => {
  const [text, setText] = useState();

  const generateRandomActivity = () => {
    let number = Math.floor(Math.random() * 20) + 1;
    switch (number) {
      case 1:
        setText("Take the chicken to play cinama!");
        break;
      case 2:
        setText("Take the chicken for a walk in the nature");
        break;
      case 3:
        setText("Time to go to the theater and play a bit");
        break;
      case 4:
        setText("Take chicken to go swimming place");
        break;
      case 5:
        setText("Catch the chicken to a cafe to relax");
        break;
      case 6:
        setText(
          "Take the chicken to city center for window shopping and relaxing"
        );
        break;
      case 7:
        setText("Take the chicken for a walk");
        break;
      case 8:
        setText("Take the chicken to explore a new place");
        break;
      case 9:
        setText("Time to go to the theater and play a bit");
        break;
      case 10:
        setText("Time to go to the theater and play a bit");
        break;
      case 11:
        setText("Time to go to the theater and play a bit");
        break;
      case 12:
        setText("Time to go to the theater and play a bit");
        break;
      case 13:
        setText("Time to go to the theater and play a bit");
        break;
      case 14:
        setText("Time to go to the theater and play a bit");
        break;
      case 15:
        setText("Time to go to the theater and play a bit");
        break;
      case 16:
        setText("Time to go to the theater and play a bit");
        break;
      case 17:
        setText("Time to go to the theater and play a bit");
        break;
      case 18:
        setText("Time to go to the theater and play a bit");
        break;
      case 19:
        setText("Time to go to the theater and play a bit");
        break;
      case 20:
        setText("Time to go to the theater and play a bit");
        break;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <div className="flex justify-center justify-items-center mt-20 text-2xl">
          <h1>Stratcher want to be taken out to play</h1>
        </div>

        <div className="flex justify-center justify-items-center mt-10">
          <StratcherButton
            onClick={generateRandomActivity}
            buttonText={"Play"}
          />
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
