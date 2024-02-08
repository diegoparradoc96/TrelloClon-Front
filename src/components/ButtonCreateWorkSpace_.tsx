"use client";

import React, { useState } from "react";
/* components */
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
/* react icons */
import { IoMdClose } from "react-icons/io";
import { FaTrello, FaAngleLeft } from "react-icons/fa";
/* GlobalContext */
import { useGlobalContext } from "../context/GlobalContext";

const ButtonCreateWorkSpace_: React.FC = () => {
  const { myFuncs } = useGlobalContext();

  const [showOptions, setShowOptions] = useState(false);
  const [showCreateBoard, setShowCreateBoard] = useState(false);

  const toggleItem = (key: React.Key) => {
    const actions = [
      {
        action: "createBoard",
        func: () => {
          //myFuncs.myFun();
          setShowOptions(false);
          setShowCreateBoard(true);
        },
      },
    ];

    const selectedAction = actions.find((action) => action.action == key);

    selectedAction ? selectedAction.func() : null;
  };

  const closeMenu = () => {
    setShowOptions(false);
    setShowCreateBoard(false);
  };

  return (
    <Dropdown
      className="bg-[#282E33] m-0"
      disableAnimation
      onClose={() => closeMenu()}
    >
      <DropdownTrigger>
        <Button
          variant="light"
          className="text-[#000] text-sm bg-[#579dff] rounded"
          size="sm"
          radius="none"
          onClick={() => setShowOptions(true)}
        >
          Crear
        </Button>
      </DropdownTrigger>

      {showOptions && (
        <DropdownMenu
          variant="solid"
          disableAnimation={true}
          className="max-w-96"
          aria-label="menu"
          aria-labelledby="menu"
          onAction={(key) => toggleItem(key)}
          closeOnSelect={false}
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
      )}

      {showCreateBoard && (
        <DropdownMenu
          variant="solid"
          disableAnimation={true}
          className="max-w-96"
          aria-label="menu"
          aria-labelledby="menu"
          onAction={(key) => toggleItem(key)}
        >
          <DropdownItem
            key="createBoard"
            textValue="hola"
            isReadOnly
            className="px-1 py-1"
            style={{
              backgroundColor: "#282E33",
              color: "#fff",
              cursor: "default",
            }}
          >
            <div className="flex flex-row items-center">
              <Button
                isIconOnly
                variant="light"
                size="sm"
                onPress={() => {
                  setShowCreateBoard(false);
                  setShowOptions(true);
                }}
              >
                <FaAngleLeft size={14} color="#9EACBA" />
              </Button>
              <p className="mx-12 text-[#9EACBA]">Crear tablero</p>
              <Button
                isIconOnly
                variant="light"
                size="sm"
                onPress={() => closeMenu()}
              >
                <IoMdClose size={14} color="#9EACBA" />
              </Button>
            </div>

            <div className="flex flex-row items-center">
              <FaTrello />
              <p className="ml-1">Crear extra</p>
            </div>
          </DropdownItem>
        </DropdownMenu>
      )}
    </Dropdown>
  );
};

export { ButtonCreateWorkSpace_ };
