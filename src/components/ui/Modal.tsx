"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export function Modal({
  open,
  onOpenChange,
  title,
  children,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 z-40" />

        <Dialog.Content
          className="
            fixed z-50
            top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[90vw] max-w-md
            rounded-lg
            bg-black
            border border-white/10
            p-4
            text-white
          "
        >
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-sm font-semibold">
              {title}
            </Dialog.Title>

            <Dialog.Close className="p-1 hover:bg-white/10 rounded">
              <X className="w-4 h-4 text-gray-400" />
            </Dialog.Close>
          </div>

          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
