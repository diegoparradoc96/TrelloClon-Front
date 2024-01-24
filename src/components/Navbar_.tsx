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

/* react icons */
import { FaTrello } from "react-icons/fa";

const Navbar_ = () => {
  return (
    <Navbar isBordered className="text-slate-400 bg-[#1D2125]" maxWidth="full">
      <NavbarContent>
        <NavbarItem className="flex row place-items-center">
          <FaTrello size={17} />
          <p className="text-lg align-middle font-bold">Trello</p>
        </NavbarItem>

        <NavbarItem>
          <p>Espacios de trabajo</p>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export { Navbar_ };
