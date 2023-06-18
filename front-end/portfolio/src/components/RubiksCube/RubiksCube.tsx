import React, { useState, useEffect } from "react";
import "./RubiksCube.scss";

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const RubiksCube = () => {
  const rndIntX = randomIntFromInterval(-55, -15);
  const rndIntY = randomIntFromInterval(45, 15);
  const [cubeState, setCubeState] = useState(/* Initial state of the cube */);
  const cubeStyles = {
    transform: `perspective(900px) translate(50%, 30%) rotateX(${rndIntX}deg) rotateY(${rndIntY}deg)`,
  };
  // Function to handle cube movement on button click
  const moveCube = () => {
    // const newCubeState = /* Logic to update the cube state */
    // setCubeState(newCubeState);
  };

  // Define an array of special characters
  useEffect(() => {
    const specialCharacters = [
      ";",
      "{",
      "[",
      "<",
      ">",
      "(",
      ")",
      ",",
      ".",
      ":",
      "=",
      "+",
      "-",
      "*",
      "/",
      "%",
      "!",
      "&",
      "|",
      "^",
      "~",
      "?",
      "$",
      "@",
      "#",
      "'",
      '"',
      "`",
      "\\",
      "/",
    ];
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
      const randomCharacter =
        specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
      square.setAttribute("data-character", randomCharacter);
    });
  }, []);
  // Get all square elements
  // const squares = document.querySelectorAll(".square");

  // // Iterate over each square and set a random special character
  // squares.forEach((square) => {
  //   const randomCharacter =
  //     specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  //   square.setAttribute("data-character", randomCharacter);
  // });

  return (
    <div className="cube-container">
      <div className="cube" style={cubeStyles}>
        <div className="face front">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <div className="back"></div>
        <div className="left">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <div className="right"></div>
        <div className="top">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default RubiksCube;
