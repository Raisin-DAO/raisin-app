import React, { useState } from "react";
import { NavigationItem } from "./NavigationItem";
import { NavigationMenuBar } from "./NavigationMenuBar";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Image from "next/image";

export interface PageHeaderProps {
  open?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ open }) => {
  const [isOpen, setIsOpen] = useState(open ?? false);

  const openMenuBar = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center leading-2 z-10 pt-4 pb-12 px-4 mb-24 border-solid border-b-2 border-slate-500">
      <div>
        <Image
          src="/images/Raisin.png"
          height={25}
          width={25}
          alt="Logo"
          className="text-2xl"
        />
      </div>
      <nav className="flex justify-between gap-x-8 items-center relative">
        <NavigationItem text="Onboarding" link="#" />
        <NavigationItem text="Funding Round" link="#" />
        <NavigationItem text="Developers" onClick={openMenuBar} isOpen={isOpen}>
          {isOpen ? (
            <>
              <AiFillCaretDown className="text-black-400 inline-block align-baseline my-auto" />
              <NavigationMenuBar />
            </>
          ) : (
            <AiFillCaretUp className="text-black-400 inline-block align-baseline my-auto" />
          )}
        </NavigationItem>
        <button className="rounded-xl bg-green-400 border border-black p-1 px-6 active:bg-green-800 hover:bg-green-200 ">
          Login
        </button>
      </nav>
    </header>
  );
};
