"use client";

import React from "react";

/* next tools */
import { Link } from "@nextui-org/react";

/* next ui */
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarBrand,
} from "@nextui-org/react";

/* components */
import { DropdownWorkSpace_ } from "./index";

/* react icons */
import { FaTrello } from "react-icons/fa";

const Navbar_ = () => {
  return (
    <Navbar
      isBordered
      className="text-slate-400 bg-[#1D2125]"
      maxWidth="full"
      height="46px"
    >
      <NavbarContent>
        <NavbarItem className="flex row place-items-center">
          <FaTrello size={17} />
          <p className="text-xl align-middle font-bold ml-1">Trello</p>
        </NavbarItem>

        <NavbarItem>
          <DropdownWorkSpace_ />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export { Navbar_ };
