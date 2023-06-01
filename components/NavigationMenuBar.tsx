import React from "react";
import { NavigationMenuBarItem } from "./NavigationMenuBarItem";

export interface NavigationMenuBarProps {
  text?: string;
  link?: string;
}

export const NavigationMenuBar: React.FC<NavigationMenuBarProps> = ({}) => {
  const leftItemTitle = "Docs";
  const leftItemContent = "Solve all your questions with our guides.";

  const rightItemTitle = "Playground";
  const rightItemContent = "Create your application using our UI components.";
  return (
    <section
      className={
        " border border-black rounded-3xl flex divide-x-2 justify-between divide-slate-400 absolute top-8 right-0 bg-white"
      }
    >
      <NavigationMenuBarItem title={leftItemTitle} content={leftItemContent} />
      <NavigationMenuBarItem
        title={rightItemTitle}
        content={rightItemContent}
      />
    </section>
  );
};
