import { useFilter } from "./hooks/useFilter";
import { useSort } from "./hooks/useSort";
import "./styles.css";

export const App = ({ list }) => {
  const { availableItems, enteredSearchValue, setEnteredSearchValue } = useFilter(list);
  const { sortMode, setSortMode, sortedItems } = useSort(availableItems);

  return (
    <div className="App">
      <div className="form">
        <input
          type="search"
          value={enteredSearchValue}
          onChange={(e) => setEnteredSearchValue(e.target.value)}
          placeholder="search todo"
        />
        <div className="form-radio">
          <input
            type="radio"
            name="sort"
            value="asc"
            checked={sortMode === "asc"}
            onChange={(e) => setSortMode(e.target.value)}
          />{" "}
          A-Z
          <input
            type="radio"
            name="sort"
            value="desc"
            checked={sortMode === "desc"}
            onChange={(e) => setSortMode(e.target.value)}
          />{" "}
          Z-A
        </div>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
