"use client"

import React from "react";
import { Checkbox } from "@nextui-org/react";
import { cn } from "@/lib/utils";


export const CustomCheckbox = ({ value, content, isDisable }:
  {
    value: string,
    content: string,
    isDisable: boolean,
  }) => {


  return (
    <Checkbox
      size={"sm"}
      classNames={{
        base: cn(
          "inline-flex w-full max-w-md bg-content1",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer rounded-lg gap-2 p-4 my-2 border-2 border-transparent",
          "data-[selected=true]:border-green-400",
        ),
        wrapper: "hidden",
        label: "w-full",
      }}

      value={value}
      isDisabled={isDisable}
    >
      <div className="flex flex-row items-center justify-content">

        {content}


      </div>
    </Checkbox>
  );
}
