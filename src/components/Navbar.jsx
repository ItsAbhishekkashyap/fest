"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed md:top-5 lg:top-0 lg:inset-x-0 sm:mx-auto  flex w-screen md:border-none 2xl:mx-auto z-50", className)}
    >
        
        
      <Menu setActive={setActive} >
        <div className="lg:text-2xl phone:text-[0px] sm:text-[0px] font-bold">Encore</div>

        <div className="flex gap-10">
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
            
          ></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Events">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/events">Cultural</HoveredLink>
            <HoveredLink href="/events">Technical</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem
          setActive={setActive}
          active={active}
          item="About Us"
        ></MenuItem>

        <MenuItem setActive={setActive} active={active} item="Login"></MenuItem>
        </div>
      </Menu>
    </div>
  );
}

export default Navbar;
