import React, { useState } from "react";
import { BUA, KEO, BAO } from "./contants/contants";
import bgGame from "./oanTuXiImg/bgGame.png";

import "./oanTuXiImg/buble.css";

const keoImg = require("./oanTuXiImg/keo.png");
const buaImg = require("./oanTuXiImg/bua.png");
const baoImg = require("./oanTuXiImg/bao.png");

function comRandomChoice() {
  let arr = [
    [KEO, keoImg],
    [BUA, buaImg],
    [BAO, baoImg],
  ];

  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  return item;
}
function tinhKetQua(_userChoice, _comChoice) {
  let arr = [_userChoice, _comChoice];
  switch (arr.toString()) {
    case "KEO,BUA":
      {
        return true;
      }
      break;
    case "BUA,BAO":
      {
        return true;
      }
      break;
    case "BAO,KEO":
      {
        return true;
      }
      break;
    default: {
      return false;
    }
  }
}

export default function OanTuXi() {
  const [userChoice, setUserChoice] = useState(KEO);
  const [userChoiceImg, setUserChoiceImg] = useState(keoImg);
  const [comChoice, setComChoice] = useState();
  const [comChoiceImg, setComChoiceImg] = useState();
  const [count, setCount] = useState(0);
  const [win, setWin] = useState(0);

  console.log("user", userChoice);
  console.log("com", comChoice);
  console.log("So Lan Choi", count);
  console.log("So Lan Thang", win);

  return (
    <div
      style={{
        backgroundImage: `url(${bgGame})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="row py-5">
        <div className="col-md-3 col-6 text-center d-flex flex-column align-items-center order-1 ">
          <h3 className="h5 text-white"> Player </h3>
          <div
            className="speech-bubble d-flex align-items-center"
            style={{ width: "50px", height: "50px", padding: "6px 12px" }}
          >
            <img
              src={userChoiceImg}
              style={{ width: "30px", height: "30px" }}
              alt={userChoice}
            />
          </div>

          <img
            src={require("./oanTuXiImg/player.png")}
            style={{ width: "100px", height: "100px" }}
          />

          <div className="d-flex">
            <button
              className="btn btn-success mx-3"
              style={{ width: "50px", height: "50px" }}
              onClick={() => {
                setUserChoice(KEO);
                setUserChoiceImg(keoImg);
              }}
            >
              <img
                src={require("./oanTuXiImg/keo.png")}
                style={{ width: "100%", height: "100%" }}
              />
            </button>
            <button
              className="btn btn-success mx-3"
              style={{ width: "50px", height: "50px" }}
              onClick={() => {
                setUserChoice(BUA);
                setUserChoiceImg(buaImg);
              }}
            >
              <img
                src={require("./oanTuXiImg/bua.png")}
                style={{ width: "100%", height: "100%" }}
              />
            </button>
            <button
              className="btn btn-success mx-3"
              style={{ width: "50px", height: "50px" }}
              onClick={() => {
                setUserChoice(BAO);
                setUserChoiceImg(baoImg);
              }}
            >
              <img
                src={require("./oanTuXiImg/bao.png")}
                style={{ width: "100%", height: "100%" }}
              />
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6 text-center bg-game order-2 order-md-1 rounded bg-dark p-3 mt-2">
          <h2 className="h2 text-warning my-3">I'm Iron man I love you 3000</h2>
          <h2 className="h2 text-white my-2">
            Số Bàn Chơi : <span className="text-warning"> {count}</span>
          </h2>
          <h2 className="h2 text-white my-2">
            Số Bàn Thắng: <span className="text-warning"> {win}</span>
          </h2>
          <button
            className="btn btn-success"
            onClick={() => {
              setCount(count + 1);
              let result = comRandomChoice();
              setComChoice(result[0]);

              setComChoiceImg(result[1]);
              if (tinhKetQua(userChoice, result[0])) {
                setWin(win + 1);
              }
            }}
          >
            Chơi nào
          </button>
        </div>
        <div className="col-6 col-md-3 text-center d-flex flex-column align-items-center order-1 ">
          {/* <img src={comChoiceImg} style={{width: "30px",height: "30px"}} alt={comChoice} />  */}
          <h3 className="h5 text-white"> Computer </h3>
          <div
            className="speech-bubble d-flex align-items-center"
            style={{ width: "50px", height: "50px", padding: "6px 12px" }}
          >
            {comChoice && (
              <img
                src={comChoiceImg}
                style={{ width: "30px", height: "30px" }}
                alt={comChoice}
              />
            )}
          </div>

          <img
            src={require("./oanTuXiImg/playerComputer.png")}
            style={{ width: "100px", height: "100px" }}
          />
        </div>
      </div>
    </div>
  );
}
