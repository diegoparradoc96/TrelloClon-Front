"use client";

import React from "react";

/* next ui */
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
  cn,
} from "@nextui-org/react";

/* react icons */
import { TbCircleLetterW } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

const DropdownWorkSpace_: React.FC = () => {
  return (
    <Dropdown className="bg-[#282E33] text-slate-50">
      <DropdownTrigger>
        <Button
          variant="light"
          className="text-slate-300 font-bold"
          size="md"
          radius="sm"
          endContent={<IoIosArrowDown />}
        >
          Espacios de trabajo
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        itemClasses={{
          title: ["text-white"],
          base: ["rounded-md"],
        }}
      >
        <DropdownSection
          title="Espacio de trabajo actual"
          itemClasses={{ title: "text-white" }}
          showDivider
        >
          <DropdownItem
            key="new"
            description="Create a new file"
            startContent={<TbCircleLetterW size={30} />}
          >
            New file
          </DropdownItem>
        </DropdownSection>
        <DropdownSection
          title="Tus espacios de trabajo"
          className="text-slate-50"
        >
          <DropdownItem
            key="dos"
            description="nuevo prueba"
            startContent={<TbCircleLetterW size={30} />}
          >
            Nuevo item
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export { DropdownWorkSpace_ };
