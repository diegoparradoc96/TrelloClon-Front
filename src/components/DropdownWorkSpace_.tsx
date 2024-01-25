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

      <DropdownMenu variant="faded">
        {/* Espacios de trabajo actual */}
        <DropdownSection
          title="Espacio de trabajo actual"
          classNames={{ heading: "text-slate-400 font-bold" }}
          showDivider
        >
          <DropdownItem
            key="new"
            description="Create a new file"
            classNames={{ base: "pointer-events-none hover:bg-[#e3e]" }}
            startContent={<TbCircleLetterW size={30} />}
          >
            Proyectos personales
          </DropdownItem>
        </DropdownSection>

        {/* Tus espacios de trabajo */}
        <DropdownSection
          title="Tus Espacios de trabajo"
          classNames={{ heading: "text-slate-400 font-bold" }}
        >
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
