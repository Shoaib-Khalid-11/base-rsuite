import React from "react";

interface ChildrenNodeProps {
  children: React.ReactNode;
}
const ChildrenNode: React.FC<ChildrenNodeProps> = ({ children }) => {
  return <>{children}</>;
};

export default ChildrenNode;
