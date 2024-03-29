"use client";

import React from "react";

/* next ui */
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";

import {
  DropdownWorkSpace_,
  ButtonCreateWorkSpace_,
  TittleWorkSpace_,
} from "../components";

const Navbar_: React.FC = () => {
  return (
    <Navbar isBordered className="bg-[#1D2125]" maxWidth="full" height="46px">
      <NavbarContent justify="start">
        <NavbarItem>
          <TittleWorkSpace_ />
        </NavbarItem>

        <NavbarItem>
          <DropdownWorkSpace_ />
        </NavbarItem>

        <NavbarItem>
          <ButtonCreateWorkSpace_ />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export { Navbar_ };
