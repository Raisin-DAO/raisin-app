import React from "react";
import { BsSquare } from "react-icons/bs";

export interface NavigationMenuBarItemProps {
  title: string;
  content: string;
}

export const NavigationMenuBarItem: React.FC<NavigationMenuBarItemProps> = ({
  title,
  content,
}) => {
  return (
    <div className="my-3 pl-6 pr-2 w-48">
      <BsSquare className="text-4xl" />
      <h3 className="font-semibold">{title}</h3>
      <p>{content}</p>
    </div>
  );
};
