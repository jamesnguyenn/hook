import React from "react";

function useToggle() {
  const [on, setOn] = useState(false);
  const handleClickToggle = useCallback(() => {
    setOn((prev) => !prev);
  }, []);
  return {
    on,
    handleClickToggle,
  };
}

export default useToggle;
