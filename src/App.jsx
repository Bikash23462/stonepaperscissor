import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userchoice, setuserchoice] = useState("rock");
  const [computerchoice, setcompterchoice] = useState("rock");
  const [userpoint, setuserpoint] = useState(0);
  const [computerpoint, setcomputerpoint] = useState(0);
  const [turnresults, setturnresults] = useState(null);
  const [result, setresult] = useState("lets see who win");
  const [gameover, setgameover] = useState(false);

  const choice = ["rock", "paper", "scissor"];

  const handleonclick = (choice) => {
    setuserchoice(choice);
    generatecomputerchoice();
  };

  const generatecomputerchoice = () => {
    const randomchoice = choice[Math.floor(Math.random() * choice.length)];
    setcompterchoice(randomchoice);
  };

  const reset = () => {
    window.location.reload();
  };

  useEffect(() => {
    const combomove = userchoice + computerchoice;
    if (userpoint <= 4 && computerpoint <= 4) {
      if (
        combomove === "rockscissor" ||
        combomove === "paperrock" ||
        combomove === "scissorpaper"
      ) {
        const updateuserpoint = userpoint + 1;
        setuserpoint(updateuserpoint);
        setturnresults("user got the point");

        if (updateuserpoint === 5) {
          setgameover(true);
          setresult("User wins");
        }
      }

      if (
        combomove === "scissorrock" ||
        combomove === "rockpaper" ||
        combomove === "paperscissor"
      ) {
        const updatecomputerpoint = computerpoint + 1;
        setcomputerpoint(updatecomputerpoint);
        setturnresults("Computer Got The Point");

        if (updatecomputerpoint === 5) {
          setgameover(true);
          setresult("Computer Wins");
        }
      }

      if (
        combomove === "rockrock" ||
        combomove === "paperpaper" ||
        combomove === "scissorscissor"
      ) {
        setturnresults("No Points given");
      }
    }
  }, [userchoice, computerchoice]);

  return (
    <div className="whole">
      <h1 className="heading">Rock Paper Scissor</h1>
      <div className="score">
        <h1>User Points={userpoint}</h1>
        <h1>Computer Points={computerpoint}</h1>
      </div>
      <div className="choices">
        <div className="choice-user">
          <img className="userhand" src={`./components/${userchoice}.png`} />
        </div>
        <div className="choice-computer">
          <img
            className="computerhand"
            src={`./components/${computerchoice}.png`}
          />
        </div>
      </div>

      <div className="button-div">
        {choice.map((choice, index) => (
          <button
            className="button"
            key={index}
            onClick={() => handleonclick(choice)}
          >
            {choice}
          </button>
        ))}
      </div>

      <div className="result">
        <h1> Turn Result:{turnresults}</h1>
        <h1>Final Result:{result}</h1>
      </div>

      <div className="button-div"></div>
      {gameover && (
        <button className="button" onClick={() => reset()}>
          Restart Game?
        </button>
      )}
    </div>
  );
}

export default App;
