import React from "react";

export function MusicCardSkeleton() {
  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden group p-2 flex flex-row-reverse gap-2 justify-between">
      <div className="relative w-56 h-56 group">
        <div className="mt-4 flex flex-col">
          <p className="font-semibold text-lg h-3 text-white truncate animate-pulse rounded-md"></p>
          <p className="text-sm h-2 truncate text-gray-300 mt-1 animate-pulse rounded-md"></p>
        </div>
      </div>
    </div>
  );
}
