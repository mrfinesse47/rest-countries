import { useEffect, useState } from "react";

const useStateWithLocalStorage = (localStorageKey, fallBack) => {
  const [value, setValue] = useState(
    localStorage.getItem(localStorageKey) || fallBack
  );
  //brings in the initial value from local storage and sets state or sets state to the fallback

  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]); //will run any time value changes, keeping local storage updated

  //exports value and setvalue like a normal useState hook would.
  //you don't notice the difference using it elsewhere
  return [value, setValue];
};

export default useStateWithLocalStorage;
