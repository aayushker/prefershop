import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Input,
} from "@nextui-org/react";
import Signup from "./Signup";
import Login from "./Login";
import { Sign } from "crypto";

export default function LoginOverlay() {
  const content = (
    <PopoverContent className="w-[420px] flex justify-between align-middle">
      {(titleProps) => (
        true ? <Login /> : <Signup />
      )}
    </PopoverContent>
  );

  return (
    <div className="flex flex-wrap gap-4">
      <Popover
        key="login"
        showArrow
        offset={10}
        placement="bottom"
        backdrop="blur"
      >
        <PopoverTrigger>
          <Button color="warning" variant="flat" className="capitalize">
            Login
          </Button>
        </PopoverTrigger>
        {content}
      </Popover>
    </div>
  );
}
