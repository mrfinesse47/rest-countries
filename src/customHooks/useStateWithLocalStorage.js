import { useEffect, useState } from "react";

const useStateWithLocalStorage = (localStorageKey, fallBack) => {
  const storageVal = localStorage.getItem(localStorageKey);
  let isDarkMode = false;
  if (storageVal === "true") {
    isDarkMode = true; //brings in a string from local storage so i need to cast it to a boolean
  }
  const [value, setValue] = useState(isDarkMode || fallBack);
  //brings in the initial value from local storage and sets state or sets state to the fallback

  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]); //will run any time value changes, keeping local storage updated

  //exports value and setvalue like a normal useState hook would.
  //you don't notice the difference using it elsewhere
  return [value, setValue];
};

export default useStateWithLocalStorage;
