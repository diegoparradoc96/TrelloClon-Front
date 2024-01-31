import React from "react";

/* nextui */
import { Button } from "@nextui-org/react";

/* react icons */
import { FaTrello } from "react-icons/fa";

const TittleWorkSpace_ = () => {
  return (
    <Button
      variant="light"
      className="flex flex-row items-center mx-0"
      startContent={<FaTrello size={16} className="text-[#9EACBA]" />}
    >
      <p className="text-lg align-middle font-bold text-[#9EACBA]">Trello</p>
    </Button>
  );
};

export { TittleWorkSpace_ };
