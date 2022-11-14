import React from "react";
import { GiNinjaHead, GiGuardedTower, GiCrossedSwords } from "react-icons/gi";

function WelcomeText() {
  return (
    <div className="py-5">
      <h1 className="text-center">
        <GiGuardedTower /> Guards vs Assassins <GiNinjaHead />
      </h1>
    </div>
  );
}

export default WelcomeText;
