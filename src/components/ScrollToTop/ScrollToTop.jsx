import React, { useState } from "react";

import { BsChevronUp, BsWindowDock } from "react-icons/bs";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });

  return (
    <div className={`scrollToTop ${visible ? "visible" : ""}`}>
      <a href="#">
        <BsChevronUp />
      </a>
    </div>
  )
}