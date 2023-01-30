import { useState } from "react";

export const useSort = (items) => {
  const [sortMode, setSortMode] = useState(null);

  const sortedItems = !sortMode
    ? items
    : items.slice().sort((a, b) => {
        if (sortMode === "asc" && a.title > b.title) {
          return 1;
        } else if (sortMode === "asc") {
          return -1;
        } else if (sortMode === "desc" && a.title > b.title) {
          return -1;
        } else {
          return 1;
        }
      });

  return {
    sortMode,
    setSortMode,
    sortedItems
  };
};
