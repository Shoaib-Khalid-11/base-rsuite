import { Link, LinkProps } from "react-router-dom";

export const AppRouterLink: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <>
      <Link {...props}>{children}</Link>
    </>
  );
};

export default AppRouterLink;
