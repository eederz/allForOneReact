import React, { useState } from "react";

const useTitle = () => {
  const [title, setTitle] = useState("");

  const changeTitle = (customTitle) => {
    setTitle(customTitle);
  };

  return {
    title,
    changeTitle,
  };
};

export default useTitle;
