import { useState } from "react";

const useToggle = (initialValue?: boolean) => {
  const [active, setActive] = useState(initialValue);
  const toggle = () => {
    setActive((prev) => !prev);
  };
  return { active, toggle };
};

export { useToggle };
