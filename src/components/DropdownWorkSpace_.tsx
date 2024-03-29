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
  Avatar,
} from "@nextui-org/react";

/* react icons */
import { TbCircleLetterW } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

const DropdownWorkSpace_: React.FC = () => {
  return (
    <Dropdown className="bg-[#282E33] mx-0" isDisabled disableAnimation>
      {/* button */}
      <DropdownTrigger>
        <Button
          variant="light"
          className="text-[#9EACBA] text-sm font-bold"
          size="sm"
          radius="sm"
          endContent={<IoIosArrowDown />}
        >
          Espacios de trabajo
        </Button>
      </DropdownTrigger>

      <DropdownMenu variant="solid" aria-label="menu" aria-labelledby="menu">
        {/* Espacios de trabajo actual */}
        <DropdownSection
          title="Espacio de trabajo actual"
          showDivider
          classNames={{ heading: "text-slate-300 font-bold" }}
        >
          <DropdownItem
            isReadOnly
            key="new"
            startContent={
              <Avatar
                name="P"
                radius="sm"
                classNames={{
                  base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                  name: "text-lg font-bold",
                }}
              />
            }
            style={{
              backgroundColor: "#282E33",
              color: "#fff",
              cursor: "default",
            }}
          >
            Proyectos personales
          </DropdownItem>
        </DropdownSection>

        {/* Tus espacios de trabajo */}
        <DropdownSection
          title="Tus Espacios de trabajo"
          classNames={{ heading: "text-slate-300 font-bold" }}
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
