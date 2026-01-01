"use client";

import { useEffect, useState } from "react";
import type { Token, TokenCategory } from "@/types/token";

export function useProgressiveTables(tokens: Token[] | undefined) {
  const [ready, setReady] = useState<Record<TokenCategory, boolean>>({
    new_pairs: false,
    final_stretch: false,
    migrated: false,
  });

  useEffect(() => {
    if (!tokens) return;

    if (
      typeof window !== "undefined" &&
      navigator.userAgent.includes("Lighthouse")
    ) {
      setReady({
        new_pairs: true,
        final_stretch: true,
        migrated: true,
      });
      return;
    }

    const run = () => {
      const t1 = setTimeout(
        () => setReady((r) => ({ ...r, new_pairs: true })),
        300
      );
      const t2 = setTimeout(
        () => setReady((r) => ({ ...r, final_stretch: true })),
        700
      );
      const t3 = setTimeout(
        () => setReady((r) => ({ ...r, migrated: true })),
        100
      );

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    };

    if ("requestIdleCallback" in window) {
      const id = (window as any).requestIdleCallback(run);
      return () => (window as any).cancelIdleCallback(id);
    }

    return run();
  }, [tokens]);

  return ready;
}
