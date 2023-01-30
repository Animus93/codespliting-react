import { useState } from "react";
import { useDebounce } from "./useDebounce";

export const useFilter = (items) => {
  const [enteredSearchValue, setEnteredSearchValue] = useState("");
  const activeSearchValue = useDebounce(enteredSearchValue, 300);
  
  const availableItems = activeSearchValue
    ? items.filter((item) => RegExp(activeSearchValue, "i").test(item.title))
    : items;

  return {
    setEnteredSearchValue,
    availableItems,
    enteredSearchValue
  };
};
