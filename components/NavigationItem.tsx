import React from "react";

export interface NavigationItemProps {
  text?: string;
  link?: string;
  children?: JSX.Element | JSX.Element[] | false;
  onClick?: (e: any) => void;
  isOpen?: boolean;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  text,
  link,
  children,
  onClick,
  isOpen,
}) => {
  return (
    <div
      onClick={onClick}
      className={`decoration-2 decoration-stone-300 underline-offset-2 hover:underline active:decoration-blue-400 relative flex align-middle px-2 py-1 ${
        isOpen ? "bg-slate-200 rounded-lg" : ""
      }`}
    >
      {link ? <a href={link}>{text}</a> : <div>{text}</div>}
      {children}
    </div>
  );
};
