import React from "react";
import { HiBellAlert } from "react-icons/hi2";
import { GiPartyPopper } from "react-icons/gi";
import { getRandomString } from "../helpers/stringHelper";

interface SolveMessageProps {
  canEscape: boolean | null;
}

function SolveMessage(props: SolveMessageProps) {
  const { canEscape } = props;

  let message = "";

  if (canEscape === null) {
    message = getRandomString([
      "I'm feelin' lucky!",
      "The exit is just over there.",
      "One foot in front of the other.",
      "Let's do this.",
      "Got them gems, where's the exit?",
    ]);
  } else if (canEscape === false) {
    message = getRandomString([
      "I'm in over my head.",
      "Didn't make it.",
      "Didn't think that one through.",
    ]);
  } else if (canEscape === true) {
    message = getRandomString([
      "They didn't even know I was here!",
      "Like a cat.",
      "The guards were sleeping on the job.",
    ]);
  }

  return (
    <div className="container text-center">
      <h2>
        {canEscape === false && <HiBellAlert className="text-danger" />}
        {canEscape === true && <GiPartyPopper className="text-success" />}
        &nbsp;
        {message}
        &nbsp;
        {canEscape === false && <HiBellAlert className="text-danger" />}
        {canEscape === true && <GiPartyPopper className="text-success" />}
      </h2>
    </div>
  );
}

export default SolveMessage;
