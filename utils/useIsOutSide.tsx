import { useState, useEffect, ReactNode } from "react";

export const useDetectOutsideClick = (el: any, initialState: boolean) => {
  
  const [isActive, setIsActive] = useState(initialState as boolean);

  function _setIsActive(state: boolean): void {
    setIsActive(state);
  }

  useEffect(() => {
    const onClick = ({ target }: Event) => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(target)) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks outside
    if (isActive) window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};
