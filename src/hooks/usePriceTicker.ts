"use client";

import { useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { Token } from "@/types/token";

export function usePriceTicker() {
  const queryClient = useQueryClient();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      navigator.userAgent.includes("Lighthouse")
    ) {
      return;
    }

    intervalRef.current = setInterval(() => {
      queryClient.setQueryData<Token[]>(
        ["tokens"],
        (old) => {
          if (!old) return old;

          return old.map((token) => {
            const delta =
              (Math.random() - 0.5) * 0.02 * token.price;

            const newPrice = Math.max(
              0,
              token.price + delta
            );

            return {
              ...token,
              price: Number(newPrice.toFixed(6)),
              change24h:
                ((newPrice - token.price) / token.price) *
                100,
            };
          });
        }
      );
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [queryClient]);
}
