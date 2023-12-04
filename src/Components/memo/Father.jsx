import React, { memo } from "react";
import Son from "./Son";
import Daughter from "./Daughter";

function Father({ age }) {
  console.log("Father");
  return (
    <div>
      {age}
      <Son />
      <Daughter />
    </div>
  );
}
export default memo(Father);
