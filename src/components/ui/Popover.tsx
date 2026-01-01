"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import { useState } from "react";

export function Popover({
  trigger,
  children,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onClick={(e) => e.stopPropagation()}
          className="inline-block"
        >
          {trigger}
        </div>
      </PopoverPrimitive.Trigger>

      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          side="top"
          align="end"
          sideOffset={8}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="
            z-50
            rounded-lg
            bg-black/95
            border border-white/10
            p-4
            text-sm text-white
            shadow-2xl
            backdrop-blur-sm
            animate-in fade-in zoom-in-95 duration-200
          "
        >
          <PopoverPrimitive.Arrow className="fill-black/95 stroke-white/10" />
          <div onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}