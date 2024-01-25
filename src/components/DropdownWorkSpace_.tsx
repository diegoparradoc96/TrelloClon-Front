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
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="light"          
          className="text-slate-400"
          size="sm"
          radius="sm"
          endContent={<IoIosArrowDown />}
        >
          Espacios de trabajo
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Tus Espacios de trabajo">
        <DropdownSection title="Actions" showDivider>
          <DropdownItem
            key="new"
            description="Create a new file"
            startContent={<TbCircleLetterW size={30} />}
          >
            New file
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export { DropdownWorkSpace_ };
