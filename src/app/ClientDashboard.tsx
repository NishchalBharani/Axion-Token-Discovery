"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import { fetchTokens } from "@/lib/fetchTokens";
import TokenTableSkeleton from "@/components/table/TokenTableSkeleton";
import type { TokenCategory } from "@/types/token";
import { usePriceTicker } from "@/hooks/usePriceTicker";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useProgressiveTables } from "@/hooks/useProgressiveTables";

const TopBar = dynamic(() => import("@/components/topbar/TopBar"), {
  ssr: false,
});

const TokenTable = dynamic(
  () => import("@/components/table/TokenTable"),
  { ssr: false }
);

const categories: {
  key: TokenCategory;
  label: string;
}[] = [
    { key: "new_pairs", label: "New Pairs" },
    { key: "final_stretch", label: "Final Stretch" },
    { key: "migrated", label: "Migrated" },
  ];

export default function Home() {
  const [activeMobileTab, setActiveMobileTab] = useState<TokenCategory>("new_pairs");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["tokens"],
    queryFn: fetchTokens,
  });

  const tableReady = useProgressiveTables(data);

  usePriceTicker();

  const tokensByCategory = data
    ? {
      new_pairs: data.filter((t) => t.category === "new_pairs"),
      final_stretch: data.filter(
        (t) => t.category === "final_stretch"
      ),
      migrated: data.filter((t) => t.category === "migrated"),
    }
    : null;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="px-2 sm:px-4 pt-[112px]">
        <TopBar
          activeTab={activeMobileTab}
          onTabChange={setActiveMobileTab}
        />

        {isLoading && (
          <div className="lg:hidden px-2 sm:px-4">
            <TokenTableSkeleton label={categories.find(c => c.key === activeMobileTab)?.label || ""} />
          </div>
        )}
        {isLoading && (
          <div className="hidden lg:grid lg:grid-cols-3 gap-4 px-2 sm:px-4">
            {categories.map((cat) => (
              <TokenTableSkeleton key={cat.key} label={cat.label} />
            ))}
          </div>
        )}

        {isError && (
          <div className="text-red-500 p-4">
            Failed to load tokens
          </div>
        )}

        {!isLoading && !isError && tokensByCategory && (
          <>
            <div className="lg:hidden px-2 sm:px-4">
              <ErrorBoundary fallback={
                <div className="flex items-center justify-center h-full p-4 text-sm text-gray-400 border border-white/10 rounded bg-white/5">
                  Failed to load data
                </div>
              }>
                {tableReady[activeMobileTab] ? (
                  <TokenTable
                    label={categories.find(c => c.key === activeMobileTab)?.label || ""}
                    tokens={tokensByCategory[activeMobileTab]}
                    isFullWidth={true}
                  />
                ) : (
                  <TokenTableSkeleton label={categories.find(c => c.key === activeMobileTab)?.label || ""} />
                )}
              </ErrorBoundary>
            </div>

            <div className="hidden lg:grid lg:grid-cols-3 gap-4 px-2 sm:px-4">
              {categories.map((cat) => (
                <ErrorBoundary key={cat.key} fallback={
                  <div className="flex items-center justify-center h-full p-4 text-sm text-gray-400 border border-white/10 rounded bg-white/5">
                    Failed to load {cat.label}
                  </div>
                }>
                  {tableReady[cat.key] ? (
                    <TokenTable label={cat.label} tokens={tokensByCategory[cat.key]} />
                  ) : (
                    <TokenTableSkeleton label={cat.label} />
                  )}
                </ErrorBoundary>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
