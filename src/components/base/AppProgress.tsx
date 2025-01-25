import React from "react";
import { Progress } from "rsuite";
import { AppProgressProps } from "types";

export const AppProgress: React.FC<AppProgressProps> = ({ type, ...props }) => {
  return (
    <>
      {type === "circle" && <Progress.Circle {...props} />}
      {type === "line" && <Progress.Line {...props} />}
    </>
  );
};

export default AppProgress;
