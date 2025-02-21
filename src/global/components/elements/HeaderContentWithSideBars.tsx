import React from "react";

interface HeaderContentWithSideBarsProps {
  children: React.ReactNode;
}
const HeaderContentWithSideBars: React.FC<HeaderContentWithSideBarsProps> = ({
  children,
}) => {
  return <>{children}</>;
};

export default HeaderContentWithSideBars;
