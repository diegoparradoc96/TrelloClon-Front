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
import { CgTrello } from "react-icons/cg";

const Navbar_ = () => {
  return (
    <Navbar isBordered isMenuOpen={true} className="md:w-48 lg:w-48  bg-red-500">
      <NavbarBrand className="">
        <CgTrello size={30} />
        <p>Trello</p>
      </NavbarBrand>

      <NavbarContent className="" justify="start">
        <NavbarItem>
          <Link>Espacios de trabajo</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export { Navbar_ };
