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
} from "@nextui-org/react";

/* react icons */
import { TbCircleLetterW } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

const DropdownWorkSpace_: React.FC = () => {
  return (
    <Dropdown className="bg-[#282E33]">
      {/* button */}
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
        variant="solid"
        selectionMode="none"
        disableAnimation={true}
      >
        {/* Espacios de trabajo actual */}
        <DropdownSection title="Espacio de trabajo actual" showDivider>
          <DropdownItem
            key="new"
            description="Create a new file"
            startContent={<TbCircleLetterW size={30} />}
           
          >
            Proyectos personales
          </DropdownItem>
        </DropdownSection>

        {/* Tus espacios de trabajo */}
        <DropdownSection title="Tus Espacios de trabajo">
          <DropdownItem
            key="dos"
            description="nuevo prueba"
            startContent={<TbCircleLetterW size={30} />}
          >
            Espacio de trabajo adicional
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export { DropdownWorkSpace_ };
