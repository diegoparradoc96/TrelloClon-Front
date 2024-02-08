"use client";

/* aun no he podido ejecutar el evento onClick en un dropdownItem */

import React from "react";

/* components */
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
/* react icons */
import { FaTrello } from "react-icons/fa";
/* GlobalContext */

import { useGlobalContext } from "../context/GlobalContext";

const ButtonCreateWorkSpace_: React.FC = () => {
  const { myFuncs } = useGlobalContext();

  const toggleItem = (key: string) => {
    const actions = [
      {
        action: "createBoard",
        func: () => {
          myFuncs.myFun();
        },
      },
    ];

    const selectedAction = actions.find((action) => action.action == key);

    selectedAction ? selectedAction.func() : null;
  };

  return (
    <Dropdown className="bg-[#282E33] m-0" disableAnimation>
      <DropdownTrigger>
        <Button
          variant="light"
          className="text-[#000] text-sm bg-[#579dff] rounded"
          size="sm"
          radius="none"
        >
          Crear
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        variant="solid"
        disableAnimation={true}
        className="max-w-96"
        aria-label="menu"
        aria-labelledby="menu"
        onAction={(key) => toggleItem(key)}
      >
        <DropdownItem key="createBoard" textValue="hola">
          <div className="flex flex-row items-center">
            <FaTrello />
            <p className="ml-1">Crear tablero</p>
          </div>
          <p className="text-xs">
            Un tablero es un conjunto de tareas ordenadas en <br /> listas.
            Utilícelo para gestionar proyectos, realizar un <br /> seguimiento
            de la información u organizar cualquier <br /> actividad
          </p>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export { ButtonCreateWorkSpace_ };
